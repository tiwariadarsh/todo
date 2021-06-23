import React, { useState } from "react";
import Todo from "./Todo";

export default function Todos() {
  let todo = [
    { id: 1, title: "Title1", content: "Content1" },
    { id: 2, title: "Title2", content: "Content2" },
    { id: 3, title: "Title3", content: "Content3" },
  ];

  const [Todos, setTodo] = useState(todo);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onDelete = (todo) => {
    setTodo(
      Todos.filter((e) => {
        return e !== todo;
      })
    );
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
  };

  return (
    <div>
      <form onSubmit={addtodo}>
        <div className="mb-3 my-3">
          <div className="row">
            <label className="form-label text col-1 mx-2">
              <h3>Title</h3>
            </label>
            <input
              type="text"
              className="form-control col-10"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="row my-3">
            <label className="form-label col-1 mx-2">
              <h3>Content</h3>
            </label>
            <input
              type="text"
              className="form-control col-10"
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
