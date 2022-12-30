import React from 'react'
import styles from './Actions.module.css'

export const Actions = () => {
    return (
        <table className={styles.tableClass}>
        <tr>
            <th className={styles.actionButton}>resume</th>
            <th className={styles.actionButton}>portfolio</th>
            <th className={styles.actionButton}>contact</th>
        </tr>
    </table>
    )
}

