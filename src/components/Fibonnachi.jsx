import React, { useCallback, useEffect, useState } from 'react';
import Styles from './Style.module.css';
import { Link, useParams, useHistory } from 'react-router-dom';
import FibonnachiPrompt from './FibbonachiPrompt';

function fibonacciSequence(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return (memo[num] = fibonacciSequence(num - 1, memo) + fibonacciSequence(num - 2, memo));
}

const Fibonnachi = () => {
  let { num } = useParams();
  if (!num) {
    num = localStorage.getItem('lastNum') ? localStorage.getItem('lastNum') : 1;
  }
  const [fiboNum, setFiboNum] = useState(num);
  const [isPromptOpen, setIsPromptOpen] = useState(false);

  useEffect(() => {
    setFiboNum(fibonacciSequence(num));
    setIsPromptOpen(false);
    localStorage.setItem('lastNum', num);
  }, [num]);

  return (
    <div className={Styles.fibonnachiWrapper}>
      <span className={Styles.textCenter}>{fiboNum}</span>
      <div className={Styles.linksWrapper}>
        {num > 1 && <Link to={'/' + (parseInt(num) - 1)}>{'<< Previous'}</Link>}
        <Link to={'/' + (parseInt(num) + 1)}>{'Next >>'}</Link>
      </div>
      <button className={Styles.PromptBtn} onClick={() => setIsPromptOpen(!isPromptOpen)}>
        Jump To
      </button>
      {isPromptOpen && <FibonnachiPrompt currentNum={num} setIsPromptOpen={setIsPromptOpen} />}
    </div>
  );
};

export default Fibonnachi;
