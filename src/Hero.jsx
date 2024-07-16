import { Link } from 'react-router-dom';


export default function Hero() {
    return (
        <>
            <h1> This is a hero page</h1>
            <Link to="/Pokesearch"><button> Go</button></Link>
        </>
    )
}