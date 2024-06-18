import { useGlobalContext } from "../hooks/useGlobalContext";

function Korzinka() {
  const { count, changeCount } = useGlobalContext();
  return (
    <div className="gap-10">
      <button
        onClick={() => changeCount((count) => count - 1)}
        className="btn btn-secondary"
      >
        -
      </button>
      <button
        onClick={() => changeCount((count) => count + 1)}
        className="btn btn-secondary"
      >
        +
      </button>
    </div>
  );
}

export default Korzinka;
