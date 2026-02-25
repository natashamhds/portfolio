"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import { m } from 'framer-motion';

const AnimatedNumbers = dynamic(() =>  {return import ("react-animated-numbers")}, { ssr: false });

const achievementsList = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "1",
    postfix: "K+",
  },
  // {
  //   metric: "Awards",
  //   value: "10+",
  // },
  {
    metric: "Years",
    value: "1"
  }
];

const AchievementSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='bg-black/0.4 backdrop-blur-md rounded-md py-8 px-16 flex flex-row items-center justify-between'>
        {achievementsList.map((achievement, index) => {
    return (
      <div key={index} className="flex flex-col items-center justify-center mx-4">
        <h2 className="text-4xl font-bold text-white">
          {achievement.prefix}
          <AnimatedNumbers
            includeComma
            // transitions={(index) => ({
            //   type: "spring",
            //   duration: index + 0.3,
            // })}
            animateToNumber={parseInt(achievement.value)}
            locale='en-US'
            className='text-white text-4xl font-bold flex flex-row'
            configs={(_, index) => {
              return {
                mass: 1,
                friction: 100,
                tension: 140 * (index + 1)
              }
            }}
            ></AnimatedNumbers>
            {achievement.postfix}
        </h2>
        <p className="text-white text-4sm">{achievement.metric}</p>
      </div>
    );
    })}
        </div>
    </div>
  );
};

export default AchievementSection