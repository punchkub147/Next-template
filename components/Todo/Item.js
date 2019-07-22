import useAnimateRemove from "../../lib/useAnimateRemove";
import Link from "next/link";

const TodoItem = ({ data: { id, title, completed }, onRemove, onUpdate }) => {
  const { removedStyle, remove } = useAnimateRemove({ callback: onRemove });
  return (
    <div style={removedStyle}>
      <div className="card mb-2 rounded-lg">
        <div className="row">
          <div className="col-auto mr-auto">
            <input type="checkbox" checked={completed} onClick={onUpdate} />
            <Link href="/todo/[id]" as={`/todo/${id}`}>
              <a className={completed ? "text-line" : ""}>
                {" "}
                {id}: {title}
              </a>
            </Link>
          </div>
          <div className="col-auto">
            <button onClick={remove}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
