import React from 'react';
import plusIcon from '../assets/pomodoro_plusbutton.png';
import minusIcon from '../assets/pomodoro_minusbutton.png';


function TimeSetter({ label, time, onIncrease, onDecrease }) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formatted = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return (
    <section className="time-setter">
      <h3>{label}</h3>
      <div className="time-setter-controls">
        <button className='time-setter-button' onClick={onDecrease}>  <img src={minusIcon} alt="Decrease" style={{ width: '34px', height: '34px' }} /> </button>
        <span>{formatted}</span>
        <button className='time-setter-button' onClick={onIncrease}> <img src={plusIcon} alt="Increase" style={{ width: '34px', height: '34px' }} /></button>
      </div>
    </section>
  );
}
export default TimeSetter;

