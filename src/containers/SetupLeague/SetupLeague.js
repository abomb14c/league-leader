import React, { Component } from 'react'; 
import { connect } from 'react-redux';

export class SetupLeague extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        create
      </div>
    )
  }
}

export const mapStateToProps = state => ({
 EPL: state.EPL
})

export default connect(mapStateToProps,null)(SetupLeague); 