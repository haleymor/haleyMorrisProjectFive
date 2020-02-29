import React, { Component } from 'react';


class Entries extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <section>
        {
          this.props.wasEntrySubmitted
          ?
            <ul>
              {/* {this.state.journalEntries.map((entry) => {
                return (
                  <li>
                    <h4>{entry.name.title}</h4>
                    <p>{entry.name.date}</p>
                  </li>
                );
              })} */}
              <p> hey </p>
            </ul>
          : null
        }
      </section>
    );
  }
}

export default Entries;