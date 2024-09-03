// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import UserForm from './UserForm';
import css from "./App.module.css";

export default function App() {
  const addUser = (newUser) => {
    console.log(newUser)
  };

  return (
    <div className={css.container}>
      <h1>Forms with Formik</h1>
      <UserForm onAdd={addUser} />
    </div>
  )
}


