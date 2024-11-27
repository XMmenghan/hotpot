import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Hot Pot</h1>
      <ul>
        <li>
          <Link href="/admin/tables">Table Management</Link>
        </li>
      </ul>
    </main>
  );
}
