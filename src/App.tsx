import { useState } from "react";
import InputField from "./components/InputField";
import ToDo from "./components/ToDo";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  console.log(todo);

  return (
    <>
      <main className="bg-sky-600 h-full">
        <header className="flex justify-center p-6 z-10">
          <h1 className="text-3xl text-white">Taskify</h1>
        </header>
        <section className="flex justify-center mt-4 mb-12">
          <InputField
            todo={todo}
            setTodo={setTodo}
          />
        </section>
        <section className="flex justify-center">
          <div className="w-4/6 max-w-5xl m-6">
            <ToDo />
            <ToDo />
            <ToDo />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
