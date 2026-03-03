import React from 'react';
import { ColorKey } from './ColoredCard';

type timeline = {
  id: string;
  heading: React.ReactNode;
  details: {
    color: ColorKey;
    detail: string;
    heading: string;
    time: string;
  }[];
};

export const timelines: timeline[] = [
  {
    id: 'inauguration',
    heading: <span>4th March</span>,
    details: [
      {
        color: 'blue',
        detail: 'Event Inauguration Ceremony',
        heading: 'Inauguration',
        time: 'March 4th',
      },
    ],
  },
  {
    id: 'registration-closes',
    heading: <span>12th March</span>,
    details: [
      {
        color: 'red',
        detail: 'Extended till 18th March',
        heading: 'Registration Closes',
        time: 'March 12th',
      },
    ],
  },
  {
    id: 'finalist-announcement',
    heading: <span>21st March</span>,
    details: [
      {
        color: 'indigo',
        detail: 'Announcement of Top Finalists',
        heading: 'Finalists',
        time: 'March 21st',
      },
    ],
  },
  {
    id: 'confirmation',
    heading: <span>25th March</span>,
    details: [
      {
        color: 'green',
        detail: 'Final day for participation confirmation',
        heading: 'Confirmation',
        time: 'March 25th',
      },
    ],
  },
  {
    id: 'payment',
    heading: <span>1st April</span>,
    details: [
      {
        color: 'yellow',
        detail: 'Final deadline for payment',
        heading: 'Payment',
        time: 'April 1st',
      },
    ],
  },
  {
    id: 'hackathon-days',
    heading: <span>4th-5th April</span>,
    details: [
      {
        color: 'orange',
        detail: 'Final days of Hackathon',
        heading: 'Hackathon',
        time: 'April 4th - 5th',
      },
    ],
  },
  {
    id: 'closing-ceremony',
    heading: <span>5th April</span>,
    details: [
      {
        color: 'pink',
        detail: 'Winner’s prize distribution',
        heading: 'Closing',
        time: 'April 5th (Eve)',
      },
    ],
  },
];
