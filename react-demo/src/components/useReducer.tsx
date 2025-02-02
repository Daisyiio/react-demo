import { Button, Divider } from "antd";
import { useState, useReducer } from "react";

//默认值
const initState = {
  count: -1,
};
type State = typeof initState;
//初始化函数 只走一次  修饰默认值
const initFn = (state: State) => {
  console.log("init", state);
  return { count: Math.abs(state.count) };
};
// 处理函数reducer  默认不执行  通过dispatch触发
const reducer = (state: State, action: { type: "add" | "sub" }) => {
    console.log("reducer");
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "sub":
      return { count: state.count - 1 };
  }
//   return state;
};
function UseReducer1() {
  // const [state ,dispatch] = useReducer(UseReducer,initialArg,init?)
  let [count, setCount] = useState(0);

  //第二个参数是默认值
  //第三个参数是可选的 初始化函数 修饰默认值
  let [state, dispatch] = useReducer(reducer, initState, initFn);
  return (
    <>
      <Divider />
      {/* //用 usestate 实现累加 */}
      <div>
        <p>{count}</p>
        <Button onClick={() => setCount(count + 1)}>+1</Button>
        <Button onClick={() => setCount(count - 1)}>-1</Button>
      </div>
      <Divider />
      {/* //用 useReducer 实现累加 */}
      <div>
        <p>{state.count}</p>
        <Button onClick={() => dispatch({ type: "add" })}>+1</Button>
        <Button onClick={() => dispatch({ type: "sub" })}>-1</Button>
      </div>
    </>
  );
}

export { UseReducer1 };
