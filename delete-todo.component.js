import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

class DeleteTodo {
  deleteTodo(id) {
    axios
      .get("http://localhost:4000/todos/deleteTodo/" + id)
      .then(() => {
        console.log("Todo Deleted !!!");
      })
      .catch(error => {
        console.log(error);
      });
    this.props.history.push("/");
  }
  render() {
    return 0;
  }
}

export default DeleteTodo;
