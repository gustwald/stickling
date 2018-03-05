import React from 'react';
import { Input } from 'antd';
import styles from './AdSearch.scss';

const SearchField = Input.Search;

const AdSearch = ({ ads, onSearch }) => (
  <div className={styles.container}>
    <SearchField placeholder="" onChange={e => onSearch(e.target.value)} style={{ width: 200 }} />
  </div>
);

export default AdSearch;
