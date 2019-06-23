import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import UserTable from './components/userTable';
import AddUserForm from './components/AddUserForm';

function App() {
  const usersData = [{ id: 1, name: 'Tania', username: 'floppydiskette' },{ id: 2, name: 'Craig', username: 'siliconeidolon' },{ id: 3, name: 'Ben', username: 'benisphere' }]

  const [users, setUsers] = useState(usersData)

  const [editing, setEditing] = useState(false)

  const initialFormState = { id: null, name: '', username: '' }

  const [currentUser, setCurrentUser] = useState(initialFormState)

  // const editRow = user => {
  //   setEditing(true)
  
  //   setCurrentUser({ id: user.id, name: user.name, username: user.username })
  // } 

  const addUser = user => {
    debugger
    user.id = users.length + 1;
    setUsers([...users, user])
  }

  const deleteUser=index=>{
    let userData=[...users];
    userData.splice(index,1);
    setUsers([...userData]);
  }

  // const updateUser = (id, updatedUser) => {
  //   setEditing(false)
  
  //   setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  // }

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button/>
        <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
          <div style={{width:'42%',marginHorizontal:'4%'}}>
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div style={{width:'50%',marginHorizontal:'1%'}}>
          <UserTable users={users}  delete={deleteUser}/>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
