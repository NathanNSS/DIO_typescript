interface InterfaceCard{
    title:string;
    paragraph:string
}

export function Card({title, paragraph}:InterfaceCard) {
    return (
        <>
            <fieldset style={{ width: 'fit-content' }}>
                <h3>{title}</h3>
                <p>{paragraph}</p>
            </fieldset>
            <br />
        </>
    )
}