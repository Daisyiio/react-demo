import "./App.scss";

import Mustache from "@/components/Mustache";
import { UseState,UseState2,UseState3 } from "@/components/UseState";
function App() {
  return (
    <>
      <div>
        <Mustache />
        <UseState></UseState>
        <UseState2> </UseState2>
        <UseState3></UseState3> 
      </div>
    </>
  );
}

export default App;
