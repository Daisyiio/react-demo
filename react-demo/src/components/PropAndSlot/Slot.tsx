import { ReactNode } from "react";
import { Divider } from "antd";

type ListProps = {
  title: string;
  footer?: ReactNode;
  children: ReactNode;
};

function List({ children, title, footer = <div>默认底部</div> }: ListProps) {
  return (
    <>
      <h2>{title}</h2>
      <ul>{children}</ul>
      <div>{footer}</div>
    </>
  );
}

function Slot() {
  return (
    <>
      <Divider />
      <List title="列表1" footer={<p>这是底部内容1</p>}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </List>
      <List title="列表2" footer={<p>这是底部内容2</p>}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </List>
      <List title="列表3">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </List>

      <Divider />
    </>
  );
}

export { Slot };
