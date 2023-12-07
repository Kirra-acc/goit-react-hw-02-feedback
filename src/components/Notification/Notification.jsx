import React from 'react';
import s from './Notification.module.css';

export class Notification extends React.Component {
  render() {
    const { message } = this.props;
    return <p className={s.notification}>{message}</p>;
  }
}
