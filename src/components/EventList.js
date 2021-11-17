import React from "react";
import styles from "./EventList.module.css";
const EventList = ({ handleClick, events }) => {
  return (
    <div>
      {events.map((event, index) => (
        <div key={event.id} className={styles.card}>
          <h2>
            {index + 1}: {event.title}
          </h2>
          <p>
            {event.location} - {event.date}
          </p>
          <button onClick={() => handleClick(event.id)}>Delete me</button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
