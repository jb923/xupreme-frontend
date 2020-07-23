import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({ time: new Date() });
  }

  render() {
    // let hours = this.state.time.getHours();
    // let minutes = this.state.time.getMinutes();
    // let seconds = this.state.time.getSeconds();

  
    // hours = (hours < 10) ? `0${hours}` : hours;
    // minutes = (minutes < 10) ? `0${minutes}` : minutes;
    // seconds = (seconds < 10) ? `0${seconds}` : seconds;
   

    return (
      <>
        <div className='header__clock'>
          <p>
            <span>
                {this.state.time.toLocaleDateString()} {this.state.time.toLocaleTimeString()} LA
            </span>
          </p>
        </div>
      </>
    );
  }
};

export default Clock;