import React, { Component } from 'react';
import '../App.css';

class FolderSidebar extends Component {
 
 render() {
  let foldersList = this.props.foldersList.map(folder => {
    return (
      <div className="folderItem">{folder.name}</div>
    )
  })
  

  return (
    <div className="FolderSidebar">
      {foldersList} 
    </div>
  );
  }
}
export default FolderSidebar;
  