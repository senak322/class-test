import React, { Component } from "react";
import reviews from "../../data/data.json";

interface Review {
  id: number;
  name: string;
  review: string;
  date: string;
}

interface MainProps {
  language: "ru" | "en";
}

class Main extends Component<MainProps> {
  render() {
    const { language } = this.props;
    const reviewsList: Review[] = reviews[language];

    return (
      <main>
        {reviewsList.map(review => (
          <div key={review.id}>
            <h3>{review.name}</h3>
            <p>{review.review}</p>
            <p>{review.date}</p>
          </div>
        ))}
      </main>
    );
  }
}

export default Main;
