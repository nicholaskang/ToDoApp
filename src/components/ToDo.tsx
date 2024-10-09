const ToDo = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <p>Todo text</p>
      <div>
        <button className="hover:text-white">
          <i className="material-icons p-1">edit</i>
        </button>
        <button>
          <i className="material-icons p-1">delete</i>
        </button>
        <button>
          <i className="material-icons p-1">check</i>
        </button>
      </div>
    </div>
  );
};

export default ToDo;
