import React from 'react';
import s from './Statistics.module.css';

export class Statistics extends React.Component {
  render() {
    const { statData, countTotalFeedback, countPositiveFeedbackPercentage } = this.props;
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
            {countPositiveFeedbackPercentage(good, neutral, bad)}%
          </p>
        </div>
      </>
    );
  }
}
