//#region 
import Bug_icon from "../../assets/pokemonTypes/Bug_icon.png"
import Dark_icon from "../../assets/pokemonTypes/Dark_icon.png"
import Dragon_icon from "../../assets/pokemonTypes/Dragon_icon.png"
import Electric_icon from "../../assets/pokemonTypes/Electric_icon.png"
import Fairy_icon from "../../assets/pokemonTypes/Fairy_icon.png"
import Fighting_icon from "../../assets/pokemonTypes/Fighting_icon.png"
import Fire_icon from "../../assets/pokemonTypes/Fire_icon.png"
import Flying_icon from "../../assets/pokemonTypes/Flying_icon.png"
import Ghost_icon from "../../assets/pokemonTypes/Ghost_icon.png"
import Grass_icon from "../../assets/pokemonTypes/Grass_icon.png"
import Ground_icon from "../../assets/pokemonTypes/Ground_icon.png"
import Ice_icon from "../../assets/pokemonTypes/Ice_icon.png"
import Normal_icon from "../../assets/pokemonTypes/Normal_icon.png"
import Poison_icon from "../../assets/pokemonTypes/Poison_icon.png"
import Psychic_icon from "../../assets/pokemonTypes/Psychic_icon.png"
import Rock_icon from "../../assets/pokemonTypes/Rock_icon.png"
import Steel_icon from "../../assets/pokemonTypes/Steel_icon.png"
import Water_icon from "../../assets/pokemonTypes/Water_icon.png"
//#endregion

const pokemonIcons = {
    bug: Bug_icon,
    dark: Dark_icon,
    dragon: Dragon_icon,
    electric: Electric_icon,
    fairy: Fairy_icon,
    fighting: Fighting_icon,
    fire: Fire_icon,
    flying: Flying_icon,
    ghost: Ghost_icon,
    grass: Grass_icon,
    ground: Ground_icon,
    ice: Ice_icon,
    normal: Normal_icon,
    poison: Poison_icon,
    psychic: Psychic_icon,
    rock: Rock_icon,
    steel: Steel_icon,
    water: Water_icon
}


export default function Types(props) {
    return (
        <>
            <img src={pokemonIcons[props.type]} alt={props.type} />
        </>
    )
}