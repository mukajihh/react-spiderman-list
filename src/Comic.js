import React, { Component } from 'react';

class Comic extends Component {

  render() {
    var comic = this.props.comic;
    var imageScale = '/portrait_xlarge.';
    return(
      <li>
        <h2>{comic.title}</h2>
        <p>{comic.description}</p>
        <img src={comic.thumbnail.path+imageScale+comic.thumbnail.extension} />
      </li>
    )
  }
}

export default Comic
