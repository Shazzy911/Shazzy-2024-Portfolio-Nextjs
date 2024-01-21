import React from 'react';
import styles from "./Card.module.scss";
type cardType = {
  items: {
    date: string,
    title: string,
    subTitle: string,
    paragraph: string
  }
}

const Card = ({items}: cardType) => {
  return (
    <>
      <div className={styles.ContainerWrapper}>
        <div className={styles.timelineRound}>
          <span>{items.date}</span>
        </div>
        <div className={styles.timelineInfo}>
          <h3><span>{items.title}</span><small>{items.subTitle}</small></h3>
          <p>{items.paragraph}</p>
        </div>
      </div>
    </>
  )
}

export default Card