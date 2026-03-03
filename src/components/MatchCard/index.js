// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  const {
    competing_team: competingTeam,
    competing_team_logo: competingTeamLogo,
    match_status: matchStatus,
    result,
  } = recentMatches
  const statusClassName = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="recent-match-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="img-logo"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={statusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
