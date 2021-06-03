import React, { useState } from 'react';
import Styles from './Style.module.css';
import { Link } from 'react-router-dom';

const FibonnachiPropmpt = ({ currentNum, setIsPromptOpen }) => {
  const [ChosenNum, setChosenNum] = useState(currentNum);

  const handleNumChange = (e) => {
    e.preventDefault();
    setChosenNum(e.target.value);
  };

  const stopPropogation = (e) => {
    e.stopPropagation();
    return false;
  };

  return (
    <div className={Styles.promptWrapper} onClick={() => setIsPromptOpen(false)}>
      <div className={Styles.promptContainer} onClick={stopPropogation}>
        <h4>Please enter a number</h4>
        <input type='number' id='ChosenNumber' value={ChosenNum} onChange={handleNumChange} />
        <Link to={'/' + parseInt(ChosenNum)} onClick={() => setIsPromptOpen(false)}>
          Jump
        </Link>
      </div>
    </div>
  );
};

export default FibonnachiPropmpt;
