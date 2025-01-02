import Link from "next/link";
import { seasons } from "@/data";

export async function generateStaticParams() {
  const paths = seasons.map(({ id }) => ({
    params: {
      id,
    },
  }));
  return paths.map(({ params: { id: slug } }) => ({
    slug,
  }));
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;

  const { slug: id } = params;

  const season = seasons.find((season) => season.id === id);
  if (!season) {
    return <div>Season not found</div>;
  }
  const { name, teams } = season;

  return (
    <div>
      <Link href="/">Home</Link>
      <h2>{name}</h2>
      <br />
      {teams.map((team) => (
        <div
          style={{
            backgroundColor: team.color,
            color: team.secondaryColor,
          }}
          key={team.name}
        >
          {team.name}
        </div>
      ))}
    </div>
  );
}
