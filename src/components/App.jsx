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
  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
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

        {totalFb(this.state.good, this.state.neutral, this.state.bad) > 0 ? (
          <Section title="Statistics">
            <Statistics
              statData={this.state}
              countTotalFeedback={this.countTotalFeedback}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
