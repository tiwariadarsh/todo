import React from "react";
import { Button } from "react-bootstrap";
export default function Completerender({ e, Deleting }) {
  return (
    <div className="bg-light my-2">
      <div className="d-flex justify-content-between">
        <div className="p-2 col-example text-left">{e.title}</div>
        <div className="p-2 col-example text-left">{e.content}</div>
        <div className="p-2 col-example text-left">
          {" "}
          <Button
            variant="outline-danger"
            onClick={() => {
              Deleting(e);
            }}
          >
            <span
              className="iconify"
              data-icon="bi-trash"
              data-inline="false"
            ></span>
          </Button>{" "}
        </div>
      </div>
      <hr />
    </div>
  );
}
