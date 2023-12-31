import React from 'react'
import SocialLinks from './SocialLinks'
import Subscribe from './Subscribe'
import Image from 'next/image'
import Ad2 from "/public/assets/ad-2.png";
import AboutProfile from "/public/assets/chat-bot.jpg";

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <section>
        <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
            Subscribe and Follow
        </h4>
        <div className="my-5 mx-5">
            <SocialLinks isDark />
        </div>
        <Subscribe />
        <Image
            className="hidden md:block my-8 w-full"
            alt="advert-2"
            placeholder="blur"
            src={Ad2}
            width={500}
            height={1000}
        />
        <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
            About the Blog
        </h4>
        <div className="flex justify-center my-3">
            <Image
            alt="about-profile"
            placeholder="blur"
            src={AboutProfile}
            style={{ width: "500px", height: "250px", objectFit: "cover" }}
            />
        </div>
        <h4 className="py-3 px-5 text-wh-500 font-bold text-center">
            Little Biscuit
        </h4>
        <p className="text-wh-500 text-center text-sm">
            Meet Mr. Biscuit, the visionary mind behind our AI blog, pioneering the exploration of limitless possibilities and expanding horizons.
        </p>
    </section>
  )
}

export default Sidebar
