import Types from "./Types";
export default function Title(props) {
  const colors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };
  return (
    <>
      <div className="flex px-4 py-2 justify-between text-3xl">
        <h1>{props.name}</h1>
        <div className="flex ">

          {/* layout needs polish so icons all fit on single line */}
          <ul className="menu menu-horizontal gap-1 pt-0">
            {props.types.map((type, index) => (
              <li className="size-max " key={index}>
                {console.log(`bg-[${colors[type]}]`)}
                {console.log(`bg-${type}`)}
                <div className="tooltip rounded-full" style={{ background: colors[type] }} data-tip={type}>

                  <Types type={type} />
                </div>

              </li>

            ))}
          </ul>

          <h1>HP : {props.hp}</h1>
        </div>

      </div>
    </>
  );
}
