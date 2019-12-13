import React from 'react'
import Title from '../Title'
import styles from '../../css/services.module.css'

const Calendar = React.forwardRef((props, ref) => (
  <section className={styles.services} ref={ref}>
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
  </section>
))

export default Calendar
