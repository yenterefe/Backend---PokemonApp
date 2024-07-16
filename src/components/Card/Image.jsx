export default function Image(props) {
  return (
    <>
      <img src={props.img} alt="img of pokemon" className="w-3/4" />
      {/* <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt="" /> */}
    </>
  );
}
