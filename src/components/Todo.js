import React from "react";
import { Button } from "react-bootstrap";

export default function Todo({ todo, onDelete, addtocomplete }) {
  const s1 = {
    fontSize : "0.55rem",
    color : "blue",

  }
  const op={
    backgroundColor : todo.bgcol,
  }
  return (
    <div style={op}>
      <div className="d-flex justify-content-between">
        <div className="p-2 col-example text-left">
          <div>
            {todo.title}
            <div style={s1}>{todo.date}</div>
            <div style={s1}>{todo.time}</div>
          </div>
        </div>
        <div className="p-2 col-example">{todo.content}</div>
        <div className="p-2 col-example text-left">
          {" "}
          <div>
            <Button
              variant="outline-success mx-1"
              onClick={() => {
                addtocomplete(todo);
                onDelete(todo);
              }}
            >
              <span
                className="iconify"
                data-icon="ic:twotone-cloud-done"
                data-inline="false"
                data-height="19"
                data-width="19"
              />
            </Button>
            <Button
              variant="outline-danger"
              onClick={() => {
                onDelete(todo);
              }}
            >
              Delete
            </Button>
          </div>{" "}
        </div>
      </div>
      <hr />
    </div>
  );
}
