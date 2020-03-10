import React, { Component } from 'react';
import '../App.css';

class FolderSidebar extends Component {


 render() {
  let foldersList = this.props.foldersList.map(folder => {
    return (
      <button className={this.props.selectedFolderId === folder.id ?
         "folderSelected folderItem" : "folderItem"} onClick={() =>
           {this.props.history.push('/folder/'+ folder.id)}}
            key={folder.id}>{folder.name}</button>
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
