import { useState } from "react";

function Detail({ articleDetail, handleClickButtonParents }: any) {
  const [status, setStatus] = useState(false);
  const handleClickButton = function () {
    setStatus(!status);
    handleClickButtonParents(status);
  };
  return (
    <> 
      <button onClick={handleClickButton}>按钮</button>
      <p style={{ display: status ? "block" : "none" }}>
        {articleDetail.content}
      </p>
      <p style={{ display: status ? "block" : "none" }}>
        状态:{articleDetail.active ? "已显示" : "已隐藏"}
      </p>
    </>
  );
}
type ArticleProps = {
  title: string;
  articleDetail: {
    content: string;
    active: boolean;
  };
};
// type articleDetailType = {
//   articleDetail: {
//     content: string;
//     active: boolean;
//   };
// };
function Article({ title, articleDetail }: ArticleProps) {
  function ButtonSwitch(status: boolean) {
    console.log(status);
  }

  return (
    <>
      <h1>{title}</h1>
      <Detail
        articleDetail={articleDetail}
        handleClickButtonParents={ButtonSwitch}
      ></Detail>
    </>
  );
}

export { Article };
