import React from 'react';
import s from './Statistics.module.css';

export class Statistics extends React.Component {
  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    const total = this.props.countTotalFeedback(good, neutral, bad);
    return (total > 0 ? (good / total) * 100 : 0).toFixed();
  };
  render() {
    const { statData, countTotalFeedback } = this.props;
    const { good, neutral, bad } = statData;
    return (
      <>
        <div className={s.statWrapper}>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {countTotalFeedback(good, neutral, bad)}</p>
          <p>
            Positive Feedback:{' '}
            {this.countPositiveFeedbackPercentage(good, neutral, bad)}%
          </p>
        </div>
      </>
    );
  }
}
