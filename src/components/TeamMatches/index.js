// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatches: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    this.setState({teamMatches: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, teamMatches} = this.state
    const {latestMatchDetails, recentMatches, teamBannerUrl} = teamMatches
    return (
      <div className="team-matches-container">
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            {' '}
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
            <h1 className="latest-matches-heading">Latest Matches</h1>
            <div className="latest-match-details-container">
              <LatestMatch latestMatchDetails={latestMatchDetails} />
            </div>
            <ul className="match-card-container">
              {recentMatches.map(eachMatchCard => (
                <MatchCard
                  key={eachMatchCard.id}
                  recentMatches={eachMatchCard}
                />
              ))}
            </ul>
          </>
        )}{' '}
      </div>
    )
  }
}

export default TeamMatches
