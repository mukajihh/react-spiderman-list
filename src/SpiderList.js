import React, { Component } from 'react';
import CryptoJS from 'crypto-js';
import Comic from './Comic.js';

const PRIVATE_KEY = '4b455682c5fd4dee9c53df74be6b9bc29348fb7d',
      PUBLIC_KEY = 'ae517097be063c09e4bf4bd221b4009d',
      CHAR_ID = '1009610',
      url = 'http://gateway.marvel.com:80/v1/public/comics';

class SpiderList extends Component {
  constructor() {
    super();
    this.state = {
      comics: []
    };
  }

  componentWillMount() {
    var ts = new Date().getTime();
    var hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();
    var urlKey = url + '?apikey=' + PUBLIC_KEY + '&hash=' + hash + '&ts=' + ts;

    fetch(urlKey)
    .then( data => data.json() )
    .then( data => {
      this.setState({
        comics: data.data.results
      })
    });
  }

  render() {
    return (
      <div className="list-container">
        <ul>  
          {this.state.comics.map((comic) => 
            <Comic key={comic.id} comic={comic} />
          )}
        </ul>
      </div>
    );
  }
}

export default SpiderList;
