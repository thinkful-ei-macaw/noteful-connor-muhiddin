import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main';
import FolderSidebar from './Components/FolderSidebar';
import Note from './Components/Note';
import store from './store';

class App extends Component {

state = {
  notes: store.notes,
  folders: store.folders,
}

render() {
  return (
    <div className="App">
      <Main 
      foldersList={this.state.folders} 
      notesList={this.state.notes}/>
      {/* <Note /> */}
      
    </div>
  );
  } 
}

export default App;
