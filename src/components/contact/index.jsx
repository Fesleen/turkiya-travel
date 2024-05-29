import React from 'react'
import styles from "./style.module.css"

const Contact = () => {
  const HandleSubmit = (e) => {
    e.preventDefault()
    const body = {
      name: e.target.name.value,
      name: e.target.title.value,
      name: e.target.email.value,
      name: e.target.phone.value
    }
    console.log(body);
  }
  return (
    <div className={styles.container}>
      <form onSubmit={HandleSubmit}>
        <h2>sjlNL</h2>
        <input type='text' name='name' placeholder='name' />
        <input type='text' name='title' placeholder='title' />
        <input type='email' name='email' placeholder='email' />
        <input type='number' name='number' placeholder='phone' />
        <button type='submit'>send</button>
      </form>
    </div>
  )
}

export default Contact