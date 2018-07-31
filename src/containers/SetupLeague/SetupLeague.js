import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { createLeague } from '../../actions/updateLeague/updateLeague';
import { addDraftCards } from '../../actions/handleDraftCards/handleDraftCards';
import { nbaDraftCleaner } from '../../cleaner/cleaner';
import './setup-league.css';
import PropTypes from 'prop-types';

export class SetupLeague extends Component {
  constructor(props){
    super(props);

    this.state = {
      showMenu: false,
      leagueName: '',
      leagueBet: '',
      league: ''

    };
  }

  showMenu = (event) => {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu = (event) => {
    if (!this.dropdownMenu.contains(event.target) || this.state.league.length) {
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
    let draftTeams;

    event.preventDefault();

    const leagueInfo = {
      league_type: this.state.league,
      name: this.state.leagueName,
      bet: this.state.leagueBet
    };

    this.props.createNewLeague(leagueInfo);

    if (this.state.league === "EPL"){
      draftTeams = this.props.EPL.map(team => {
        return {name:team.name};
      });

      this.props.handleDraftTeams(draftTeams);

    } else if (this.state.league === "NBA"){
      draftTeams = nbaDraftCleaner(this.props.NBA);

      this.props.handleDraftTeams(draftTeams);
    }
  }

  setEnglish = event => {
    event.preventDefault();
    this.setState({ league: "EPL" });
  }

  setNBA = event => {
    event.preventDefault();
    this.setState({ league: "NBA" });
  }

  render() {

    const isInvalid = 
    this.state.leagueName === "" ||
    this.state.league=== "";

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
          <input
            name="leagueBet"
            value={this.state.leagueBet}
            onChange={this.handleChange}
            placeholder="Place Your Bet"
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
          <button disabled={isInvalid} onClick={this.handleSubmit} className="submit-setup"
          >Create League</button>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  EPL: state.EPL,
  NBA: state.NBA
});

export const mapDispatchToProps = dispatch => ({
  createNewLeague: leagueInfo => dispatch(createLeague(leagueInfo)),
  handleDraftTeams: draftTeams => dispatch(addDraftCards(draftTeams))
});

export default connect(mapStateToProps, mapDispatchToProps)(SetupLeague);

SetupLeague.propTypes = {
  NBA: PropTypes.object,
  EPL: PropTypes.arrayOf(PropTypes.object),
  createNewLeague: PropTypes.func,
  handleDraftTeams: PropTypes.func
};