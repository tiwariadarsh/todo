import React, { useState, useEffect } from "react";
import Todo from "./Todo";

export default function Todos() {
  let intitial = [
    { id: 1, title: "Market", content: "Go to the market on 6'o clock" },
  ];

  if (localStorage.getItem("Todos") === null) {
    intitial = [];
  } else {
    intitial = JSON.parse(localStorage.getItem("Todos"));
  }

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onDelete = (todo) => {
    setTodo(
      Todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("Todos", JSON.stringify(Todos));
  };

  const addtodo = (e) => {
    if (!title && !content) {
      alert("Title and Content can not be empty");
      return;
    }
    if (!title) {
      alert("Title can not be empty");
      return;
    }
    if (!content) {
      alert("Content can not be empty");
      return;
    }

    e.preventDefault();
    let x;
    if (Todos.length === 0) x = 1;
    else x = Todos[Todos.length - 1].id + 1;
    const k = {
      id: x,
      title: title,
      content: content,
    };
    setTodo([...Todos, k]);
    setTitle("");
    setContent("");
    localStorage.setItem("Todos", JSON.stringify(Todos));
  };

  const [Todos, setTodo] = useState(intitial);
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(Todos));
  }, [Todos]);

  return (
    <div>
      <form onSubmit={addtodo}>
        <div className="mb-3 my-3">
          <div className="row">
            <label className="form-label text col-2 mx-2">
              Title
            </label>
            <input
              type="text"
              className="form-control col-9"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="row my-3">
            <label className="form-label col-2 mx-2">
              Content
            </label>
            <input
              type="text"
              className="form-control col-9"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-success">
              Add To-Do
            </button>
          </div>
        </div>
      </form>
      <h1 className="text-center my-4">My To-Do List</h1>
      {Todos.length === 0 ? (
        <h1 className="text-center text-danger">No to-do to show , Add some</h1>
      ) : (
        Todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} onDelete={onDelete} />;
        })
      )}
    </div>
  );
}
