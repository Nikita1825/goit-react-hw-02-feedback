import React from 'react';
import  Statistics  from "./Statistics/Statistics"
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';






export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  incrementCount = btnId => {
    this.setState(prevState => {
      return { [btnId]: prevState[btnId] + 1 };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  };
  render() {
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedbackClick={this.incrementCount}
          />
        </Section>
        <Section title={'Statistics'}>
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              percentage={percentage}
            />) : (<Notification message="There is no feedback"></Notification>)}
        </Section>
      </div>
    );
  }
}


