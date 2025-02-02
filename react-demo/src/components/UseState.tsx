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
  const [obj, setObj] = useState(() => {
    //处理的逻辑要有返回值
    //这个函数只会初始化执行一次
    let date =
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate();
    return {
      date,
      name: "Alice",
      age: 18,
    };
  });
  const handleClickObj = () => {
    setObj({ ...obj, age: obj.age + 1 }); //解构
    setObj(Object.assign({}, obj, { age: obj.age + 1 })); //使用Object.assgin()
  };

  return (
    <>
      <Divider />
      <h1>关于引用类型的操作</h1>
      <h1>{obj.name}</h1>
      <h2>{obj.date}</h2>
      <h2>{obj.age}</h2>
      <Button type="primary" onClick={handleClickObj}>
        修改年龄
      </Button>
      <Divider />
    </>
  );
}

//关于
function UseState3() {
  const [index, setIndex] = useState(0);
  let handleClickIndex = () => {
    //异步的设计是为了性能优化
    //调用set函数会触发组件的重新渲染
    // setIndex(index+1)  // 异步
    // setIndex(index+1)
    // setIndex(index+1)  //1   自带类似防抖的功能
    // 要实现上面类似的效果
    setIndex((pre) => pre + 1); //拿到上次的返回结果  pre=>0
    setIndex((pre) => pre + 1); //pre=>1
    setIndex((pre) => {
      //pre=>2
      return pre + 1;
    });
    console.log(index); //0 同步
  };
  return (
    <>
      <Divider />
      <h1>关于组件渲染和异步调用以及防抖</h1>
      <h2>index:{index}</h2>
      <Button type="primary" onClick={handleClickIndex}>
        修改index
      </Button>
      <Divider />
    </>
  );
}
export { UseState, UseState2, UseState3 };
