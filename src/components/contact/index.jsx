import React  from 'react';
import styles from "./style.module.css"
import Img from "../../assets/Rectangle 69.svg"
import Button from "../common/button2";
import { useDispatch } from 'react-redux';
import { PostContact } from '../../redux/contact';


const Contact = () => {
 const dispatch = useDispatch()
  const HandleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value
    }
    dispatch(PostContact(body))
    console.log(body);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.cards__left}>
          <img className={styles.img} src={Img} alt="" />
        </div>
        <div className={styles.cards__form}>
          <h1 className={styles.cards__h1}>Embark on an Unforgettable Journey: Book Your Istanbul Tour Today!</h1>
          <form onSubmit={HandleSubmit}>
              <input className={styles.input} id="outlined-basic" type='text' placeholder='Name' name='name' />
              <input className={styles.input} id="outlined-basic" type='text' placeholder='Title' name='title' />
              <input className={styles.input} id="outlined-basic" type='email' placeholder='Email' name='email' />
              <input className={styles.input} id="outlined-basic" type='number' placeholder='Mobil phone' name='phone' />
              <div className={styles.cards__button}>
                <Button className={styles.card__button} type='submit'>Send</Button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
