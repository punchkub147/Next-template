import Link from "next/link";

export default props => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/todo">
            <a>Todos</a>
          </Link>
        </li>
        <li>
          <Link href="/counter">
            <a>Counter</a>
          </Link>
        </li>
        <li>
          <Link href="/form">
            <a>Form</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
