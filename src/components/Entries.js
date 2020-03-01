import React, { Component } from 'react';


class Entries extends Component {
  render() {
    return(
      <section>
        {
          this.props.wasEntrySubmitted
          ?
            <ul>
              {this.props.journalData.map((entry) => {
                return (
                  <li>
                    <h4>{entry.name.title}</h4>
                    <p>{entry.name.date}</p>
                  </li>
                );
              })}
            </ul>
          : null
        }
      </section>
    );
  }
}

export default Entries;