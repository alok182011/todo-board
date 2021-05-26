import React, { useContext, useState } from "react";
import { Button, Form, TextArea } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

import { TaskContext } from "../context/tasks";

import "./EditTask.css";

function EditTask({ type, taskId, task, taskDesc }) {
  const history = useHistory();
  const {
    addtodo,
    removetodo,
    edittodo,
    addwip,
    removewip,
    editwip,
    adddone,
    removedone,
    editdone,
  } = useContext(TaskContext);

  const [values, setValues] = useState({
    task: "",
    desc: "",
    status: "",
  });

  const [formOpen, setFormOpen] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "todo") edittodo(taskId, values.task, values.desc);
    if (type === "wip") editwip(taskId, values.task, values.desc);
    if (type === "done") editdone(taskId, values.task, values.desc);
    values.task = "";
    values.desc = "";

    history.push("/");
  };

  return (
    <>
      {formOpen ? (
        <Form onSubmit={handleSubmit} noValidate>
          <Form.Input
            fluid
            type="text"
            label="Task"
            placeholder="Task"
            name="task"
            value={values.task}
            onChange={handleChange}
            style={{
              minHeight: 30,
              fontSize: 20,
            }}
          />
          <TextArea
            type="text"
            label="Desc"
            name="desc"
            value={values.desc}
            onChange={handleChange}
            placeholder="Description"
            style={{
              minHeight: 50,
              fontSize: 20,
            }}
          />
          <Button
            style={{ marginTop: 10 }}
            disabled={!values.task.trim()}
            type="submit"
          >
            Edit
          </Button>
          <Button style={{ marginTop: 10 }} onClick={() => setFormOpen(false)}>
            ❌
          </Button>
        </Form>
      ) : (
        <Button style={{ marginTop: 10 }} onClick={() => setFormOpen(true)}>
          Edit
        </Button>
      )}
      {type === "todo" ? (
        <Button
          primary
          style={{ marginTop: 10 }}
          onClick={() => {
            addwip(task, taskDesc);
            removetodo(taskId);
            history.push("/");
          }}
        >
          Move to WIP
        </Button>
      ) : (
        ""
      )}
      {type === "wip" ? (
        <>
          <Button
            primary
            style={{ marginTop: 10 }}
            onClick={() => {
              addtodo(task, taskDesc);
              removewip(taskId);
              history.push("/");
            }}
          >
            Move to TODO
          </Button>
          <Button
            primary
            style={{ marginTop: 10 }}
            onClick={() => {
              adddone(task, taskDesc);
              removewip(taskId);
              history.push("/");
            }}
          >
            Move to DONE
          </Button>
        </>
      ) : (
        ""
      )}
      {type === "done" ? (
        <Button
          primary
          style={{ marginTop: 10 }}
          onClick={() => {
            addwip(task, taskDesc);
            removedone(taskId);
            history.push("/");
          }}
        >
          Move to WIP
        </Button>
      ) : (
        ""
      )}
    </>
  );
}

export default EditTask;
