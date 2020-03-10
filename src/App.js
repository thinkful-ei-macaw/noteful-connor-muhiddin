import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import Note from './Components/Note';
import store from './store';

class App extends Component {

state = {
  notes: store.notes,
  folders: store.folders
}



render() {
  console.log(this.state.selectedFolderId);
  return (
    <div className="App">
      <Route exact path="/"   
      render={(props) => (
        <Main 
          foldersList = {this.state.folders}
          notesList = {this.state.notes}
          history={props.history}
        />
      )}
    />
    <Route path="/folder/:folder-id"   
      render={(props) => (
        <Main 
          foldersList = {this.state.folders}
          notesList = {this.state.notes.filter(note => note.folderId === props.match.params['folder-id'])}
          history={props.history}
        />
      )}
    />
    </div>
  );
  } 
}

export default App;
