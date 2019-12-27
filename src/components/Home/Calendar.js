import React from 'react'
import Title from '../Title'
import styles from '../../css/services.module.css'

const Calendar = () => (
  <section className={styles.services} id="calendar">
    <Title title="Events" subtitle="Calendar" />

    <div className={styles.center}>
      <iframe
        src="https://calendar.google.com/calendar/b/3/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=America%2FDenver&amp;src=YXZjby5nb3ZlZ2FuQGdtYWlsLmNvbQ&amp;color=%2322AA99&amp;showTitle=1&amp;showNav=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0"
        style={{ borderWidth: 0 }}
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
      />
    </div>
    <div className={styles.center} style={{ marginTop: '15px' }}>
      <p>
        Each event in this calendar has a link to a public Facebook event. We
        strongly recommend checking this link (you don&apos;t need a Facebook
        account) before coming to a as the location or time may change.
      </p>
      <p>
        Again, the best way to get involved with AV is to join your
        chapter&apos; Facebook group. You&apos;ll have access to the most up to
        date info on cubes and be able to RSVP for cubes you plan to attend
        which really helps the organizers plan. If you&apos;re deadset against
        Facebook we&apos;d still love to see you at cubes, but please take a
        moment to fill out this{' '}
        <a
          href="https://forms.gle/ZZ2xy2wYLQTiZBsD7"
          target="_blank"
          rel="noopener noreferrer"
        >
          form
        </a>{' '}
        to get updates.
      </p>
    </div>
  </section>
)

export default Calendar
