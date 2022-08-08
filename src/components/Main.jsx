import StudentCard from "./StudentCard"

const student = {
    name: 'Mason Madaras',
    age: 24,
    id: '1997-08-30',
    term: 'Swecc#2022',
}
// ({destructured})!!!
export default function Main({name}) {
    return(
        <main>
            <h1>Hello {name || 'Guest'}</h1>
            {name && <StudentCard student ={student} />}
        </main>
    )
}