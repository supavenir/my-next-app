
function Hello(props:{title: string, subTitle: string}){
  return (
      <>
      <h1>{props.title}</h1>
      <p>{props.subTitle}</p>
      </>
  );
}

export default Hello;