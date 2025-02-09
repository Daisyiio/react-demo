import { useState, useRef, forwardRef, useImperativeHandle } from "react";

//简单的ref使用
function UseRefDemo() {
  const [count, setCount]: any = useState(0);
  const prevCount = useRef();
  function handleClick() {
    prevCount.current = count;
    setCount(count + 1);
  }
  return (
    <>
      <div>
        <p>最新的count:{count}</p>
        <p>上一次的count:{prevCount.current}</p>
        <button onClick={handleClick}>增加</button>
      </div>
    </>
  );
}

//

// 定义一个接口，表示 ref 能够暴露的方法
interface ChildRefType {
  myFn: () => void;
}

const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    myFn: () => {
      console.log("子组件的 myFn 被调用");
    },
  }));

  return <div>子组件</div>;
});
function UseRefDemo2() {
  const ChildRef = useRef<ChildRefType | null>(null);
  function handeClick() {
    if (ChildRef.current) {
      ChildRef.current.myFn();
    } else {
      console.log("ChildRef.current 为空");
    }
  }
  return (
    <div>
      <Child ref={ChildRef} />
      <button onClick={handeClick}>按钮</button>
    </div>
  );
}

export { UseRefDemo, UseRefDemo2 };
