import StudentCard from "./StudentCard"

const student = {
    name: 'Khali Gopaul',
    age: 37,
    id: 'r64j83',
    term: 'Su22',
}

export default function Main({ name }) {
    return(
        <main>
            <h1>Hello {name}</h1>
            <StudentCard student ={student} />
        </main>
    )
}