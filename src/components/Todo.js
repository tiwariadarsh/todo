import React from "react";
import { Button } from "react-bootstrap";

export default function Todo({ todo, onDelete , addtocomplete }) {
  return (
    <div className="bg-light">
      <div className="d-flex justify-content-between">
        <div className="p-2 col-example text-left">{todo.title}</div>
        <div className="p-2 col-example text-left">{todo.content}</div>
        <div className="p-2 col-example text-left">
          {" "}
          <div>
          <Button
            variant="outline-primary mx-1"
            onClick={() => {
              addtocomplete(todo);
              onDelete(todo);
            }}
          >
            Done
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => {
              onDelete(todo);
            }}
          >
            Delete
          </Button></div>{" "}
        </div>
      </div>
      <hr />
    </div>
  );
}
