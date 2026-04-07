import Image from "next/image";
import { seasons } from "@/data";
import { Season } from "@/components/Season";

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

  const { teams, images = [] } = season;

  return (
    <div>
      <Season {...season} />
      {images.length > 0 && (
        <div style={{ marginTop: 16 }}>
          {images.map(({ src, alt, width = 500, height = 500 }) => (
            <Image
              src={src}
              alt={alt}
              key={src}
              width={width}
              height={height}
              style={{ maxWidth: "100%", height: "auto", borderRadius: 8 }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
