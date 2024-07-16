import { Link } from 'react-router-dom';
import img4 from "./assets/img4.jpg";


export default function Hero() {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={img4}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Latest Pokemon News!</h1>
                        <p className="py-6">
                            We take you on a Tour to learn the depths of each Pokemon and uncover their unique attributes!
                        </p>
                        <Link to="/Pokesearch"><button className="btn btn-primary">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}