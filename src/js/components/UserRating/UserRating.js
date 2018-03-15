import React, { Component } from 'react';
import { Rate } from 'antd';
import styles from './UserRating.scss';

class UserRating extends Component {
  state = {
    value: 3
  };
  handleChange = value => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
    return (
      <span className={styles.container}>
        <Rate onChange={this.handleChange} value={value} />
        {/* {value && <span className="ant-rate-text">{value} stars</span>} */}
        {/* <span>Totalt 23 omdömen</span> */}
      </span>
    );
  }
}

export default UserRating;
