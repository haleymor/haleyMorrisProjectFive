import React, { Component } from 'react';
import firebase from '.././firebase';

class Entry extends Component {
  constructor() {
    super();
    this.state = {
      journalData: []
    }
  }

  handleFilter = () => {
    const selectedEntry = this.state.journalData.filter((soloEntry) => {
      if (soloEntry.key === this.props.entryId) {
        return true
      } else {
        return false
      }
    })
    this.setState({
      journalData: selectedEntry
    })
  }

  componentDidMount() {
    const data = firebase.database().ref('entries');

    data.on('value', (response) => {
      const dataFromEntries = response.val();

      const stateToBeSet = [];

      for (let key in dataFromEntries) {
        const data = {
          key: key,
          name: dataFromEntries[key],
        }
        stateToBeSet.push(data);
      }

      this.setState({
        journalData: stateToBeSet,
      }, () => {
        this.handleFilter();
      })
    })

  }

  render() {
    return (
      <section className="singleEntry">
        {this.state.journalData.map((entry) => {
          return (
            <div className="entryContainer">
              <h5>{entry.name.title}</h5>
              <h6>{entry.name.date}</h6>
              <h6>{entry.name.location}</h6>
              <p>{entry.name.text}</p>
              <img src={entry.name.photo} alt="" />
            </div>
          );
        })}
      </section>
    );
  }
}

export default Entry;