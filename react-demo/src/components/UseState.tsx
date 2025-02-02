import { useState } from "react";
import { Button, Divider } from "antd";
//关于原始类型的操作
function UseState() {
  let [str, setStr] = useState("123");
  let [bool, setBool] = useState(true);
  let handleClickBool = () => {
    setBool(!bool);
  };
  return (
    <>
      <Divider />
      <h1>关于原始类型的操作</h1>
      <h1>{str}</h1>
      <Button type="primary" onClick={() => setStr("456")}>
        修改字符串
      </Button>
      <h2>{bool ? "开" : "关"}</h2>
      <Button type="primary" onClick={() => handleClickBool()}>
        修改布尔值
      </Button>
      <Divider />
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
      <Divider />
      <h1>关于引用类型的操作</h1>

      <h1>{obj.name}</h1>
      <h2>{obj.age}</h2>
      <Button  type="primary" onClick={handleClickObj}>修改年龄</Button>
      <Divider />
    </>
  );
}

export { UseState, UseState2 };
