"use client";
import Image from "next/image";
import Link from "next/link";

export function Facebook() {
  return (
    <div className="">
      <Link
        href={`${process.env.FB_URL}`}
        className="flex items-center space-x-2"
      >
        <Image
          src="/icons/64px-2021_Facebook_icon.svg.png"
          alt="facebook"
          width={64}
          height={64}
        />
      </Link>
    </div>
  );
}

export function Instagram() {
  return (
    <div className="">
      <Link
        href={`${process.env.INSTA_URL}`}
        className="flex items-center space-x-2"
      >
        <Image
          src="/icons/instagram.png"
          alt="instagram"
          width={64}
          height={64}
        />
      </Link>
    </div>
  );
}

export function Linkedin() {
  return (
    <div className="">
      <Link
        href={`${process.env.LINKEDIN_URL}`}
        className="flex items-center space-x-2"
      >
        <Image
          src="/icons/icons8-linkedin-64.svg"
          alt="linkedin"
          width={64}
          height={64}
        />
      </Link>
    </div>
  );
}
