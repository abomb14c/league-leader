import React, { Component } from 'react'; 
import { connect } from 'react-redux';

export class SetupLeague extends Component {
  constructor(props){
    super(props)

    this.state = {
      showMenu: false
    }
  }

  showMenu = (event) => {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu = (event) => {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });   
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          Pick A League
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button>English Premier League</button>
                <button>NBA</button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}


export const mapStateToProps = state => ({
 EPL: state.EPL
})

export default connect(mapStateToProps,null)(SetupLeague); 