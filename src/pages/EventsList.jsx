 
//  import React, { useEffect, useState } from "react";
// import { collection, getDocs, addDoc } from "firebase/firestore";
// import { db  } from "../firebase";
 
//    import { Link } from "react-router-dom";
 
//  const EventsList = () => {
//   const [title,setTitle] = useState('')
//   const [date,setDate] = useState('')
//   const [description,setDescription] = useState('')
//   const [location,setLocation] = useState('')
 
//     const [users, setUsers] = useState([]);

//    const usersCollectionRef = collection(db, "events");

//      const createUser = async () => {
//     await addDoc(usersCollectionRef,  { 
//       title: title,
//       date: date,
//       description:description,
//       location:location
//     });
//   };

//     useEffect(() => {
//     const getUsers = async () => {
//       const data = await getDocs(usersCollectionRef);
//       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };

//     getUsers();
//   }, []); 
//   return (
//      <div>
        
//         <div className="container"  >
//            <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
//            <input type="text"   onChange={(e)=>setDate(e.target.value)}/>
//            <input type="text"  onChange={(e)=>setDescription(e.target.value)}/>
//            <input type="text" onChange={(e)=>setLocation(e.target.value)}/>
 
//             <button onClick={createEvent}>Add Event</button>
//         </div>
   

//    <div className="card-container">
//     <button onClick={createUser}> Create User</button>
//       {users.map((user) => {
//         return (
//           <div>
//             {" "}
//             <h2> {user.title}</h2>
//             <h1> {user.description}</h1>
             
//            </div>
//         );
//       })}
      

//    </div>

//      </div>
//    )
//  }
 
  import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import "../styles/EventsList.css";

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [user, setUser] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    description: "",
    location: "",
    
  });

  // check if admin is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // fetch events
  const fetchEvents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Events"));
      const eventsArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(eventsArray);
    } catch (error) {
      console.error("Error fetching events:", error.message);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // add new event
  const handleAddEvent = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "Events"), newEvent);
      setNewEvent({
        title: "",
        date: "",
        description: "",
        location: "",
      
      });
      fetchEvents(); // refresh list
    } catch (error) {
      console.error("Error adding event:", error.message);
    }
  };

  return (
    <div className="events-page">
      <h2 className="heading">Upcoming Events</h2>
      <p className="sub-heading">Discover and join exciting events near you!</p>

      {/* Admin Form to Add Event */}
      {/* {user && (
        
        <form className="event-form" onSubmit={handleAddEvent}>
          <input
            type="text"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
            required
          />
          <input
            type="date"
            value={newEvent.date}
            onChange={(e) =>
              setNewEvent({ ...newEvent, date: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={newEvent.location}
            onChange={(e) =>
              setNewEvent({ ...newEvent, location: e.target.value })
            }
            required
          />
           
          <textarea
            placeholder="Description"
            value={newEvent.description}
            onChange={(e) =>
              setNewEvent({ ...newEvent, description: e.target.value })
            }
            required
          />
          <button type="submit">Add Event</button>
        </form>
      )} */}
        {user && (
        <div className="event-form-container">
          <form className="event-form" onSubmit={handleAddEvent}>
            <input
              type="text"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              required
            />
            <input
              type="date"
              value={newEvent.date}
              onChange={(e) =>
                setNewEvent({ ...newEvent, date: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Location"
              value={newEvent.location}
              onChange={(e) =>
                setNewEvent({ ...newEvent, location: e.target.value })
              }
              required
            />
            
            <textarea
              placeholder="Description"
              value={newEvent.description}
              onChange={(e) =>
                setNewEvent({ ...newEvent, description: e.target.value })
              }
              required
            />
            <button type="submit">Add Event</button>
          </form>

          {/* Image Preview / Placeholder */}
          <div className="event-form-image">
            <img
               src="./events.jpeg"
              alt="Event Preview"
            />
          </div>
        </div>
      )}

      {/* Event Cards */}
      <div className="events-grid">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
           
            <div className="event-info">
              <h3 className="title-color">{event.title}</h3>
              <p className="date">{event.date}</p>
              <p className="location">{event.location}</p>
              <p>{event.description}</p>
              <Link to={`/register/${event.id}`}>
                <button className="register-btn">Register</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
