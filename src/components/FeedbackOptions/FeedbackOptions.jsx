import React from 'react';
import s from './FeedbackOptions.module.css';

export class FeedbackOptions extends React.Component {
  render() {
    const { addFb } = this.props;

    return (
      <>
        <div className={s.feedbackWrapper}>
          <div className={s.feedbackButtons}>
            <button
              className="feedback"
              name="goodFeedback"
              onClick={() => {
                addFb('good');
              }}
            >
              Good
            </button>
            <button
              className="feedback"
              name="neutralFeedback"
              onClick={() => {
                addFb('neutral');
              }}
            >
              Neutral
            </button>
            <button
              className="feedback"
              name="badFeedback"
              onClick={() => {
                addFb('bad');
              }}
            >
              Bad
            </button>
          </div>
        </div>
      </>
    );
  }
}
