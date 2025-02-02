import { useState } from "react";
//关于原始类型的操作
function UseState() {
  let [str, setStr] = useState("123");
  let [bool, setBool] = useState(true);
  let handleClickBool = () => {
    setBool(!bool);
  };
  return (
    <>
      <h1>{str}</h1>
      <button onClick={() => setStr("456")}>修改字符串</button>
      <h2>{bool ? "开" : "关"}</h2>
      <button onClick={() => handleClickBool()}>修改布尔值</button>
    </>
  );
}

//关于引用类型的操作

function UseState2() {
  const [obj, setObj] = useState({ name: "Alice", age: 25 });
  const handleClickObj = () => {
    setObj({ ...obj, age: obj.age + 1 });
  };

  return (
    <>
      <h1>{obj.name}</h1>
      <h2>{obj.age}</h2>
      <button onClick={handleClickObj}>修改年龄</button>
    </>
  );
}

export { UseState, UseState2 };
