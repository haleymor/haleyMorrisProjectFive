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

      console.log(stateToBeSet)

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
            <div>
              <h5>{entry.name.title}</h5>
              <p>{entry.name.date}</p>
              <p>{entry.name.location}</p>
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