import React, { useContext } from "react";
import { Card, Button, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

import { TaskContext } from "../context/tasks";

import "./TaskPage.css";

import EditTask from "../components/EditTask";

function TaskPage(props) {
  const history = useHistory();
  const taskId = props.match.params.taskName;
  const taskStatus = props.match.params.taskStatus;
  const { todo, wip, done, removetodo, removewip, removedone } =
    useContext(TaskContext);

  if (taskStatus === "todo") {
    return (
      <Card className="taskpage-card">
        <Card.Content>
          <Card.Header className="taskpage-header">{taskStatus}</Card.Header>
          {todo.map((task) => {
            if (task.id === taskId) {
              return (
                <>
                  <Card.Description>
                    <h2>Task:</h2>
                    <p className="taskpage-details">{task.task}</p>
                  </Card.Description>
                  <Card.Description>
                    <h2>Description:</h2>
                    <p className="taskpage-details">{task.desc}</p>
                  </Card.Description>
                  <EditTask
                    type={"todo"}
                    taskId={taskId}
                    task={task.task}
                    taskDesc={task.desc}
                  />
                </>
              );
            } else return null;
          })}
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button
              onClick={() => {
                removetodo(taskId);
                history.push("/");
              }}
              basic
              color="red"
            >
              <Icon name="trash" style={{ margin: 0 }} />
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }

  if (taskStatus === "wip") {
    return (
      <Card className="taskpage-card">
        <Card.Content>
          <Card.Header className="taskpage-header">{taskStatus}</Card.Header>
          {wip.map((task) => {
            if (task.id === taskId) {
              return (
                <>
                  <Card.Description>
                    <h2>Task:</h2>
                    <p className="taskpage-details">{task.task}</p>
                  </Card.Description>
                  <Card.Description>
                    <h2>Description:</h2>
                    <p className="taskpage-details">{task.desc}</p>
                  </Card.Description>
                  <EditTask
                    type={"wip"}
                    taskId={taskId}
                    task={task.task}
                    taskDesc={task.desc}
                  />
                </>
              );
            } else return null;
          })}
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button
              onClick={() => {
                removewip(taskId);
                history.push("/");
              }}
              basic
              color="red"
            >
              <Icon name="trash" style={{ margin: 0 }} />
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }

  if (taskStatus === "done") {
    return (
      <Card className="taskpage-card">
        <Card.Content>
          <Card.Header className="taskpage-header">{taskStatus}</Card.Header>
          {done.map((task) => {
            if (task.id === taskId) {
              return (
                <>
                  <Card.Description>
                    <h2>Task:</h2>
                    <p className="taskpage-details">{task.task}</p>
                  </Card.Description>
                  <Card.Description>
                    <h2>Description:</h2>
                    <p className="taskpage-details">{task.desc}</p>
                  </Card.Description>
                  <EditTask
                    type={"done"}
                    taskId={taskId}
                    task={task.task}
                    taskDesc={task.desc}
                  />
                </>
              );
            } else return null;
          })}
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button
              onClick={() => {
                removedone(taskId);
                history.push("/");
              }}
              basic
              color="red"
            >
              <Icon name="trash" style={{ margin: 0 }} />
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default TaskPage;
