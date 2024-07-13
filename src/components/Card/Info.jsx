export default function Info(props, key) {
    return (
        <>
            <li className="text-xl text-center" key={key}>{props.name}</li>
        </>
    )
}

