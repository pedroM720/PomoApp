import React from 'react';

function TimeSetter({ label, time, onIncrease, onDecrease }) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formatted = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return (
    <section className="time-setter">
      <h3>{label}</h3>
      <div className="time-setter-controls">
        <button onClick={onDecrease}>−</button>
        <span>{formatted}</span>
        <button onClick={onIncrease}>+</button>
      </div>
    </section>
  );
}
export default TimeSetter;

