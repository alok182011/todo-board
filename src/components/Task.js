import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Task({ task }) {
  return (
    <>
      <Card>
        <Card.Content as={Link} to={`/${task.status}/${task.id}`}>
          <Card.Header>{task.task}</Card.Header>
        </Card.Content>
      </Card>
    </>
  );
}

export default Task;
