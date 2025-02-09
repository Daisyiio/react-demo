import { Article } from "./Article";
import { Divider } from "antd";

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
      <Divider />
      {articleData.map((item, index) => {
        return (
          <Article
            title={item.title}
            articleDetail={item.details}
            key={index}
          ></Article>
        );
      })}
      <Divider />
    </>
  );
}

export { PropAndSlot };
