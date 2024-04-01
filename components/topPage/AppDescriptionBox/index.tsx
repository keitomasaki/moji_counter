import React from 'react';
import styles from "./style.module.css"

const AppDescriptionBox = () => {
  return <div className={styles.wrapper}>
    <h2 className={styles.title}>【使い方】</h2>
    <p className={styles.description}>字数をカウントしたい文章は下の欄に入力し、「字数を数える」ボタンをクリックしてください。</p>
    <p className={styles.description}>最初の状態に戻したい場合は「リセット」ボタンをクリックしてください。</p>
  </div>;
};

export default AppDescriptionBox;