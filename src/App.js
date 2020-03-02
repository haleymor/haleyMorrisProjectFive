import React, { Component } from 'react';
import Form from './components/Form';
import Entries from './components/Entries';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      buttonClicked: false,
      showList: false,
      buttonVisible: true
    }
  }

  showForm = (e) => {
    e.preventDefault();
    this.setState({
      buttonClicked: true,
      buttonVisible: false,
    })
  }
  
  showList = () => {
    this.setState({ 
      showList: true 
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="landingPage">
          {this.state.buttonVisible &&
            <div>
              <h1>Travel Journal</h1>
              <h2>Explore, Discover, Adventure, Journal.</h2>
              <h3>Start documenting your travels today</h3>
              <button onClick={this.showForm}>Create A Journal</button>
            </div>
            }
          {this.state.buttonClicked && <Form showList={this.showList} />}
          {this.state.showList && <Entries />}
        </div>
    
        {/* <div>
          {this.state.journalEntries.map((entry) => {
            return (
              <div>
                <h5>{entry.name.title}</h5>
                <p>{entry.name.date}</p>
                <p>{entry.name.location}</p>
                <p>{entry.name.text}</p>
                <img src={entry.name.photo} alt=""/>
              </div>
            );
          })}
        </div> */}
        <Footer />
      </div>
        
    );
  }
}

export default App;
