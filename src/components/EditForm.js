import React, { useState } from 'react'

const EditForm = props => {
    const initialFormState = { id: props.user.id, name: props.user.name, username:props.user.username }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target
      
        setUser({ ...user, [name]: value })
      }
  return (
    <form style={{display:'flex',flexDirection:'column',width:'80%',alignItems:'center'}}
    onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.username) return;
        props.updateUser(user.id,user)
        setUser(initialFormState)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Edit user</button>
    </form>
  )
}

export default EditForm;