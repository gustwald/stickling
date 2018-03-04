import React from 'react';
import { Input } from 'antd';
import styles from './AdSearch.scss';

const SearchField = Input.Search;

const AdSearch = ({ ads }) => (
  <div className={styles.container}>
    <SearchField
      placeholder=""
      onChange={e => console.log(e.target.value)}
      style={{ width: 200 }}
    />
  </div>
);

export default AdSearch;
