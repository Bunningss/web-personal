import Link from 'next/link';
import React from 'react';
import styles from '../styles/ListItem.module.css';

const ListItem = ({ item }) => {
  return (
    <a href={item.href}>
        <li className={styles.listItem}>{item.name}</li>
    </a>
  )
}

export default ListItem