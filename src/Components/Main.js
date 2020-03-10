import React, { Component } from 'react';
import FolderSidebar from './FolderSidebar';
import NotesList from './NotesList';
import '../App.css';

class Main extends Component {
 
 render() {
  return (
    <div className="Main">
      <header>
        <h1>Noteful</h1>
      </header>
      <FolderSidebar 
      foldersList={this.props.foldersList}
      history={this.props.history}/>
      <NotesList notesList={this.props.notesList}/>
    </div>
  );
  }
}
export default Main;
  