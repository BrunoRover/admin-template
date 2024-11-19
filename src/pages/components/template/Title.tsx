interface TitleProps {
  titulo: string;
  subtitulo: string;
}

const Title = (props: TitleProps) => {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <h2>{props.subtitulo}</h2>
    </div>
  );
};

export default Title;
