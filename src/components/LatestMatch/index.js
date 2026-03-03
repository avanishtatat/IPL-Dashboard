// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competing_team: competingTeam,
    competing_team_logo: competingTeamLogo,
    date,
    result,
    venue,
    umpires,
    man_of_the_match: manOfTheMatch,
    first_innings: firstInnings,
    second_innings: secondInnings,
  } = latestMatchDetails

  return (
    <>
      <div className="latest-match-container">
        <div className="match-details">
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <hr className="hr-line" />
      <div className="match-results">
        <h1 className="que">First Innings</h1>
        <p className="ans">{firstInnings}</p>
        <h1 className="que">Second Innings</h1>
        <p className="ans">{secondInnings}</p>
        <h1 className="que">Man Of The Match</h1>
        <p className="ans">{manOfTheMatch}</p>
        <h1 className="que">Umpires</h1>
        <p className="ans">{umpires}</p>
      </div>
    </>
  )
}

export default LatestMatch
