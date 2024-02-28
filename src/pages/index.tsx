import Image from "next/image";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
    <Spline scene="https://prod.spline.design/LlXWAHpPgUASp0-B/scene.splinecode" />
    <Spline scene="https://prod.spline.design/kSYWSZBQVZR0nV5C/scene.splinecode" />
    <Spline scene="https://prod.spline.design/Im0qvpsPznwAesBo/scene.splinecode" />
    </main>
  );
}
