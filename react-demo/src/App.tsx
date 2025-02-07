import "./App.scss";

import Mustache from "@/components/Mustache";
import { UseState, UseState2, UseState3 } from "@/components/UseState";
import { UseReducer1, UserReducer2 } from "@/components/useReducer";
import {PropAndSlot} from '@/components/PropAndSlot/PropAndSlot'
function App() {
  return (
    <>
      <div>
        <Mustache />
        <UseState></UseState>
        <UseState2> </UseState2>
        <UseState3></UseState3>
        <UseReducer1></UseReducer1>
        <UserReducer2></UserReducer2>
        <PropAndSlot></PropAndSlot>
      </div>
    </>
  );
}

export default App;
