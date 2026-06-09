import ValentineCard from "./components/ValentineCard";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <Analytics />
      <ValentineCard />
    </>
  );
}
