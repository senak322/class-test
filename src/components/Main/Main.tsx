import React, { Component } from 'react';
import reviews from '../../data/data.json';

class Main extends Component {
  render() {
    return (
      <main>
        {reviews.ru.map(review => (
          <div key={review.id}>
            <h3>{review.name}</h3>
            <p>{review.text}</p>
            <p>{review.date}</p>
          </div>
        ))}
      </main>
    );
  }
}

export default Main;
