import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleTimer } from '../actions';
import { resetTimer } from '../actions';
import { waitTimer } from '../actions';
import './TimerView.css';
import { formatTime } from '../utils';

export default function TimerView(props) {
  const { index, timer } = props;
  const dispatch = useDispatch();

  return (
    <div className="TimerView">
      <h2>{timer.name}</h2>
      <h1>{formatTime(timer.time)}</h1>
      <button onClick={() => dispatch(toggleTimer(index))}>
        {timer.isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={() => dispatch(resetTimer(index))}>{'Reset'}</button>
      <button onClick={() => dispatch(waitTimer(index))}>{'Wait'}</button>
    </div>
  );
}
