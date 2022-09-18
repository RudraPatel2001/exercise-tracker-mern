import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ExerciseList() {

    const [exercises, setExercises] = useState([])

    const fetchExercises = async () => {
        await axios.get("https://exercise-tracker-mernapp.herokuapp.com/exercises/").then(res => setExercises(res.data))
    }

    const deleteExercise = async (id) => {
        await axios.delete(`https://exercise-tracker-mernapp.herokuapp.com/exercises/${id}`).then(() => {
            setExercises(exercises.filter(e => e._id !== id))
        })
    }

    useEffect(() => {
        fetchExercises()
    }, [])

    return (
        <div className='container-fluid'>
            <div className='container text-center h2'>Exercise List</div>
            <div className='container my-3 d-flex justify-content-center flex-wrap'>
                {exercises.map(exer => (
                    <div className="card m-2" style={{ width: "12rem" }} key={exer._id}>
                        <div className="card-body pt-0">
                            <h5 className="card-title text-center text-decoration-underline m-3"><i>{exer.username}</i></h5>
                            <hr />
                            <div className="card-text h5 my-2">{exer.description}</div>
                            <div className="card-text my-2 text-success">{exer.duration} mins</div>
                            <div className="card-text my-2 text-black-50">Posted on {exer.date.substring(0, 10)}</div>
                            <Link to={"/edit/" + exer._id} className="card-link">edit</Link>
                            <Link to="/" onClick={() => deleteExercise(exer._id)} className="card-link">delete</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExerciseList