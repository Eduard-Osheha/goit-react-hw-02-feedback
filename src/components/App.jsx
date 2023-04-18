import React, { Component } from 'react';
import Section from './section/Section';
import { FeedbackOptions } from './options/FeedbackOptions';
import Statistics from './statistics/Statistics';
import { Notification } from './notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  handleChange = e => {
    if (e.target.name === 'good') {
      this.addGoodReview();
    } else if (e.target.name === 'bad') {
      this.addBadReview();
    } else {
      this.addNeutralReview();
    }
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  addGoodReview = () =>
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));

  addNeutralReview = () =>
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));

  addBadReview = () =>
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positivePercentage: Number(
        ((prevState.good / prevState.total) * 100).toFixed()
      ),
    }));
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          gap: '10px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleChange}
          ></FeedbackOptions>
        </Section>

        <Section title="Statictics">
          {this.state.total !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positivePercentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
