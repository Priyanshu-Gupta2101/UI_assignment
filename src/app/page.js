"use client";
import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const jsonData = {
  instructor: {
    name: "NITYANAND CHARAN DAS",
    social_media: {
      facebook: true,
      twitter: true,
      youtube: true,
      instagram: true,
    },
  },
  course: {
    title:
      "Learn key life lessons from the Gita: Mind control and conflict resolution",
    fee: {
      amount: 5000,
      currency: "INR",
    },
    inclusions: {
      on_demand_videos: 2,
      live_qa_sessions: true,
      whatsapp_community: true,
    },
    about: {
      html_content:
        "<p>Lorem ipsum text about managing relationships, communication, time management, and forgiveness.</p>",
    },
    what_to_expect: {
      html_content:
        "<ul><li>Learn to manage your relationships</li><li>Better communication</li><li>Time management</li><li>Forgiveness</li></ul>",
    },
    key_topics: {
      html_content:
        "<ol><li>10 written and audio sessions guiding you in decoding the language of numbers so that you can easily receive their insights and messages.</li><li>Intuitive exercises and homework walk you through the energies and values of numbers and number sequences so you can become your own authority.</li><li>Handy reference to numerical meanings, so you can uncover your soul's gifts, challenges, lessons, and purpose – and receive spiritual guidance along your path.</li><li>Expert techniques for manifestation offer simple ways to use numbers to co-create with the universe.</li></ol>",
    },
  },
  about_instructor: {
    html_content:
      "<p>Lorem ipsum text about the instructor's background and philosophy.</p>",
  },
  testimonial: {
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
    reviewer_name: "Name of the reviewer",
    reviewer_designation: "Designation of the reviewer",
  },
};

// Your React component
export default function Home() {
  const createMarkup = (c) => {
    return { __html: c };
  };
  return (
    <main className="bg-white text-gray-700">
      <div
        className="h-[350px] w-full bg-cover bg-center text-white flex flex-col justify-end lg:px-40 md:px-28 sm:px-14 px-9"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <span className="font-semibold xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">
          {jsonData.instructor.name}
        </span>
        <h1 className="xl:lg:text-5xl md:text-3xl text-2xl font-bold mb-4">
          {jsonData.course.title}
        </h1>
      </div>
      <div className="max-w-5xl xl:mx-auto lg:mx-32 md:mx-28 sm:mx-14 mx-9 p-3">
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div dir="ltr" data-orientation="horizontal">
              <div className="flex space-x-1">
                <div className="px-4 py-3 text-sm font-semibold text-gray-700 border-b-2 border-transparent hover:border-violet-800 transition-transform ease-out">
                  ABOUT
                </div>
                <div className="px-4 py-3 text-sm font-semibold text-gray-700 border-b-2 border-transparent hover:border-violet-800">
                  INSTRUCTOR
                </div>
                <div className="px-4 py-3 text-sm font-semibold text-gray-700 border-b-2 border-transparent hover:border-violet-800">
                  REVIEWS
                </div>
              </div>
            </div>
            <div className="py-4">
              <h2 className="lg:text-3xl md:text-xl sm:text-lg font-semibold mb-5">
                About the course
              </h2>
              <span
                className="mb-4"
                dangerouslySetInnerHTML={createMarkup(
                  jsonData.course.about.html_content
                )}
              />
              <span
                className="mb-4"
                dangerouslySetInnerHTML={createMarkup(
                  jsonData.course.about.html_content
                )}
              />
              <span
                className="mb-6"
                dangerouslySetInnerHTML={createMarkup(
                  jsonData.course.about.html_content
                )}
              />
              <h3 className="mt-7 lg:text-xl md:text-lg sm:text-base font-semibold mb-5">
                What to expect from the course
              </h3>
              <span
                className="mb-5 speckey"
                dangerouslySetInnerHTML={createMarkup(
                  jsonData.course.what_to_expect.html_content
                )}
              />
              <h3 className="mt-7 text-xl font-semibold mb-5">
                Key topics covered
              </h3>
              <span
                className="mb-5 speckey"
                dangerouslySetInnerHTML={createMarkup(
                  jsonData.course.key_topics.html_content
                )}
              />
            </div>
          </div>
          <div>
            <div
              className="lg:mt-20 lg:mr-30 rounded-lg border bg-card text-card-foreground shadow-sm w-full "
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Course fees
                </h3>
                <p className="xl:lg:md:text-base sm:text-sm text-xl text-muted-foreground">
                  {jsonData.course.fee.amount} {jsonData.course.fee.currency}
                </p>
              </div>
              <div className="px-6 speckey">
                <ul className="text-sm mb-4">
                  <li className="mb-2">
                    {jsonData.course.inclusions.on_demand_videos} on-demand
                    videos
                  </li>
                  {jsonData.course.inclusions.live_qa_sessions && (
                    <li className="mb-2">
                      One-to-one session with Nityanand Charan Das
                    </li>
                  )}

                  {jsonData.course.inclusions.whatsapp_community && (
                    <li className="mb-2">A live chat assistance community</li>
                  )}
                </ul>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-violet-800 text-white hover:bg-primary/90 h-10 px-4 py-2 w-full mb-5">
                  Register today
                </button>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-3 mt-7">
          About the Instructor
        </h2>
        <div className="mt-8 flex flex-row justify-between gap-6">
          <Image
            src="/personal.png"
            alt="Circular Image"
            width={100}
            height={100}
            style={{
              borderRadius: "50%",
              borderColor: "black",
              borderWidth: "3px",
            }}
            className="col-span-1"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <span
                className="mb-4"
                dangerouslySetInnerHTML={createMarkup(
                  jsonData.about_instructor.html_content
                )}
              />
            </div>
            <div>
              <span
                className="mb-4"
                dangerouslySetInnerHTML={createMarkup(
                  jsonData.about_instructor.html_content
                )}
              />
            </div>
          </div>
        </div>
        <div className="flex space-x-2 justify-evenly items-center mx-4 my-10">
          {jsonData.instructor.social_media.facebook && (
            <p className="xl:lg:md:text-base sm:text-sm text-xs flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-gray-600"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              Facebook
            </p>
          )}
          {jsonData.instructor.social_media.instagram && (
            <p className="xl:lg:md:text-base sm:text-sm text-xs flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-gray-600"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              Twitter
            </p>
          )}

          {jsonData.instructor.social_media.twitter && (
            <p className="xl:lg:md:text-base sm:text-sm text-xs flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-gray-600"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <path d="m10 15 5-3-5-3z"></path>
              </svg>
              YouTube
            </p>
          )}
          {jsonData.instructor.social_media.youtube && (
            <p className="xl:lg:md:text-base sm:text-sm text-xs flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-gray-600"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              Instagram
            </p>
          )}
        </div>

        <div className="mt-8">
          <Carousel
            ariaLabel="carousel"
            axis="horizontal"
            autoPlay
            interval="5000"
            transitionTime="5000"
            infiniteLoop
            showThumbs={false}
          >
            <blockquote className="xl:lg:px-40 md:px-20 sm:px-14 px-9 xl:lg:text-xl md:text-lg sm:text-base text-sm text-center py-10 italic border-l-4 border-gray-500 bg-gray-100">
              &quot;{jsonData.testimonial.text}&quot;
              <div className="mt-2">
                <span className="mt-3 block text-sm font-semibold">
                  {jsonData.testimonial.reviewer_name}
                </span>
                <span className="block text-sm text-gray-500">
                  {jsonData.testimonial.reviewer_designation}
                </span>
              </div>
            </blockquote>
          </Carousel>
        </div>
      </div>
    </main>
  );
}
