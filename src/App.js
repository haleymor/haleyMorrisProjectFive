import React, { Component } from 'react';
import Form from './components/Form';
import Entries from './components/Entries';
import Header from './components/Header';
import Footer from './components/Footer';
import Entry from './components/Entry';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      buttonClicked: false,
      showList: false,
      buttonVisible: true,
      showEntry: false,
      journalData: [],
      singleEntry: '',
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

  handleEntryClick = (entryId) => {
    this.setState({
      showList: false,
      showEntry: true,
      singleEntry: entryId,
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
          
        </div>
        { 
          this.state.showList ? <Entries handleEntryClick={this.handleEntryClick} />
          :
          this.state.showEntry && <Entry entryId={this.state.singleEntry} />
        }
        <Footer />
      </div>
    );
  }
}

export default App;
