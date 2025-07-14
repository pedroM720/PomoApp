import './App.css';

function App() {
  return (
      <div className="timer-container">
        {/* Sidebar*/}
        <div className='sidebar'>
          <h1>Study Timer</h1>
          <h2>Choose Background:</h2>
          <button className="circle">Beach</button>
          <button className="circle">Library</button>

          <div className='time-set-box'>
            <p>Set Time:</p>
            <button>+</button>
            <span>25:00</span>
            <button>−</button>
          </div>
        </div>

        <div className='background-area'>
          <div className='presets'>
             <p>Choose Preset:</p>
            <button>25-5</button>
            <button>45-5</button>
            <button>60-10</button>
          </div>

          <div className='timer-display'>
            <p>Timer with animated clock</p>
            {/* timer go here*/}

          </div>
          <div className='background-preview'>
            <p>Animated background</p>
            {/* background go here*/}

          </div>
          <button id='pause'>Pause</button>
        </div>
      </div>
  );
}

export default App;
