

import { useEffect, useState } from 'react'
import './App.css'


function App() {

  const [users, setUsers] =  useState([]);

  // useEffect(()=> {
  //   fetch('http://localhost:5000/user')
  //   .then(res => res.json())
  //   .then(data => setUsers(data))
  // }, [])

  // const handleAddUser = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;
  //   const email = form.email.value;

  //   const newUser = {
  //     name,
  //     email
  //   }

  //   console.log(newUser);
    
  //   fetch('http://localhost:5000/user', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type' : 'application/json'
  //     },
  //     body: JSON.stringify(newUser)
  //   } )
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     const updateUser = [...users, data];
  //     setUsers(updateUser);
  //     form.reset();
  //   })
  // }

  useEffect(()=> {
    fetch('http://localhost:5000/user')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    
    const newUser = {
      name,
      email
    }
    console.log(newUser);

    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(newUser),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const updateUser = [...users, data];
      setUsers(updateUser);
    })
    e.target.reset();
  }



  return (
    <>
      
      <h1>Users Management system</h1>
      <h3>Numbers of Users: {users.length}</h3>
      <form onSubmit={handleSubmit}> 
        <input type="text" name='name' /><br />
        <input type="text" name='email' /><br />
        <input type="submit" value='Add User' />
      </form>
      <div>
        {
          users.map(user => <p key={user.id}>{user.id} : {user.name} : {user.email}</p>)
        }
      </div>
      
    </>
  )
}

export default App
