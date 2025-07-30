import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import TimeRemainingTimer from './components/TimeRemainingTimer';
import ContentArea from './components/ContentArea';
import BackgroundChooser from './components/BackgroundChooser';
import BackgroundPreview from './components/BackgroundPreview';
import TimeSetter from './components/TimeSetter';
import Timer from './components/Timer';
import React, { useState, useEffect } from 'react'



function App() {
  const [workTime, setWorkTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreakPhase, setIsBreakPhase] = useState(false);

  const step = 5 * 10; // 5 minutes
  const max_time = 100 * 60 

  const increaseWork = () => setWorkTime(prev => Math.min(prev + step, max_time));
  const decreaseWork = () => setWorkTime(prev => Math.max(prev - step, 0));
  const increaseBreak = () => setBreakTime(prev => Math.min(prev + step, max_time));
  const decreaseBreak = () => setBreakTime(prev => Math.max(prev - step, 0));
  

  // countdown logic
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setCurrentTime(prevTime => {
        if (prevTime <= 1) {
          clearInterval(interval);

        if (!isBreakPhase && breakTime > 0) {
          setIsBreakPhase(true);
          return breakTime;
        } else {
          setIsRunning(false);
          setIsBreakPhase(false);
          return workTime;
        }
      } 
      return prevTime - 1;
    });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, isBreakPhase, breakTime]);


  // break time 
  useEffect(() => {
      setCurrentTime(isBreakPhase ? breakTime: workTime);
  }, [workTime, breakTime, isBreakPhase]);

  return (
    <div className="app-container">
      {/* left side */}
      <aside className="sidebar">
        <Header title="Pomodoro" />
        <div className="box">
          <h2>Choose Background:</h2>
        </div>
        <div className="background-options">
          <button className="bg-option">Choice 1</button>
          <button className="bg-option">Choice 2</button>
          <button className="bg-option">Choice 3</button>
          <button className="bg-option">Choice 4</button>
        </div>
        <div className="time-setters">
          <TimeSetter label="Set Time"
          time={workTime}
          onIncrease={increaseWork}
          onDecrease={decreaseWork}
          />
          <TimeSetter label="Set Break" 
          time={breakTime}
          onIncrease={increaseBreak}
          onDecrease={decreaseBreak}
          />
        </div>
      </aside>

      {/* right side */}
      <main className="content-area">
        <div className="timer-box">
          <Timer workTime={workTime}
          time={currentTime}
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          setCurrentTime={setCurrentTime}
          breakTime={breakTime}
          isBreakPhase={isBreakPhase}
          />
        </div>
        <BackgroundPreview />
      </main>

      <Footer />
    </div>
  );
}

export default App;