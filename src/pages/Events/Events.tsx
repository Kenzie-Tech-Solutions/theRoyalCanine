import { NavBar } from "../../Components/NavBar/NavBar";
import { eventDetails } from "../../eventDetails";

export const Events = () => {
  return (
    <div>
      <NavBar />
      <h1>Events</h1>
      <div>
        {eventDetails.map((event) => {
          return (
            <div key={event.date}>
              <p>{event.date}</p>
              <h3>{event.title}</h3>
              <p>{event.details}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
