import axios from 'axios'
import React, { useState } from 'react'

function CreateUser() {

    const [username, setUsername] = useState('')

    const addUser = async (e) => {
        e.preventDefault();
        await axios.post('https://exercise-tracker-mernapp.herokuapp.com/users/add', {
            username: username
        }).then(res => {
            if (res.status === 200) {
                alert("User Added!")
            } else {
                alert("Some Error Occurred!")
            }
        })
    }

    return (
        <div className='container-fluid'>
            <div className='container text-center h2'>Create User</div>
            <form className='container mt-3' onSubmit={e => addUser(e)}>
                <div className='mb-3'>
                    <div className='form-label'>Username</div>
                    <input
                        type={'text'}
                        className='form-control'
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default CreateUser