export default function Info(props, key) {
  return (
    <>
      <li className="text-2xl text-center" key={key}>
        {props.name}
      </li>
    </>
  );
}
