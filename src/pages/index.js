import Layout from '@comps/layout'
import Hero from '@comps/Hero'
import TwoColumn from '@comps/TwoColumn'
import Phone from '@comps/Phone'

export default function Home() {
  return (
    <Layout
      globalClass='app'
      companyName='HomeBuyHome'
      siteTitle='HomeBuyHome App | Download now in the App Store'
      siteDescription=' Find your next home by comparing what is most important to you with ease.'
      mainCtaLabel='How it works'
      mainCtaHref='#'
      facebookImgSrc='/Icon_Facebook.svg'
      facebookImgAlt='Facebook'
      instagramImgSrc='/Icon_Instagram.svg'
      instagramImgAlt='Instagram'
      twitterImgSrc='/Icon_Twitter.svg'
      twitterImgAlt='Twitter'
      linkedInImgSrc='/Icon_LinkedIn.svg'
      linkedInImgAlt='LinkedIn'
      youTubeImgSrc='/Icon_YouTube.svg'
      youTubeImgAlt='YouTube'
      footerCtaSub='HomeBuyHome App'
      footerCtaHeadline='Download today'
      appStoreUrl='#'
      appStoreImgSrc='/Badge_AppStore.svg'
      appStoreImgAlt='App Store Badge'
    >
      <Hero
        headline='Discover what makes a home. Not just a house.'
        subcopy='Easily distinguish the amenities that matter most with a side-by-side comparison guide before you purchase your next home.'
        appStoreUrl='#'
        appStoreImgSrc='/Badge_AppStore.svg'
        appStoreImgAlt='App Store Badge'
      />

      <Phone />

      <TwoColumn
        subhead='Step 1'
        headline='Enter addresses of your favorite listings'
        subcopy='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      />

      <TwoColumn
        subhead='Step 2'
        headline='Compare your most critical home attributes'
        subcopy='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      />

      <TwoColumn
        subhead='Step 3'
        headline='Find the home that matches your needs and wants'
        subcopy='Make informed decisions, quickly, so you can land your dream home.'
      />

      <TwoColumn
        themeClass='theme-black'
        subhead='Latest Releases'
        headline='Your experience is our passion'
        subcopy='Stay up-to-date with new functionality or updates to designs to give you the advantage in this swiftly moving housing market.'
      />

    </Layout>
  )
}
