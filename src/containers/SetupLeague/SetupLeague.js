import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import './setup-league.css';

export class SetupLeague extends Component {
  constructor(props){
    super(props)

    this.state = {
      showMenu: false,
      leagueName: '',
      league: ''

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

  setEnglish = event => {
    event.preventDefault()
    this.setState({ league: "EPL" })
  }

  setNBA = event => {
    event.preventDefault()
    this.setState({ league: "NBA" })
  }

  render() {
    return (
      <div className="setup-section">
        <div className="setup-container">
          <h3 className="setup-title">Setup Your League</h3>
          <input
          name="leagueName"
          value={this.state.leagueName}
          onChange={this.handleChange}
          placeholder="League Name"
          className="setup-input"
          />
          <button onClick={this.showMenu}
            className="league-menu">
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
                  <button onClick={this.setEnglish} className="setup-english">
                    English Premier League
                  </button>
                  <button  onClick={this.setNBA} className="setup-nba">
                    NBA
                  </button>
                </div>
              )
              : (
                null
              )
          }
          <button onSubmit={this.handleSubmit} className="submit-setup"
          >Create League</button>
        </div>
      </div>
    );
  }
}


export const mapStateToProps = state => ({
 EPL: state.EPL
})

export default connect(mapStateToProps,null)(SetupLeague); 