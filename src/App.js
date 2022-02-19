import React from 'react';
import "./App.css";
import qrImage from './images/image-qr-code.png';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="qr-container">
          <img src={qrImage} alt="" />
        </div>
        <div className="instruction-container">
          <p className="instruction"> Improve your font-end skills by building projects.</p>
          <p className="detailed-instruction">
            Scan the QR code to visit Fontend Mentor and take you coding skills to the next level.
          </p>
        </div>
      </div>
    );
  }
};

export default App;
