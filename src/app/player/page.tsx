import Link from "next/link";

export default function Page() {
  return (
    <div className="listpage">
      <h2>Players</h2>
      <ul>
        <li>
          <Link href={`/player/Austin`}>Austin</Link>
        </li>
        <li>
          <Link href={`/player/Jason`}>Jason</Link>
        </li>
      </ul>
    </div>
  );
}
