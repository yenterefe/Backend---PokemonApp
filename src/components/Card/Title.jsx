export default function Title(props) {
  return (
    <>
      <div className="flex px-4 justify-between text-3xl">
        <h1>{props.name}</h1>
        <h1>HP : {props.hp}</h1>
      </div>
    </>
  );
}
