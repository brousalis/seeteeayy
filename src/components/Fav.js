import React from 'react';

import Star from './ui/Star';
import FavService from './FavService';

class Fav extends React.Component {
  constructor() {
    super();

    this.state = {
      favorite: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const fav = FavService.getFav(nextProps.routeId, nextProps.stopId)
    if (fav) {
      this.setState({favorite: true})
    } else {
      this.setState({favorite: false})
    }
  }

  componentWillUnmount() {
    this.setState({favorite: false})
  }

  handleClick(e) {
    if (this.state.favorite) {
      FavService.removeFav(this.props.routeId, this.props.stopId)
      this.setState({favorite: false})
    } else {
      FavService.setFav(this.props.routeId, this.props.stopId)
      this.setState({favorite: true})
    }
  }

  render() {
    const active = this.state.favorite ? 'active' : '';
    const classes = `fav ${active}`;
    return (
      <div className={classes} onClick={this.handleClick}>
        <Star />
      </div>
    )
  }
}

export default Fav;
