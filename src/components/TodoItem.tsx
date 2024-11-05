import { useEffect, useRef, useState } from "react";
import { Todo } from "../models";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoItem = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="flex flex-col sm:flex-row justify-between items-center p-2 sm:p-4 lg:p-6 bg-white shadow rounded-lg my-2 mx-auto max-w-full lg:max-w-1/2"
      onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          type="text"
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="w-full sm:flex-grow min-w-0 px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base mb-2 sm:mb-0"
        />
      ) : (
        <span className="text-gray-800 text-sm sm:text-base mb-2 sm:mb-0">
          {todo.todo}
        </span>
      )}

      <div className="flex flex-row space-x-1 sm:space-x-2">
        <button
          type="button"
          className="hover:text-blue-500"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}>
          <i className="material-icons p-1">edit</i>
        </button>
        <button
          type="button"
          onClick={() => handleDelete(todo.id)}>
          <i className="material-icons p-1 hover:text-red-500">delete</i>
        </button>
        <button
          type="button"
          onClick={() => handleDone(todo.id)}>
          <i className="material-icons p-1 hover:text-green-500">check</i>
        </button>
      </div>
    </form>
  );
};

export default TodoItem;
