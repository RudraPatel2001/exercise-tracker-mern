import axios from 'axios'
import React, { useState } from 'react'

function CreateExercise() {

    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState(0)

    const addExercise = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:5000/exercises/add", {
            username: username,
            description: description,
            duration: duration,
            date: (new Date()).toISOString()
        }).then(res => {
            if (res.status === 200) {
                alert("Exercise Added!")
            } else {
                alert("Some Error Occurred!")
            }
        })
    }

    return (
        <div className='container-fluid'>
            <div className='container text-center h2'>Create Exercise</div>
            <form className='container mt-3' onSubmit={e => addExercise(e)}>
                <div className='mb-3'>
                    <div className='form-label'>Username</div>
                    <input
                        type={'text'}
                        className='form-control'
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <div className='form-label'>Description</div>
                    <input
                        type={'text'}
                        className='form-control'
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <div className='form-label'>Duration</div>
                    <input
                        type={'number'}
                        className='form-control'
                        onChange={e => setDuration(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default CreateExercise