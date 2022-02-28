import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      news: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://api.mediastack.com/v1/news?access_key=857308bce99270b6987a3c860e4382ae&sources=cnn&languages=en')
      .then(response=> response.json())
      .then((news) => {this.setState({ news: news.data})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  

  render() {
    const { news, searchfield } = this.state;
    const filteredNews = news.filter(article =>{
      return article.title.toLowerCase().includes(searchfield.toLowerCase());
    })
    //const filteredNews = news;
    console.log(news);
    return !news.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>The News App</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList news={filteredNews} />
          </Scroll>
        </div>
      );
      
  }
}

export default App;