import styles from './Testimonials.module.scss';

import Star from '../../icons/star.svg';

export default function Testimonials() {
  return (
    <div className={styles.testimonials}>
      <figure>
        <blockquote>
          <p>"Mark was fantastic to work with. Quality and attention to detail are his default."</p>
        </blockquote>
        <figcaption>
          - Todd Patterson,
          <address>Reedsburg, WI</address>
        </figcaption>

        <div className={styles.stars}>
          {/* Always 5 stars ;) */}
          {[...Array(5)].map((e, i) => <Star key={i}/>)}
        </div>
      </figure>
    </div>
  )
}