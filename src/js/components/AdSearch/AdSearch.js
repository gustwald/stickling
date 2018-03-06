import React from 'react';
import { Input, Icon } from 'antd';
import styles from './AdSearch.scss';

const AdSearch = ({ ads, onSearch }) => (
  <div className={styles.container}>
    <span>
      <input
        className={styles.searchInput}
        placeholder="Sök"
        onChange={e => onSearch(e.target.value)}
        style={{ width: 200 }}
        type="text"
      />
    </span>
  </div>
);

export default AdSearch;
