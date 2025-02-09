import { createContext, useContext } from "react";
// function Section({ children }: any) {
//   return <section className="section">{children}</section>;
// }
// function Heading({ level, children }: any) {
//   switch (level) {
//     case 1:
//       return <h1>{children}</h1>;
//     case 2:
//       return <h2>{children}</h2>;
//     case 3:
//       return <h3>{children}</h3>;
//     case 4:
//       return <h4>{children}</h4>;
//     case 5:
//       return <h5>{children}</h5>;
//     case 6:
//       return <h6>{children}</h6>;
//     default:
//       throw Error("未知的 level：" + level);
//   }
// }
// function PageContext() {

//     return (
//         <Section>
//       <Heading level={1}>主标题</Heading>
//       <Section>
//         <Heading level={2}>副标题</Heading>
//         <Heading level={2}>副标题</Heading>
//         <Heading level={2}>副标题</Heading>
//         <Section>
//           <Heading level={3}>子标题</Heading>
//           <Heading level={3}>子标题</Heading>
//           <Heading level={3}>子标题</Heading>
//           <Section>
//             <Heading level={4}>子子标题</Heading>
//             <Heading level={4}>子子标题</Heading>
//             <Heading level={4}>子子标题</Heading>
//           </Section>
//         </Section>
//       </Section>
//     </Section>
//   );
// }

const LevelContext = createContext(0);

function Section({ children }: any) {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
function Heading({ children }: any) {
  const level = useContext(LevelContext);

  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error("未知的 level：" + level);
  }
}

function PageContext() {
  return (
    <Section>
      <Heading>主标题</Heading>
      <Section>
        <Heading>副标题</Heading>
        <Heading>副标题</Heading>
        <Heading>副标题</Heading>
        <Section>
          <Heading>子标题</Heading>
          <Heading>子标题</Heading>
          <Heading>子标题</Heading>
          <Section>
            <Heading>子子标题</Heading>
            <Heading>子子标题</Heading>
            <Heading>子子标题</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

export { PageContext };
