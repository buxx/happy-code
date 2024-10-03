// npm install ts-pattern
import { match } from "ts-pattern";

type Action = {
  type: "start" | "pause" | "stop";
  playlistId?: number
};

const action: Action = { type: "start", playlistId: 42 };

match(action)
  .with({ type: "start" }, () => console.log(`Start playlist ${action.playlistId}`))
  .with({ type: "pause" }, () => console.log(`Pause`))
  .with({ type: "stop" }, () => console.log(`Stop`))
  .exhaustive();
