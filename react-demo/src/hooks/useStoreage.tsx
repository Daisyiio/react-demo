import { useSyncExternalStore } from "react";

export const useSrorage = (key: string, initialValue: any) => {
  //订阅者
  const subscribe = (callback: () => void) => {
    window.addEventListener("storage", callback);
    //订阅浏览器API
    return () => {
      //返回取消订阅
      window.removeEventListener("storage", callback);
    };
  };
  const getSnapshot=()=>{
    return localStorage.getItem(key)? JSON.parse(localStorage.getItem(key)!):  initialValue;
  }
  const res = useSyncExternalStore(subscribe,getSnapshot);
  const updateStorage = (value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    //手动触发storage 事件
    window.dispatchEvent(new StorageEvent('storage'));
  };

  return [res,updateStorage];
};

// const [cout, setCount] = useStoreage("count", 1);
// setCount(2);
