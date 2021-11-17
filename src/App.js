import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (id) => {
    setEvents((prevEvnets) => {
      return prevEvnets.filter((event) => {
        return event.id !== id;
      });
    });
  };

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };

  const subtitle = "For the latest events:";

  return (
    <div className="App">
      <Title title="Mario's kingdom Events" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide events</button>
        </div>
      )}

      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show events</button>
        </div>
      )}

      {showEvents && <EventList handleClick={handleClick} events={events} />}

      {showModal && (
        <Modal isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}

      {!showModal && (
        <button onClick={() => setShowModal(true)}>Add new event</button>
      )}
    </div>
  );
}

export default App;
