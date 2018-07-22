import React, { Component } from 'react'; 
import { connect } from 'react-redux';

export class SetupLeague extends Component {
  constructor(props){
    super(props)

    this.state = {
      showMenu: false,
      leagueName: '',

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

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

  }

  render() {
    return (
      <div>
        <h3>Setup Your League</h3>
        <input
        name="leagueName"
        value={this.state.leagueName}
        onChange={this.handleChange}
        placeholder="League Name"
        />
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
        <button onSubmit={this.handleSubmit}>Create League</button>
      </div>
    );
  }
}


export const mapStateToProps = state => ({
 EPL: state.EPL
})

export default connect(mapStateToProps,null)(SetupLeague); 