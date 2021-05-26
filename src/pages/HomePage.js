import React, { useContext } from "react";
import { Grid } from "semantic-ui-react";

import Task from "../components/Task";
import AddNew from "../components/AddNew";

import { TaskContext } from "../context/tasks";

import "./HomePage.css";

function HomePage() {
  const { todo, wip, done } = useContext(TaskContext);

  return (
    <Grid className="homepage-grid" columns={3}>
      <Grid.Column>
        <h1>
          Todo{" "}
          <span style={{ fontSize: 15 }}>
            {todo !== null ? todo.length : 0}
          </span>
        </h1>
        {todo.map((task) => (
          <Task key={task.id} task={task} />
        ))}
        <AddNew type={"todo"} />
      </Grid.Column>
      <Grid.Column>
        <h1>
          WIP{" "}
          <span style={{ fontSize: 15 }}>{wip !== null ? wip.length : 0}</span>
        </h1>
        {wip.map((task) => (
          <Task key={task.id} task={task} />
        ))}
        <AddNew type={"wip"} />
      </Grid.Column>
      <Grid.Column>
        <h1>
          Done{" "}
          <span style={{ fontSize: 15 }}>
            {done !== null ? done.length : 0}
          </span>
        </h1>
        {done.map((task) => (
          <Task key={task.id} task={task} />
        ))}
        <AddNew type={"done"} />
      </Grid.Column>
    </Grid>
  );
}

export default HomePage;
