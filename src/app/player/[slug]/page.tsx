import Link from "next/link";

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
      <p>data here</p>
    </div>
  );
}
