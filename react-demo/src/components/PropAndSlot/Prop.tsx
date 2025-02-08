import { Article } from "./Article";
function PropAndSlot() {
  const articleData = [
    {
      title: "标题1",
      details: {
        content: "内容1",
        active: true,
      },
    },
    {
      title: "标题1",
      details: {
        content: "内容1",
        active: true,
      },
    },
    {
      title: "标题1",
      details: {
        content: "内容1",
        active: true,
      },
    },
  ];
  return (
    <>
    {articleData.map(item=>{
        return <Article title={item.title}  articleDetail={item.details}></Article>
    })}
    </>
  );
}

export { PropAndSlot };
