import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { edit } from '../features/formActionsSlice';

export default function EditUserForm({isEdit, currentItem}) {
  const [nameEdit, setNameEdit] = useState('');
  const [userNameEdit, setUserNameEdit] = useState('');
  const dispatch = useDispatch();

  const update = (e) => {
    e.preventDefault();
    dispatch(edit({name: nameEdit, userName: userNameEdit, item: currentItem}))
  }

  return (
    <form onSubmit={update} className="d-flex flex-column gap-3">
        <label required className="d-flex flex-column gap-1" for="name">
            Name
            <input id="name" name="name" onChange={(e) => setNameEdit(e.target.value)} type="text" />
        </label>

        <label required className="d-flex flex-column gap-1" for="userName">
            Username
            <input name="userName" id="userName" onChange={(e) => setUserNameEdit(e.target.value)} type="text" />
        </label>

        <button type="submit" className="btn btn-success">
          Update user
        </button>

        <button className="btn btn-secondary" onClick={() => isEdit(false)}>Cancel</button>
    </form>
  )
}