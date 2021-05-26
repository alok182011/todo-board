import React, { useContext } from "react";
import { Grid } from "semantic-ui-react";

import Task from "../components/Task";
import AddNew from "../components/AddNew";

import { TaskContext } from "../context/tasks";

import "./HomePage.css";

function HomePage() {
  const context = useContext(TaskContext);

  return (
    <Grid className="homepage-grid" columns={3}>
      <Grid.Column>
        <h1>
          Todo <span style={{ fontSize: 15 }}>{context.todo.length}</span>
        </h1>
        {context.todo.map((task) => (
          <Task key={task.id} task={task} />
        ))}
        <AddNew type={"todo"} />
      </Grid.Column>
      <Grid.Column>
        <h1>
          WIP <span style={{ fontSize: 15 }}>{context.wip.length}</span>
        </h1>
        {context.wip.map((task) => (
          <Task key={task.id} task={task} />
        ))}
        <AddNew type={"wip"} />
      </Grid.Column>
      <Grid.Column>
        <h1>
          Done <span style={{ fontSize: 15 }}>{context.done.length}</span>
        </h1>
        {context.done.map((task) => (
          <Task key={task.id} task={task} />
        ))}
        <AddNew type={"done"} />
      </Grid.Column>
    </Grid>
  );
}

export default HomePage;
