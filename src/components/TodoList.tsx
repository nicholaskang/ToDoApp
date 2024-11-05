import { Todo } from "../models";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row space-y-4 md:space-y-6 lg:space-y-0 lg:space-x-8">
      {/* Active Todos Section */}
      <div className="bg-blue-50 shadow rounded-lg p-3 sm:p-5 md:p-6 lg:p-8 flex-1 lg:w-3/5 lg:h-max">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
          Active Tasks
        </p>
        <ul className="space-y-3 sm:space-y-4">
          {todos
            .filter((todo) => !todo.isDone)
            .map((todo) => (
              <TodoItem
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
        </ul>
      </div>

      {/* Completed Todos Section */}
      <div className="bg-green-50 shadow rounded-lg p-3 sm:p-5 md:p-6 lg:p-8 flex-1 lg:w-3/5 lg:h-max">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
          Completed Tasks
        </p>
        <ul className="space-y-3 sm:space-y-4">
          {todos
            .filter((todo) => todo.isDone)
            .map((todo) => (
              <TodoItem
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
