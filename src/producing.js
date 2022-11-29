import { createContext, useState } from "react";
import Fconsumer from "./fconsumer";

export const NodeContext = createContext();

const NodeState = () => {
  const obj = {
    name: "neeraj",
    id: 10,
    course: "mern",
  };
  //   const [state, setState] = useState(obj);

  return (
    <NodeContext.Provider value={obj}>
      <Fconsumer />
    </NodeContext.Provider>
  );
};

export default NodeState;
