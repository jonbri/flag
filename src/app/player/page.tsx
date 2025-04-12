import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href="/">Home</Link>
      <h2>Players</h2>
      <ul>
        <li>
          <a href={`/player/Austin`}>Austin</a>
        </li>
        <li>
          <a href={`/player/Jason`}>Jason</a>
        </li>
      </ul>
    </div>
  );
}
