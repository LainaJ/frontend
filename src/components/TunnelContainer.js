import React, { Component } from 'react';
import TunnelListItem from './TunnelListItem'

class TunnelContainer extends Component {

renderTunnels = () => {
  return this.props.tunnels.map(tunnel =>   <TunnelListItem tunnel={tunnel} addToFavorites={this.props.addToFavorites} /> )
}

  render() {
    return (
      <div>
        <h2>All NYC Underground Tunnels</h2>
        {this.renderTunnels()}
        
      </div>
    );
  }

}

export default TunnelContainer;