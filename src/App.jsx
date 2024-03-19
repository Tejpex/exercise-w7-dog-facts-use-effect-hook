// Import required  hooks
import { useState, useEffect } from "react";
import { DogFact } from "./components/DogFact";

export const App = () => {
  const [dogfacts, setDogfacts] = useState([]);

  useEffect(() => {
    fetch("https://dogapi.dog/api/v2/facts")
      .then((res) => res.json())
      .then((json) => {
        setDogfacts(json.data[0].attributes);
        console.log(json);
      });
  }, []);

  useEffect(() => {
    console.log("Dog", dogfacts);
  },[dogfacts])

  // Hint: Initialize state for storing the dog fact
  // Hint: Define the API endpoint https://dogapi.dog/api/v2/facts
  // Hint: Create a function to fetch the dog fact
  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts

  return (
    <div className="App">
      <DogFact dogfact={dogfacts}/>
    </div>
  );
};
