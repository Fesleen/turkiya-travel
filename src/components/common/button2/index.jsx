import React from "react";
import styles from "./style.module.css"

const CommonBtn = ({ children, type, onClick, style }) => {
  return (
    <>
      <button className={styles.button} type={type} style={style} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default CommonBtn;