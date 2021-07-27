import { useEffect, useState } from 'react'
import Head from 'next/head'

import styles from '@styles/components/layout.module.scss'

const Layout = ({ children, globalClass, companyName, siteTitle, siteDescription, mainCtaLabel, mainCtaHref, footerCtaSub, footerCtaHeadline, appStoreUrl, appStoreImgSrc, appStoreImgAlt, facebookImgSrc, facebookImgAlt, instagramImgSrc, instagramImgAlt, twitterImgSrc, twitterImgAlt, linkedInImgSrc, linkedInImgAlt, youTubeImgSrc, youTubeImgAlt }) => {

  return (
    <div className={globalClass}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Nav
          mainCtaLabel={mainCtaLabel}
          mainCtaHref={mainCtaHref}
        />
      </Header>
      <main>
        {children}
      </main>
      <Footer
        companyName={companyName}
        footerCtaSub={footerCtaSub}
        footerCtaHeadline={footerCtaHeadline}
        appStoreUrl={appStoreUrl}
        appStoreImgSrc={appStoreImgSrc}
        appStoreImgAlt={appStoreImgAlt}
        facebookImgSrc={facebookImgSrc}
        facebookImgAlt={facebookImgAlt}
        instagramImgSrc={instagramImgSrc}
        instagramImgAlt={instagramImgAlt}
        twitterImgSrc={twitterImgSrc}
        twitterImgAlt={twitterImgAlt}
        linkedInImgSrc={linkedInImgSrc}
        linkedInImgAlt={linkedInImgAlt}
        youTubeImgSrc={youTubeImgSrc}
        youTubeImgAlt={youTubeImgAlt}
      />
    </div>
  )
}

export default Layout

const Header = ({ children }) => {
  const [headerBg, setHeaderBg] = useState(false)
  const [scrollPos, setScrollPos] = useState(0)

  const updateHeaderBg = () => {
    window.pageYOffset >= 60 ? setHeaderBg(true) : setHeaderBg(false)
  }

  const handleScroll = () => {
    // scroll down hide
    // scroll up show
  }

  useEffect(() => {


    window.addEventListener('scroll', () => {
      updateHeaderBg();
      handleScroll();
    })
  })

  return (
    <header className={`header wrapper ${styles.header} ${headerBg ? styles.scroll : ''}`}>
      <div className={`container ${styles.container}`}>
        <img className={styles.logo} src='https://dummyimage.com/220X60/000/fff' alt='Home App Logo' />
        {children}
      </div>
    </header>
  )
}

const Nav = ({ mainCtaLabel, mainCtaHref }) => {
  const navList = false

  return (
    <nav className={styles.nav}>
      {navList && <ul>
        <li>
          <a className='outline' href='#'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Option
          </a>
        </li>
      </ul>}
      <button className='btn gradient' href={mainCtaHref}>{mainCtaLabel}</button>
    </nav>
  )
}

const Footer = ({ companyName, footerCtaSub, footerCtaHeadline, appStoreUrl, appStoreImgSrc, appStoreImgAlt, facebookImgSrc, facebookImgAlt, instagramImgSrc, instagramImgAlt, twitterImgSrc, twitterImgAlt, linkedInImgSrc, linkedInImgAlt, youTubeImgSrc, youTubeImgAlt }) => {
  return (
    <footer className={`wrapper ${styles.footer}`}>
      <div className={`container ${styles.ctaContainer}`}>
        <h4>{footerCtaSub}</h4>
        <h2>{footerCtaHeadline}</h2>
        <a href={appStoreUrl} target='_blank'>
          <img className={styles.appStoreBadge} src={appStoreImgSrc} alt={appStoreImgAlt} />
        </a>
      </div>
      <div className={`container ${styles.bottomContainer}`}>
        <div className={`col left ${styles.left}`}>
          <small>
            &copy; {new Date().getFullYear()} {companyName}. All Rights Reserved.
            <span className='mobile-block'><a href='#'>Privacy Policy</a> <a href='#'>Terms and Conditions</a></span>
            <span className='mobile-block'><a href='#'>Contact</a></span>
          </small>
        </div>
        <div className={`col right ${styles.right}`}>
          <div className={`${styles.social}`}>
            <a href="#" target='_blank'>
              <img className={styles.socialIcon} src={facebookImgSrc} alt={facebookImgAlt} />
            </a>

            <a href="#" target='_blank'>
              <img className={styles.socialIcon} src={instagramImgSrc} alt={instagramImgAlt} />
            </a>

            <a href="#" target='_blank'>
              <img className={styles.socialIcon} src={twitterImgSrc} alt={twitterImgAlt} />
            </a>

            <a href="#" target='_blank'>
              <img className={styles.socialIcon} src={linkedInImgSrc} alt={linkedInImgAlt} />
            </a>

            <a href="#" target='_blank'>
              <img className={styles.socialIcon} src={youTubeImgSrc} alt={youTubeImgAlt} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}