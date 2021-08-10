import styles from './Testimonials.module.scss';

import Star from '../../icons/star.svg';

export default function Testimonials({testimonials}) {
  return (
    <div className={styles.testimonials}>
      <figure>
        <blockquote>
          <p>"{testimonials[0].quote}"</p>
        </blockquote>
        <figcaption>
          - {testimonials[0].person},
          <address>{testimonials[0].location}</address>
        </figcaption>

        <div className={styles.stars}>
          {/* Always 5 stars ;) */}
          {[...Array(5)].map((e, i) => <Star key={i}/>)}
        </div>
      </figure>
    </div>
  )
}