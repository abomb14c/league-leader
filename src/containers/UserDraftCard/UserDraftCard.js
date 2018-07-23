import React from 'react';
import {connect} from 'react-redux';
import './user-draft-card.css';


export const UserDraftCard = (props) => {

  const handleDragover = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }

  const handleDrop = (event) => {
    let id = event.dataTransfer.getData('id')
    event.preventDefault();
    console.log(id) 
  }
  
  return (
    <div className="user-card">
      <div className="user-title-container">
      <h3 className="user-draft-title">{props.user.user_id}</h3>
      </div>
      <div id="target" onDrop={handleDrop} onDragOver={handleDragover} className="draft-board"></div>
    </div>
  )
}

export const mapStateToProps = state => ({
  user: state.user,
  EPL: state.EPL
})

export default connect(mapStateToProps,null)(UserDraftCard);


// onDrop = (ev, cat) => {       
//   let id = ev.dataTransfer.getData("id");
//   let tasks = this.state.tasks.filter((task) => {
//       if (task.name == id) {
//                task.category = cat;           
//       }              
//        return task;       
//    });        
//    this.setState({           
//       ...this.state,           
//       tasks       
//    });    
// }





// var data;

// try {
//   data = JSON.parse(event.dataTransfer.getData('text'));
// } catch (e) {
//   // If the text data isn't parsable we'll just ignore it.
//   return;
// }

// // Do something with the data
// console.log(data);

// },

    // event.stopPropagation();
    // let data = JSON.parse(event.dataTransfer.getData('text'))
    // event.target.appendChild(document.getElementById(data))
    // console.log(data)


    // if (event.target.id) {
    //   props.EPL.swap(event.dataTransfer.getData("text"), event.target.id)
    //   event.dataTransfer.clearData()
    // }