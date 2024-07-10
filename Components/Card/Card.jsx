
/*
Card 2 people - Michael/ Al
Pokemon Name
Pokemon Type
Pokemon image
Pokemon info
abilities

*/
import Title from "./Title"
import Image from "./Image"
import Info from "./Info"
export default function Card() {
    return (
        <>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <Title />
                <figure>
                    <Image />
                </figure>
                <div className="card-body">
                    <Info />
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>



        </>
    )
}