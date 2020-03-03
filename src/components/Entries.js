import React, { Component } from 'react';
import firebase from '.././firebase';

class Entries extends Component {
  constructor(){
    super();
    this.state = {
      journalData: [],
    }
  }

  componentDidMount() {
    const data = firebase.database().ref('entries');

    data.on('value', (response) => {
      const dataFromEntries = response.val();

      const  stateToBeSet= [];

      for (let key in dataFromEntries) {
        const data = {
          key: key,
          name: dataFromEntries[key],
        }
        stateToBeSet.push(data);
      }

      this.setState({
        journalData: stateToBeSet,
      })
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.handleEntryClick(e.target.value);
  }

  render() {
    return(
      <section className="myEntries">
        <h1>My Entries</h1>
          <ul>
            {this.state.journalData.map((entry) => {
              return (
                <li key={entry.key}>
                  <button onClick={this.handleClick} value={entry.key}>
                    <h4>{entry.name.date}</h4>
                    <p>{entry.name.title}</p>
                  </button>
                </li>
              );
            })}
          </ul>
      </section>
    );
  }
}

export default Entries;