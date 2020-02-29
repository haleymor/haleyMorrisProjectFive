import React, { Component } from 'react';
import Form from './components/Form';
import Entries from './components/Entries';
import firebase from './firebase';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      buttonClicked: false,
      stateOfPublished: '',
      stateOfJournalEntries: '',
    }
  }

  showForm = (e) => {
    e.preventDefault();
    this.setState({
      buttonClicked: true,
    })
  }

  //function to get value of published from Forms component
  // getValue = (dataFromForm) => {
  //   this.setState({
  //     stateOfPublished: passStateForPublished,
  //   //   stateOfJournalEntries: passStateForJournalEntries,
  //   }, () => {
  //     console.log(this.state.dataFromForm);
  //   })
  // }
  render() {
    return (
      <div className="App">
        <h1>Travel Journal Name</h1>
        <h2>Explore, Discover, Adventure, Journal.</h2>
        <h3>Start documenting your travels today</h3>
        <button onClick={this.showForm}>Create A Journal</button>

        <Form wasButtonClicked={this.state.buttonClicked}/>

        <Entries wasEntrySubmitted={this.getValue}/>
    

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
      </div>
    );
  }
}

export default App;
