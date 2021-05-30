import Image from 'next/image'
import Link from 'next/link'

import styles from './Header.module.scss';

import Facebook from './facebook.svg';

export default function Home() {
  return (
    <header>
      <nav>
        <Image src="/img/future-electric-and-solar.png" width={800} height={297}></Image>
        <ul>
          <li>
            {/* <Link> */}
              <a href="/about">About Us</a>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link> */}
              <a href="/services">Services</a>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link> */}
              <a href="/why-solar">Why Solar?</a>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link> */}
              <a href="/contact">Contact</a>
            {/* </Link> */}
          </li>
          <li className="social">
            <a href="https://www.facebook.com/futureelectricandsolar" target="_blank" rel="noopener">
              <Facebook/>
            </a>
          </li>
          <li className="social">
            <a href="https://www.instagram.com/futureelectricandsolar" target="_blank" rel="noopener">
              <svg></svg>
            </a>
          </li>
          <li className="social">
            <a href="mailto:mark@futureelectricandsolar.com">
              <svg></svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>

  )
}