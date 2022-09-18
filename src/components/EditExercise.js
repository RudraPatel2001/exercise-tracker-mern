import axios from 'axios'
import React, { useEffect, useState } from 'react'

function EditExercise() {

    const [user, setUser] = useState({})

    const getUser = async () => {
        await axios.get(`https://exercise-tracker-mernapp.herokuapp.com/exercises/${(window.location.href).substring(27)}`)
            .then(res => setUser(res.data))
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div className='container-fluid'>
            <div className='container h2 text-center'>Edit Exercise</div>
            <form className='container'>
                <div className='mb-3'>
                    <div className='form-label'>Username</div>
                    <input
                        type={'text'}
                        className='form-control'
                        value={user.username || ''}
                    // onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <div className='form-label'>Description</div>
                    <input
                        type={'text'}
                        className='form-control'
                        value={user.description || ''}
                    // onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <div className='form-label'>Duration</div>
                    <input
                        type={'number'}
                        className='form-control'
                        value={user.duration || 0}
                    // onChange={e => setDuration(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default EditExercise