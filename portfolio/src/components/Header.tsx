import React from 'react'
import {Actions} from './Actions'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <table className={styles.tableClass}>
        <tr>
            <th className={styles.name}>Baumel Márton</th>
            <th className={styles.icons}>Twitter</th>
            <th className={styles.icons}>GitHub</th>
        </tr>
        <Actions/>
    </table>
  )
}

