import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { DropdownButton, Dropdown } from "react-bootstrap";

export default function Todos({ setCom, com }) {
  let intitial;

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

  const addtocomplete = (todo) => {
    // console.log(todo);
    let x1;
    if (com.length === 0) {
      x1 = 0;
    } else {
      x1 = com.length + 1;
    }
    let k1 = {
      id: x1,
      title: todo.title,
      content: todo.content,
    };
    //console.log(k1);
    setCom((state) => [...state, k1]);
    localStorage.setItem("com", JSON.stringify(com));
  };

  var bgcol;

  const addtodo = (e) => {
    //removing spaces
    var s1 = title;
    var s2 = content;
    s1 = s1.replace(/\s/g, "");
    s2 = s2.replace(/\s/g, "");

    if (!s1 && !s2) {
      alert("Title and Content can not be empty");
      return;
    }
    if (!s1) {
      alert("Title can not be empty");
      return;
    }
    if (!s2) {
      alert("Content can not be empty");
      return;
    }

    e.preventDefault();
    let x;
    if (Todos.length === 0) x = 1;
    else x = Todos[Todos.length - 1].id + 1;
    var date = new Date();
    var t1 = date.toLocaleTimeString();
    var d1 = date.toLocaleDateString();
    const k = {
      id: x,
      title: title,
      content: content,
      time: t1,
      date: d1,
      bgcol: bgcol,
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
            <label className="form-label text col-2 mx-2">Title</label>
            <input
              type="text"
              className="form-control col-9"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="row my-3">
            <label className="form-label col-2 mx-2">Content</label>
            <input
              type="text"
              className="form-control col-9"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="text-center">
            {/* <button type="submit" className="btn btn-success">
              Add To-Do
            </button> */}
            <DropdownButton
              id="dropdown-item-button"
              title="Add Task"
              variant="success"
            >
              <Dropdown.Item
                as="button"
                //type="submit"
                onClick={() => {
                  bgcol = "#d5f4e6";
                }}
              >
                Must Do
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                //type="submit"
                onClick={() => {
                  bgcol = "#FFFACD";
                }}
              >
                Important
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                //type="submit"
                onClick={() => {
                  bgcol = "#F8F8FF";
                }}
              >
                Something else
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </form>
      <h1 className="text-center my-4">My Task List</h1>
      {Todos.length === 0 ? (
        <h1 className="text-center text-danger">There is no task , Add some</h1>
      ) : (
        Todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              onDelete={onDelete}
              addtocomplete={addtocomplete}
            />
          );
        })
      )}
    </div>
  );
}
