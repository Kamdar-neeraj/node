import { NodeContext } from "./producing";

export default function Fconsumer() {
  return (
    <NodeContext.Consumer>
      {(value) => <h1>{value.name}</h1>}
    </NodeContext.Consumer>
  );
}
