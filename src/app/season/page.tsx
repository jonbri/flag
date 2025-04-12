import Link from "next/link";
import { seasons } from "@/data";

export default function Page() {
  return (
    <div>
      <Link href="/">Home</Link>
      <h2>Seasons</h2>
      <ul>
        {seasons.map(({ id }) => (
          <li key={id}>
            <a href={`/season/${id}`}>{id}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
