import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TimeRemainingTimer from './components/TimeRemainingTimer';
import ContentArea from './components/ContentArea';
import BackgroundChooser from './components/BackgroundChooser';
import BackgroundPreview from './components/BackgroundPreview';
import PresetSelector from './components/PresetSelector';
import TimeSetter from './components/TimeSetter';



function App() {
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
          <TimeSetter label="Set Time" />
          <TimeSetter label="Set Break" />
        </div>
      </aside>

      {/* right side */}
      <main className="content-area">
        <PresetSelector />
        <div className="timer-box">
          <TimeRemainingTimer />
        </div>
        <BackgroundPreview />
      </main>

      <Footer />
    </div>
  );
}

export default App;