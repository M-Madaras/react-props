

export default function Main({ name, total, isAwesome, fruit}) {
    return(
        <main>
            <h1>Hello {name}</h1>
            <h2>Total: {total}</h2>
            {isAwesome && <h2>Fruit: {fruit}</h2>}
        </main>
    )
}