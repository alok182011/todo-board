import React, { useContext, useState } from "react";
import { Button, Form, TextArea } from "semantic-ui-react";

import { TaskContext } from "../context/tasks";

function AddNew({ type }) {
  const context = useContext(TaskContext);

  const [values, setValues] = useState({
    task: "",
    desc: "",
  });

  const [formOpen, setFormOpen] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "todo") context.addtodo(values.task, values.desc);
    if (type === "wip") context.addwip(values.task, values.desc);
    if (type === "done") context.adddone(values.task, values.desc);
    values.task = "";
    values.desc = "";
    setFormOpen(false);
  };

  return (
    <>
      {formOpen ? (
        <Form onSubmit={handleSubmit} noValidate style={{ marginTop: 10 }}>
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
              minWidth: 30,
              fontSize: 20,
            }}
          />
          <Button
            style={{ marginTop: 10 }}
            disabled={!values.task.trim()}
            type="submit"
          >
            ➕
          </Button>
          <Button style={{ marginTop: 10 }} onClick={() => setFormOpen(false)}>
            ❌
          </Button>
        </Form>
      ) : (
        <Button onClick={() => setFormOpen(true)}>+ New</Button>
      )}
    </>
  );
}

export default AddNew;
