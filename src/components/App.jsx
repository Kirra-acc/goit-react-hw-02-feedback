import React from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { Section } from './Section/Section.jsx';
import { Notification } from './Notification/Notification.jsx';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFb = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };
  countTotalFeedback = () => {
    return (this.state.good + this.state.neutral + this.state.bad);
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return (total > 0 ? (this.state.good / total) * 100 : 0).toFixed();
  };

  render() {
    const totalFb = this.countTotalFeedback;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions addFb={this.addFb} />
        </Section>

        {totalFb() > 0 ? (
          <Section title="Statistics">
            <Statistics
              statData={this.state}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
