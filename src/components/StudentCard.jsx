

function StudentCard ({ student }) {
    return (
        <section>
            <h2>{student.name}</h2>
            <p>Age: {student.age}</p>
            <p>ID: {student.id}</p>
            <p>Term: {student.term}</p>
        </section>
    )
}

export default StudentCard;