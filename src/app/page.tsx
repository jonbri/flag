import { seasons } from "@/data";
import { Season } from "@/components/Season";
import { PlayerAllTimeStats } from "@/components/PlayerAllTimeStats";
import { TeamAllTimeStats } from "@/components/TeamAllTimeStats";
import "@/global.scss";

export default function Page() {
  return (
    <div>
      {seasons.map((season) => (
        <Season key={season.id} {...season} />
      ))}
      <PlayerAllTimeStats seasons={seasons} athletes={["Austin", "Jason"]} />
      <br />
      <TeamAllTimeStats seasons={seasons} athletes={["Austin", "Jason"]} />
    </div>
  );
}
