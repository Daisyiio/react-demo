function Detail({ articleDetail }: articleDetailType) {
  return (
    <>
      <p>{articleDetail.content}</p>
      <p>状态:{articleDetail.active ? "已显示" : "已隐藏"}</p>
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
type articleDetailType = {
  articleDetail: {
    content: string;
    active: boolean;
  };
};
function Article({ title, articleDetail }: ArticleProps) {
  const handleClickButton = function () {};
  return (
    <>
      <button onClick={handleClickButton}></button>
      <h1>{title}</h1>
      <Detail articleDetail={articleDetail}></Detail>
    </>
  );
}

export { Article };
