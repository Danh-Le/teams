import React from 'react'


class TeamInfo extends React.Component {
  render() {
    return (
      <div class="teamContainer" className="teamInfo">
      <img class="picture" src={this.props.crestUrl} alt="team"/>
      <h2>{this.props.shortName}</h2>
      <p>{this.props.venue}</p>
      <p>{this.props.address}</p>
      <p>{this.props.email}</p>
      <p>{this.props.tel}</p>
      <p>{this.props.founded}</p>     
    </div>
    )
  }
}

export default TeamInfo 