import { PlayVideo } from "@/components";
import { banner } from "@/public"

export default function Video() {
	return <PlayVideo videosrc="/workizvideo.mp4" backgroundImage={banner} />;
}
