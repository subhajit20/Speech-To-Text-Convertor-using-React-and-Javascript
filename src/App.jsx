import { useState } from 'react';
import reactLogo from './assets/react.svg';
import ShowText from './components/ShowText';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(null);
  
  
  // new speech recognition object
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var recognition = new SpeechRecognition();

  // recognition.continuous = true;
  // recognition.interimResults = true;
  recognition.lang = 'en-us';

  recognition.onstart = function () {
    console.log('We are listening. Try speaking into the microphone.');
  };

  function StopRecording() {
    setStart(false);
    recognition.stop();
  }

  recognition.onspeechend = function () {
    setStart(false);
    recognition.stop();
  };

  recognition.onresult = function (event) {
    var transcript = event.results[0][0].transcript;
    // console.log(transcript.split(' '));
    setData((prev) => [...prev, ...transcript.split(' ')]);
  };

  function StartRecording() {
    setStart(true);
    recognition.start();
  }

  function ClearText() {
    setData([]);
  }

  return (
    <div className="App " style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <ShowText text={data.length > 0 ? data : ''} />
        <button
          onClick={StartRecording}
          style={{
            border: 'none',
            padding: '1.5rem',
            backgroundColor: 'darkcyan',
            color: 'white',
            cursor: 'pointer',
            fontSize: '1.2rem',
            marginRight: '1.2rem',
          }}
        >
          {start ? (
            <i className="fa-solid fa-microphone"></i>
          ) : (
            <i className="fa-solid fa-microphone-slash"></i>
          )}
        </button>
        {start ? (
          <button
            style={{
              border: 'none',
              padding: '1.5rem',
              backgroundColor: '#D61355',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1.2rem',
              marginRight: '1.2rem',
            }}
            onClick={StopRecording}
          >
            Stop
          </button>
        ) : (
          ''
        )}

        {data.length <= 0 ? (
          ''
        ) : (
          <button
            style={{
              border: 'none',
              padding: '1.5rem',
              backgroundColor: 'yellow',
              color: 'black',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
            onClick={ClearText}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
