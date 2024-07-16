import { useState } from "react";
import missingNo from "../assets/missingNo.png";
import unown from "../assets/unown.png";
export default function ErrorWarning(props) {
    // if user misspells pokemon name  then show error with text = Error: Unknown Pokemon
    // if user enters "" show error with img missingNo and text = Please enter a pokemon


    return (
        <>
            <div>
                <div role="alert" className="alert alert-info">
                    <img
                        src={props.isMissing ? missingNo : unown}
                        alt="pokemon"
                        className=" scale-75 object-contain rounded-full"
                    />
                    <span>{props.content} </span>

                </div>

            </div>

        </>
    )
}