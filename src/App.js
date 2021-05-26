import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import { TaskProvider } from "./context/tasks";

import "semantic-ui-css/semantic.min.css";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";

function App() {
  return (
    <TaskProvider>
      <Container>
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:taskStatus/:taskName" component={TaskPage} />
        </BrowserRouter>
      </Container>
    </TaskProvider>
  );
}

export default App;
