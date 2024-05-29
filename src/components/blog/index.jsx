import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.css";
import { BlogGet } from "../../redux/blog";
import ChatIcon from '@mui/icons-material/Chat';

const Blog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(BlogGet());
  }, [dispatch]);

  const blog = useSelector((state) => state.blog.blogGet);
  const blogData = blog?.data;
  const blogLoading = blog.loading;
  const blogError = blog.error;

  if (blogLoading) {
    return <h1>Loading...</h1>;
  }

  if (blogError) {
    return <h1>Error</h1>;
  }

  if (!blogData || blogData.length === 0) {
    return <h1>No data available</h1>;
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cards}>
          <div className={styles.cards__item}>
            <h1 className={styles.cards__h1}>Must-Visit blog in Istanbul</h1>
          </div>
          <div className={styles.cards__item}>
            <p className={styles.cards__p}>Istanbul, a mesmerizing blend of East and West, is a city that beckons with its rich history, vibrant culture, and stunning architecture. As you wander through its bustling streets, there are certain blog that simply cannot be missed.</p>
          </div>
        </div>
      </div >
      <div className={styles.section}>
        {blogData.map((elem) => (
          <div className={styles.card}>
            <img className={styles.images} src={elem.images} alt="" />
            <div className={styles.card__item}>
              <h2 className={styles.cards__h2}>{elem.name}</h2>
              <p className={styles.cards__desc}>{elem.desc}</p>
              <div className={styles.card__bottom}>
                <div className={styles.card__comment}>
                  <ChatIcon className={styles.icon} />
                  <p className={styles.cards__comments}>{elem.comments}</p>
                </div>
                <button className={styles.button}>{elem.button}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>

  )
}

export default Blog