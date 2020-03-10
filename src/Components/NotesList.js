import React, { Component } from 'react';
import moment from 'moment';
import '../App.css';

class NotesList extends Component {
 
 render() {
  let notesList = this.props.notesList.map(note => {
    return (
      <li className='noteItem' key={note.id}>
        <h2>{note.name}</h2>
        Date modified:   {moment(note.modified).format('LL')}
        <button>Delete</button>
      </li>
    )
  })

  return (
    <div className="NotesList">
      <ul>
        {notesList}
      </ul>
    </div>
  );  
  }
}
export default NotesList;
  