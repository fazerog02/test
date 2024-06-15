import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const ReactSpeechRecognitionComponent = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>ブラウザが音声認識未対応です</span>;
  }

  return (
    <div id="react-speech-recognition">
      <p>Status: {listening ? "on" : "off"}</p>
      <button
        type="button"
        onClick={() => SpeechRecognition.startListening({ continuous: true })}
      >
        Start
      </button>
      <button type="button" onClick={() => SpeechRecognition.stopListening()}>
        Stop
      </button>
      <button type="button" onClick={() => resetTranscript()}>
        Reset
      </button>
      <p>{transcript}</p>
    </div>
  );
};

export default ReactSpeechRecognitionComponent;
