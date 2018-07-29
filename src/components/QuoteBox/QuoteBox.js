import React, { Component } from 'react';
import Button from '../Button/Button';
import Link from '../Button/Link';
import './QuoteBox.css';
import axios from 'axios';

class QuoteBox extends Component {
  state = {
    text: '',
    author: ''
  };

  // GET QUOTE ON LOAD
  async componentDidMount() {
    const res = await axios.get('https://talaikis.com/api/quotes/random/');
    this.setState({ text: res.data.quote, author: res.data.author });
  }

  fetchQuoteOnClick = () => {
    axios
      .get('https://talaikis.com/api/quotes/random/')
      .then(res =>
        this.setState({ text: res.data.quote, author: res.data.author })
      );
  };

  render() {
    const twitterIcon = <i className="fab fa-twitter" />;
    const tweetIntentLink = `https://twitter.com/intent/tweet?text="${
      this.state.text
    }" -${this.state.author}`;
    return (
      <div className="QuoteBox" id="quote-box">
        <div className="quote-info">
          <div id="text">
            <i className="fas fa-quote-left" />
            {this.state.text}
          </div>
          <div id="author">- {this.state.author}</div>
        </div>
        <div className="button-container">
          <Link link={tweetIntentLink} text={twitterIcon} />
          <Button onButtonClick={this.fetchQuoteOnClick} text="New quote" />
        </div>
      </div>
    );
  }
}

export default QuoteBox;
