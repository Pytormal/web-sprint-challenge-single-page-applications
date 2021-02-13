import React from 'react';
import { useHistory } from 'react-router-dom';
import './home.css'

function Home(props) {
  console.log("props from Home:", props);

  const history = useHistory();
  console.log("history: ", history);

  const navToForm = (e) => {
    console.log("moving to form");
    setTimeout(() => {
      history.pushState("/pizza");
      console.log("sent to form");
    }, 2000);
  };

  return (
    <div className="home-page">
      <img
        className="home-pizza"
        src="https://images.pexels.com/photos/2917598/pexels-photo-2917598.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <button className="md-button form-button" onClick={navToForm}>
       Order Here
      </button>
    </div>
  );
}

export default Home