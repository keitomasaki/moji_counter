import React, { useState } from 'react';
import styles from './style.module.css'

const INIT_INPUT_STR = "";
const INIT_DISPLAY_STR_LENGTH = 0;

const ActionArea = () => {
  const [inputStr, setInputStr] = useState(INIT_INPUT_STR);
  const [displayStrLength, setDisplayStrLength]= useState(INIT_DISPLAY_STR_LENGTH)

  const handleChangeTextAea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setInputStr(inputValue)
  }

  const handleClickCheckInputStrLengthBtn = () => {
    setDisplayStrLength(inputStr.length)
  }

  const handleClickResetBtn = () => {
    setInputStr(INIT_INPUT_STR)
    setDisplayStrLength(INIT_DISPLAY_STR_LENGTH)
  }

  return <div className={styles.wrapper}>
    <label htmlFor="textarea">入力欄</label>
  <textarea  value={inputStr} className={styles.textarea} onChange={(e) => handleChangeTextAea(e)}></textarea>
  <div className={styles.actions}>
    <button className={styles.actionBtn} onClick={handleClickCheckInputStrLengthBtn}>字数を数える</button>
    <button className={styles.actionBtn} onClick={handleClickResetBtn}>リセット</button>
  </div>
  <div className={styles.resultBox}>
    <span className={styles.resultHelperText}>文字数</span>
    <div className={styles.resultDisplayBox}>{displayStrLength}</div>
    </div>
  </div>;
};

export default ActionArea;