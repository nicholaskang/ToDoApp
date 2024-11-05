import { useState } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./models";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const setTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <>
      <main>
        <header className="flex justify-center p-6 z-10">
          <h1 className="text-3xl text-white">Taskify</h1>
        </header>
        <section className="flex justify-center mt-4 mb-12">
          <InputField
            todo={todo}
            setTodo={setTodo}
            setTodoHandler={setTodoHandler}
          />
        </section>
        <section className="flex justify-center">
          <div className="w-full sm:w-5/6 md:w-4/5 lg:w-full max-w-5xl mx-auto my-4 p-4 sm:p-6 lg:p-8">
            <TodoList
              todos={todos}
              setTodos={setTodos}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
