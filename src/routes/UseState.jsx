/*


*/

import { Plus } from "lucide-react";
import { useState } from "react";

export default function App() {
  // Immuable -> on ne peut pas les muter
  // Remplacer l'état actuelle
  const [todos, setTodos] = useState([
    {
      todo: "Faire des courses",
      id: Date.now(),
      completed: false,
    },
  ]);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const todo = formData.get("todo");

    const newTodo = {
      todo: todo,
      id: Date.now(),
      completed: false,
    };

    setTodos([...todos, newTodo]);

    e.currentTarget.reset();
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleChecked = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    );
  };

  return (
    <div className="">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label className="input input-bordered flex items-center gap-2">
          <input name="todo" type="text" className="grow" placeholder="Todo" />
          <button type="submit" className="btn btn-outline btn-sm">
            <Plus size={16} />
          </button>
        </label>
      </form>
      <div className="mt-8 flex flex-col gap-4">
        {todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            onDelete={() => {
              handleDelete(todo.id);
            }}
            onToggleCompleted={() => {
              handleChecked(todo.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}

const Todo = (props) => {
  return (
    <div className="flex items-center gap-4">
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => {
          props.onToggleCompleted?.();
        }}
        className="checkbox"
      />
      <p>{props.todo.todo}</p>
      <button
        onClick={() => {
          console.log("Delete");
          props.onDelete?.();
        }}
        className="btn btn-error btn-sm"
      >
        Delete
      </button>
    </div>
  );
};
