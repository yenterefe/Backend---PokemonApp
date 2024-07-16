import { Link } from 'react-router-dom';


export default function Hero() {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Welcome to The Pokemon App</h1>
                        <p className="py-6">
                            We have summoned the power of all of the pokemon for you to access and gain knowledge into the depths of the WORLD of The Pokemon!
                        </p>

                        <h1> This is a hero page</h1>
                        <Link to="/Pokesearch"><button className="btn btn-primary">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}