interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  setTodoHandler: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, setTodoHandler }) => {
  return (
    <form
      className="flex flex-col items-start w-[60%] max-w-lg"
      onSubmit={setTodoHandler}>
      <label className="mb-1 text-slate-200">Add a Task:</label>
      <input
        className="w-full p-2 mb-2"
        type="input"
        placeholder="Enter task name"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="w-full text-center text-white rounded-md p-2 bg-sky-800 hover:bg-sky-900 active:bg-sky-950"
        type="submit">
        Add Task
      </button>
    </form>
  );
};

export default InputField;
