import React, {Component} from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "AaosjRHKjEcXm",
    }

    this.search("homer thinking");
  }

  search = (query) => {
    giphy('YgSB7LLhIaIQ3BnSS6XLycIbJ4Jf8tcw').search({
      q: query,
      rating: 'g',
      limit: 10,
    }, // change the function below to an arrow function for the callback
    (error, result) => {
      this.setState({
        gifs: result.data
      });

});

  }
    // E.g. we pass props 'searchFunction' to SearchBar
  render () {
    return (
      <div>
         <div className="left-scene">
            <SearchBar searchFunction={this.search}/>
            <div className="selected-gif">
              <Gif id={this.state.selectedGifId} />
            </div>
         </div>
         <div className="right-scene">
            <GifList gifs={this.state.gifs} />
         </div>
      </div>
      );
  }
}

export default App;
