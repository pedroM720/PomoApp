import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';


function Timer({time, isRunning, setIsRunning, workTime, setCurrentTime}) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formatted = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    const percentage = workTime > 0 ? (time / workTime) * 100 : 0;


  const handlePlay = () => {
    setCurrentTime(workTime);
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

    return (
        <div style={styles.container}>
            <CircularProgressbar value={percentage} text={formatted} styles={buildStyles({
                textSize: '18px',
                textColor: '#fff',
                pathColor: '#008000',
                
            })}
            />
            {!isRunning ? (
                <PlayButton className="button" style={{ marginTop: '10px'}}  onClick={handlePlay} />
            ) : (
                <PauseButton className="button" style={{ marginTop: '10px'}} onClick={handlePause} />
            )}
        </div>
    );
}
const styles = {
    container: {
        width: 200,
        height: 120,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin:'0 auto',
    },
};
export default Timer;