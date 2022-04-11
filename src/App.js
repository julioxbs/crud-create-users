import React,{ useState } from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm'

export default function App() {
  const [editing, setEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);

  return (
    <div className="container p-3">
      <h1 className="text-center">CRUD App with Hooks</h1>
      <div className="d-flex flex-column w-50 mx-auto">
        <div className="mt-3">
          {editing ? (
            <>
              <h2>Edit user</h2>
              <EditUserForm currentItem={currentItem} isEdit={setEditing} />
            </>
          )
            :
            (
              <>
                <h2>Add user</h2>
                <AddUserForm />
              </>
            )
          }

        </div>

        <div className="mt-5 text-center">
          <h2>View users</h2>
          <UserTable currentUser={setCurrentItem} isEdit={setEditing} />
        </div>
      </div>
    </div>
  )
}