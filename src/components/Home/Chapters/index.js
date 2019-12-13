import React from 'react'
import Title from '../../Title'
import styles from '../../../css/items.module.css'
import { chapters } from './chapterdata'
import Chapter from './Chapter'

const Chapters = () => {
  return (
    <section className={styles.tours}>
      <Title title="Colorado" subtitle="chapters" />
      <div className={styles.center}>
        {chapters.map(c => {
          return <Chapter key={c.label} chapter={c} />
        })}
      </div>
    </section>
  )
}

export default Chapters
