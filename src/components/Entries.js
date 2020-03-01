import React, { Component } from 'react';
import firebase from '.././firebase';

class Entries extends Component {
  constructor(){
    super();
    this.state = {
      journalData: []
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

  render() {
    return(
      <section>
          <ul>
            {this.state.journalData.map((entry) => {
              return (
                <li key={entry.key}>
                  <h4>{entry.name.title}</h4>
                  <p>{entry.name.date}</p>
                </li>
              );
            })}
          </ul>
      </section>
    );
  }
}

export default Entries;