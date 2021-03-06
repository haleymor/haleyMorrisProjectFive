import React, { Component } from 'react';
import firebase from '.././firebase';

class Form extends Component {
  constructor() {
    super();

    this.state = {

      userInputDate: '',
      userInputTitle: '',
      userInputLocation: '',
      userInputText: '',
      userInputPhoto: '',
    }
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

  handleBlankInput = () => {
    if (this.state.userInputDate === '') {
      alert('Please fill in all sections!');
    } else if (this.state.userInputTitle === '') {
      alert('Please fill in all sections!');
    } else if (this.state.userInputLocation === '') {
      alert('Please fill in all sections!');
    } else if (this.state.userInputText === '') {
      alert('Please fill in all sections!');
    } else {
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.userInputDate === '') {
      this.handleBlankInput();
    } else if (this.state.userInputTitle === '') {
      this.handleBlankInput();
    } else if (this.state.userInputLocation === '') {
      this.handleBlankInput();
    } else if (this.state.userInputText === '') {
      this.handleBlankInput();
    } else {
      
      const entries = firebase.database().ref('entries');
      const entryObj = {
        date: this.state.userInputDate,
        title: this.state.userInputTitle,
        location: this.state.userInputLocation,
        text: this.state.userInputText,
      }
  
      entries.push(entryObj);
  
      this.setState({
        userInputDate: '',
        userInputTitle: '',
        userInputLocation: '',
        userInputText: '',
        userInputPhoto: '',
      })
  
      this.props.showList();
    }
  }

  render() {
    return(
      <section className="formSection">
        <h1>New Entry...</h1>
        <form action="submit" onSubmit={this.handleFormSubmit}>
          <div className="dateOfTrip input">
            <label htmlFor="date">Date of Trip:</label>
            <input type="date" id="date" onChange={this.handleDateChange} value={this.state.userInputDate} />
          </div>
          <div className="entryTitle input">
            <label htmlFor="title">Entry Title:</label>
            <input type="text" id="title" onChange={this.handleTitleChange} value={this.state.userInputTitle} />
          </div>
          <div className="locationOfTrip input">
            <label htmlFor="location">Location of Trip:</label>
            <input type="text" id="location" onChange={this.handleLocationChange} value={this.state.userInputLocation} />
          </div>
          <div className="entryText input">
            <label htmlFor="text">Entry Text:</label>
            <textarea id="text" rows="20" cols="45" onChange={this.handleTextChange} value={this.state.userInputText}>
            </textarea>
          </div>
          {/* wasn't able to get photos working but left it commented out because I want to continue to work on this functionality */}
          {/* <div className="addPhoto input">
            <label htmlFor="photo">Add Photo:</label>
            <input type="file" id="photo" accept="image/png, image/jpeg" onChange={this.handlePhotoChange} value={this.state.userInputPhoto} />
          </div> */}
          <div className="submitButton">
            <button type="submit">Publish Entry</button>
          </div>
        </form>
      </section>
    );
  }
}

export default Form;