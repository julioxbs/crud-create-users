import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../features/formActionsSlice';

export default function UserTable({isEdit, currentUser}) {
    let usersData = useSelector((state) => state.formActions);
    const dispatch = useDispatch();

    const sendInfo = (val) => {
        isEdit(true);
        currentUser(val);
    }

    return (
        <table className="table text-center mt-5">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {usersData.length > 0 ?
                    usersData.map((val) => 
                    <tr id={val.id} key={val.id}>
                        <td>{val.name}</td>
                        <td>{val.userName}</td>
                        <td className="d-flex gap-2 justify-content-center">
                            <button className="btn btn-secondary" onClick={() => sendInfo(val.id)}>Edit</button>

                            <button className="btn btn-danger" onClick={() => dispatch(remove(val.id))}>Delete</button>
                        </td>
                    </tr>)

                    :

                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                }
            </tbody>
        </table>
    )
}