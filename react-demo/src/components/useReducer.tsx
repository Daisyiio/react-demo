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

//购物车案例
const initData = [
  { name: "芜菁", price: 200, count: 1, id: 1, isEdit: false },
  { name: "卷心菜", price: 300, count: 1, id: 2, isEdit: false },
  { name: "草莓", price: 500, count: 1, id: 3, isEdit: false },
];
type Action =
  | { type: "add" | "sub" | "delete" | "edit" | "blur"; id: number }
  | { type: "update_name"; id: number; newName: string };
type Data = typeof initData;
//处理函数
const reducer2 = (
  state: Data,
  // action: {
  //   type: "add" | "sub" | "delete" | "edit" | "update_name" | "blur";
  //   id: number;
  //   newName?: string;
  // }
  action:Action
) => {
  switch (action.type) {
    case "add":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, count: item.count + 1 }; // ✅ 返回新对象
        }
        return item;
      });

    case "sub":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, count: Math.max(0, item.count - 1) }; // ✅ 防止负数
        }
        return item;
      });
    case "delete":
      return state.filter((item) => item.id !== action.id);
    case "edit":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, isEdit: !item.isEdit }; // ✅ 返回新对象
        }
        return item;
      });
    case "update_name":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, name: action.newName }; // ✅ 返回新对象
        }
        return item;
      });
    case "blur":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, isEdit: false }; // ✅ 返回新对象
        }
        return item;
      });
    default:
      return state;
  }
};
function UserReducer2() {
  const [data, dispatch2] = useReducer(reducer2, initData);
  return (
    <>
      <Divider />
      <h1>购物车</h1>
      <table cellPadding={0} cellSpacing={0} width={800} border={1}>
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>商品</th>
            <th>单价</th>
            <th>数量</th>
            <th>总价</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => {
            return (
              <tr style={{ textAlign: "center" }} key={item.id}>
                <td>
                  {item.isEdit ? (
                    <input
                      value={item.name}
                      onBlur={() => dispatch2({ type: "blur", id: item.id })}
                      onChange={(e) =>
                        dispatch2({
                          type: "update_name",
                          id: item.id,
                          newName: e.target.value,
                        })
                      }
                    ></input>
                  ) : (
                    <p>{item.name}</p>
                  )}
                </td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => dispatch2({ type: "add", id: item.id })}
                  >
                    +
                  </button>
                  {item.count}
                  <button
                    onClick={() => dispatch2({ type: "sub", id: item.id })}
                  >
                    -
                  </button>
                </td>
                <td>{item.price * item.count}</td>
                <td>
                  <button
                    onClick={() => dispatch2({ type: "edit", id: item.id })}
                  >
                    修改
                  </button>
                  <button
                    onClick={() => dispatch2({ type: "delete", id: item.id })}
                  >
                    删除
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}></td>
            <td align="right">
              总价:
              {data.reduce((pre: any, cur: any): number => {
                return pre + cur.price * cur.count;
              }, 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
export { UseReducer1, UserReducer2 };
