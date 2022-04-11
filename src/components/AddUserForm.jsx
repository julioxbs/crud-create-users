import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../features/formActionsSlice';

export default function AddUserForm() {
  const [nameReducer, setName] = useState('');
  const [userNameReducer, setUserName] = useState('');
  const dispatch = useDispatch();
  
  const submit = (e) => {
    e.preventDefault();
    dispatch(add({name: nameReducer, userName: userNameReducer, id: new Date().getMilliseconds()}));
  }

  return (
    <form onSubmit={submit} className="d-flex flex-column gap-3">
        <label className="form-group d-flex flex-column gap-2" for='name'>
            Name
            <input required id="name" name="name" onChange={(e) => setName(e.target.value)} type="text" />
        </label>

        <label className="form-group d-flex flex-column gap-2" for="userName">
            Username
            <input id="userName" name="userName" required onChange={(e) => setUserName(e.target.value)} type="text" />
        </label>

        <button type="submit" className="btn btn-primary">Add new user</button>
    </form>
  )
}