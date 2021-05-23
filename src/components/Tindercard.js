import TinderCard from "react-tinder-card";
import React from "react";
import { useState, useEffect } from "react";
import "./Tindercard.css";
import { db } from "../firebase";
export default function Tindercard() {
  const [person, setPerson] = useState([]);

  useEffect(() => {


    const unsubscribe = db.collection("person").onSnapshot((snapshot) => {
      setPerson(snapshot.docs.map((doc) => doc.data()));
    });

     return () => {
         unsubscribe()
     }
  }, []);

  return (
    <div className="card__maincontent">
      <div className="cards__allcontains">
        {person.map((people) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${people.url})` }}
            >
              <h2>{people.name},</h2>
              <h3>{people.place}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
