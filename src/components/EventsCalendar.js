// src/components/EventsCalendar.js

import React from 'react';
import '../styles/EventsCalendar.css';

const EventsCalendar = () => {
    const events = [
        { date: 'October 20, 2024', title: 'Blockchain for Sustainability Workshop' },
        { date: 'November 26, 2024', title: 'Annual Community Meetup' },
        { date: 'December 15, 2024', title: 'Virtual AMA Session with the Team' },
    ];

    return (
        <div className="events-calendar">
            {events.map((event, index) => (
                <div key={index} className="event">
                    <div className="event-date">{event.date}</div>
                    <div className="event-title">{event.title}</div>
                </div>
            ))}
        </div>
    );
};

export default EventsCalendar;
