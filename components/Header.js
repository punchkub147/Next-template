import Link from "next/link";

export default props => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/todo">
            <a>TODOS</a>
          </Link>
        </li>
        <li>
          <Link href="/counter">
            <a>COUNTER</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
