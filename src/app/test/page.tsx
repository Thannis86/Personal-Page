import { Text } from "@radix-ui/themes";
import ParticlesApp from "../../components/particles/particles";

import "./test.css";

export default function TestPage() {
  return (
    <div id="TestPageGrid">
      <ParticlesApp />

      <Text>Particles Test</Text>
    </div>
  );
}
