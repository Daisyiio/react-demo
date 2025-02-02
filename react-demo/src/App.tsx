import "./App.css";

function App() {
  // 1.插值语句 jsx tsx {} 字符串 数字  数组{原始类型}  元素  三元表达式  API调用
  // 2.插值语句如何支持对象  需要序列化  JSON.stringify()
  // 3.时间如何添加  onClick  如果需要传参  使用高阶函数 如果不需要就直接丢给他函数体 onClick={() => fn("123")}
  //4.我想支持泛型函数  他把<T>理解成了是一个元素 <div>  纠正泛型<T,>
  //5. 如何去绑定属性 id class 等等 {}  class比较特殊 叫className
  //6.如何绑定多个class 模板语法  className={`${cls} aa bb`}
  //7.如何绑定style {color:'red'} style={style}  style={{ color: "red" }}
  //8.如何添加html 代码片段v-html  dangerouslySetInnerHTML={{ __html: html }}
  //9. 如何遍历数组 v-for---> map {arr.map((item,index)=>{return <div key={index}>{item}</div>})}
  let cls = "test";
  let style = { color: "red" };
  let html = "<section> <h1>我是H1</h1> </section>";
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const fn = <T,>(params: T) => {
    console.log(params);
  };
  return (
    <>
      <div
        style={style}
        className={`${cls} aa bb`}
        onClick={() => fn("123")}
        dangerouslySetInnerHTML={{ __html: html }}
      >
        {/* 点击 */}
      </div>
      <div>
        {arr.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </>
  );
}

export default App;
