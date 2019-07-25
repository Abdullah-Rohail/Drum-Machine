class ReactDrumMachineApp extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  //   keyPress(event){
  //     if(event.keyCode === 27) {
  //       //Do whatever when esc is pressed
  //     }
  //   }
  componentDidMount() {
    document.addEventListener("keydown", this.playSound, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.playSound, false);
  }

  playSound = e => {
    let clip = "";
    let btnID = "";
    let btnKey = "";

    if (e.target.id !== undefined) {
      btnID = e.target.id;
    }
    if (e.key !== undefined) {
      btnKey = e.key.toUpperCase();
    }

    //  }
    console.log(btnKey);
    console.log(btnID);

    if (btnID === "Heater-1" || btnKey === "Q") {
      clip = "Q";
      btnID = "Heater-1";
    } else if (btnID === "Heater-2" || btnKey === "W") {
      clip = "W";
      btnID = "Heater-2";
    } else if (btnID === "Heater-3" || btnKey === "E") {
      clip = "E";
      btnID = "Heater-3";
    } else if (btnID === "Dsc_Oh" || btnKey === "A") {
      clip = "A";
      btnID = "Dsc_Oh";
    } else if (btnID === "Kick_n_Hat" || btnKey === "S") {
      clip = "S";
      btnID = "Kick_n_Hat";
    } else if (btnID === "RP4_KICK_1" || btnKey === "D") {
      clip = "D";
      btnID = "RP4_KICK_1";
    } else if (btnID === "Chord_1" || btnKey === "Z") {
      clip = "Z";
      btnID = "Chord_1";
    } else if (btnID === "Give_us_a_light" || btnKey === "X") {
      clip = "X";
      btnID = "Give_us_a_light";
    } else if (btnID === "side_stick_1" || btnKey === "C") {
      clip = "C";
      btnID = "side_stick_1";
    }

    document.getElementById("display").innerText = btnID;
    document.getElementById(clip).play();
  };

  render() {
    return (
      <div id="drum-machine">
        <div className="wrapper">
          <div id="display" />
        </div>
        <div id="pad-elements">
          <span onClick={this.playSound} id="Heater-1" className="drum-pad">
            <audio
              className="clip"
              id="Q"
              src="http://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            />
            Q
          </span>
          <span onClick={this.playSound} id="Heater-2" className="drum-pad">
            <audio
              className="clip"
              id="W"
              src="http://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            />
            W
          </span>
          <span onClick={this.playSound} id="Heater-3" className="drum-pad">
            <audio
              className="clip"
              id="E"
              src="http://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            />
            E
          </span>
          <span onClick={this.playSound} id="Dsc_Oh" className="drum-pad">
            <audio
              className="clip"
              id="A"
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            />
            A
          </span>
          <span onClick={this.playSound} id="Kick_n_Hat" className="drum-pad">
            <audio
              className="clip"
              id="S"
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            />
            S
          </span>
          <span onClick={this.playSound} id="RP4_KICK_1" className="drum-pad">
            <audio
              className="clip"
              id="D"
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            />
            D
          </span>
          <span onClick={this.playSound} id="Chord_1" className="drum-pad">
            <audio
              className="clip"
              id="Z"
              src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
            />
            Z
          </span>
          <span
            onClick={this.playSound}
            id="Give_us_a_light"
            className="drum-pad"
          >
            <audio
              className="clip"
              id="X"
              src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
            />
            X
          </span>
          <span onClick={this.playSound} id="side_stick_1" className="drum-pad">
            <audio
              className="clip"
              id="C"
              src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
            />
            C
          </span>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ReactDrumMachineApp />, document.getElementById("App"));
