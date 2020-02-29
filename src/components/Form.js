import React, { Component } from 'react';
import firebase from '.././firebase';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      journalEntries: [],

      userInputDate: '',
      userInputTitle: '',
      userInputLocation: '',
      userInputText: '',
      userInputPhoto: '',

      published: false,
    }
  }

  componentDidMount() {
    const entries = firebase.database().ref('entries');

    entries.on('value', (response) => {
      const dataFromDb = response.val();

      const stateToBeSet = [];

      for (let key in dataFromDb) {
        const entry = {
          key: key,
          name: dataFromDb[key],
        }
        stateToBeSet.push(entry);
      }

      this.setState({
        journalEntries: stateToBeSet,
      })
    })
  }

  handleTitleChange = (e) => {
    this.setState({
      userInputTitle: e.target.value,
    })
  }

  handleLocationChange = (e) => {
    this.setState({
      userInputLocation: e.target.value,
    })
  }

  handleTextChange = (e) => {
    this.setState({
      userInputText: e.target.value,
    })
  }

  handlePhotoChange = (e) => {
    this.setState({
      userInputPhoto: e.target.value,
    })
  }

  handleDateChange = (e) => {
    this.setState({
      userInputDate: e.target.value,
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const entries = firebase.database().ref('entries');
    const entryObj = {
      date: this.state.userInputDate,
      title: this.state.userInputTitle,
      location: this.state.userInputLocation,
      text: this.state.userInputText,
      photo: this.state.userInputPhoto,
    }

    entries.push(entryObj);

    this.setState({
      userInputDate: '',
      userInputTitle: '',
      userInputLocation: '',
      userInputText: '',
      userInputPhoto: '',

      published: true,
    }, () => {
      console.log(this.state.published);
    })
  }

  someFn = () => {
    const passStateForPublished = this.state.published; 
    // const passStateForJournalEntries = this.state.journalEntries;
    // this.props.wasEntrySubmitted('test');
  }

  render() {
    return(
      <section>
        {
          this.props.wasButtonClicked 
            ?
              <form action="submit" onSubmit={this.handleFormSubmit}>
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" onChange={this.handleDateChange} value={this.state.userInputDate} />
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" onChange={this.handleTitleChange} value={this.state.userInputTitle} />
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" onChange={this.handleLocationChange} value={this.state.userInputLocation} />
                <label htmlFor="text">Text</label>
                <input type="text" id="text" onChange={this.handleTextChange} value={this.state.userInputText} />
                <label htmlFor="photo">Add Photo:</label>
                <input type="file" id="photo" accept="image/png, image/jpeg" onChange={this.handlePhotoChange} value={this.state.userInputPhoto} />
                <button type="submit">Publish Entry</button>
              </form>
              : null
          }
      </section>
    );
  }
}

export default Form;