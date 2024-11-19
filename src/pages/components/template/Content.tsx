interface ContentProps {
  Content: string;
  subContent: string;
  children?: React.ReactNode;
}

const Content = (props: ContentProps) => {
  return <div className="flex flex-col mt-7">{props.children}</div>;
};

export default Content;
