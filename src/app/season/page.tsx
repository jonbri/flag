import Link from "next/link";
import { seasons } from "@/data";

export default function Page() {
  return (
    <div className="listpage">
      <h2>Seasons</h2>
      <ul>
        {seasons.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/season/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
