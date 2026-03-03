// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Pie, PieChart, Tooltip, Cell, Legend} from 'recharts'
// import {RechartsDevtools} from '@recharts/devtools'

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

  handleClick = () => {
    const {history} = this.props
    // console.log("History =>", history)
    history.push('/')
  }

  renderPieChart = () => {
    const {teamMatches} = this.state
    const {recentMatches} = teamMatches
    const totalWin = recentMatches.reduce((acc, eachMatch) => {
      if (eachMatch.match_status === 'Won') acc += 1

      return acc
    }, 0)
    const totalLost = recentMatches.reduce((acc, eachMatch) => {
      if (eachMatch.match_status === 'Lost') acc += 1

      return acc
    }, 0)
    const totalDrawn = recentMatches.reduce((acc, eachMatch) => {
      if (eachMatch.match_status === 'Drawn') acc += 1

      return acc
    }, 0)
    const data = [
      {name: 'Won', value: totalWin},
      {name: 'Loss', value: totalLost},
      {name: 'Drawn', value: totalDrawn},
    ]
    console.log(
      `Total Wins => ${totalWin}, Totat Loss => ${totalLost} and Total Drawn => ${totalDrawn}`,
    )
    return (
      <>
        <PieChart width={250} height={200}>
          <Pie data={data} dataKey="value">
            <Cell fill="#4CAF50" />
            <Cell fill="#F44336" />
            <Cell fill="#FFC107" />
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
        <div className="statistic-text-container">
          <p className="total-stats">
            <b>Total Won: </b> {totalWin}
          </p>
          <p className="total-stats">
            <b>Total Loss: </b> {totalLost}
          </p>
          <p className="total-stats">
            <b>Total Drawn: </b> {totalDrawn}
          </p>
        </div>
      </>
    )
  }

  render() {
    const {isLoading, teamMatches} = this.state
    const {latestMatchDetails, recentMatches, teamBannerUrl} = teamMatches
    return (
      <div className="team-matches-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="button-container">
              <button
                type="button"
                className="button"
                onClick={this.handleClick}
              >
                <span>Back</span>
              </button>
            </div>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
            <h1 className="latest-matches-heading">Latest Matches</h1>
            <div className="latest-match-details-container">
              <LatestMatch latestMatchDetails={latestMatchDetails} />
            </div>
            <h1 className="latest-matches-heading">Match Statistic</h1>
            <div className="pie-chart-container" data-testid="pieChart">
              {this.renderPieChart()}
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
