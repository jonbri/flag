import Link from "next/link";
import { PlayerAllTimeStats } from "@/components/PlayerAllTimeStats";
import { seasons } from "@/data";
import { TeamAllTimeStats } from "@/components/TeamAllTimeStats";

export async function generateStaticParams() {
  const players = ["Austin", "Jason", "Lisa"];
  const paths = players.map((name) => ({
    params: {
      name,
    },
  }));
  return paths.map(({ params: { name: slug } }) => ({
    slug,
  }));
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug: name } = params;

  return (
    <div>
      <Link href="/">Home</Link>
      <h2>{name}</h2>
      <br />
      <PlayerAllTimeStats seasons={seasons} athletes={[name]} />
      <br />
      <TeamAllTimeStats seasons={seasons} athletes={[name]} />
    </div>
  );
}
