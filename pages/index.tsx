import type { NextPage } from 'next'
import Head from 'next/head';

import ExternalLink from '../components/external-link';
import ImageShowcase from '../components/image-showcase';
import VideoShowcase from '../components/video-showcase';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>UI Designs</title>
        <meta name="description" content="UI Designs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <article className="container mx-auto p-8">
          <h1 className="font-light mb-0 text-center md:text-left" style={{ lineHeight: 1 }}>
            UI Designs
          </h1>
          <div className="mt-1 mb-4 text-center md:text-left">Actual Photos</div>
          <section className="pt-[1px] pb-[1px] mb-12">
            <div className="grid gird-cols-1 lg:grid-cols-2">
              <h3 className="font-light text-center md:text-left">Zaycare Admin</h3>
              <div className="flex flex-row justify-center lg:justify-end items-center mb-4 lg:mt-4 lg:mb-0">
                <ExternalLink href="https://apps.apple.com/sr/app/zaycare/id1558651732">
                  <img
                    className="mr-1 bus-store-image"
                    alt="App Store"
                    src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/app-store.png`} />
                </ExternalLink>
                <ExternalLink href="https://play.google.com/store/apps/details?id=zay.works.zaycare">
                  <img
                    className="bus-store-image"
                    alt="Play Store"
                    src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/play-store.png`} />
                </ExternalLink>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
              <VideoShowcase url="admin.mp4" />
              <ImageShowcase imageAlt="Home" imageUrl="admin-home-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="admin-children-attendance-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="admin-children-attendance-2.png" />
              <ImageShowcase imageAlt="Home" imageUrl="admin-children-attendance-3.png" />
              <ImageShowcase imageAlt="Home" imageUrl="admin-children-attendance-4.png" />
              <ImageShowcase imageAlt="Home" imageUrl="admin-children-attendance-5.png" />
              <ImageShowcase imageAlt="Home" imageUrl="admin-children-attendance-6.png" />
              <ImageShowcase imageAlt="Home" imageUrl="admin-teachers-attendance-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="admin-feed-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="admin-feed-2.png" />
              <ImageShowcase imageAlt="Home" imageUrl="admin-feed-3.png" />
              <ImageShowcase imageAlt="Home" imageUrl="admin-feed-4.png" />
              <ImageShowcase imageAlt="Home" imageUrl="admin-feed-5.png" />
              <ImageShowcase imageAlt="Home" imageUrl="admin-menu-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="admin-children-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="admin-child-profile-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="admin-child-profile-2.png" />
              <ImageShowcase imageAlt="Home" imageUrl="admin-child-parents-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="admin-child-contract-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="admin-child-schedule-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="admin-child-schedule-2.png" />
            </div>
          </section>

          <section className="pt-[1px] pb-[1px] mb-12">
            <div className="grid gird-cols-1 lg:grid-cols-2">
              <h3 className="font-light text-center md:text-left">Zaycare Parent</h3>
              <div className="flex flex-row justify-center lg:justify-end items-center mb-4 lg:mt-4 lg:mb-0">
                <ExternalLink href="https://apps.apple.com/sr/app/zaycare-parent/id1566116225">
                  <img
                    className="mr-1 bus-store-image"
                    alt="App Store"
                    src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/app-store.png`} />
                </ExternalLink>
                <ExternalLink href="https://play.google.com/store/apps/details?id=com.zaycare.parent">
                  <img
                    className="bus-store-image"
                    alt="Play Store"
                    src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/play-store.png`} />
                </ExternalLink>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
              <VideoShowcase url="parent.mp4" />
              <ImageShowcase imageAlt="Home" imageUrl="parent-home-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="parent-home-2.png" />
              <ImageShowcase imageAlt="Home" imageUrl="parent-home-3.png" />
              <ImageShowcase imageAlt="Home" imageUrl="parent-child-profile-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="parent-child-profile-2.png" />
              <ImageShowcase imageAlt="Home" imageUrl="parent-feed-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="parent-feed-2.png" />
              <ImageShowcase imageAlt="Home" imageUrl="parent-child-invoices-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="parent-child-schedule-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="parent-child-contract-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="parent-book-day-1.png" />
              <ImageShowcase imageAlt="Home" imageUrl="parent-book-day-2.png" />
              <ImageShowcase imageAlt="Home" imageUrl="parent-book-day-3.png" />
              <ImageShowcase imageAlt="Home" imageUrl="parent-book-day-4.png" />
              <ImageShowcase imageAlt="Home" imageUrl="parent-book-day-5.png" />
              <ImageShowcase imageAlt="Home" imageUrl="parent-food-menu-1.png" />
            </div>
          </section>
        </article>
      </main>
    </div>
  )
}

export default Home
