import React, { useState } from "react";
import Posts from "./posts";
import { useLocation, Navigate } from "react-router-dom";

function Home() {
  const [text, setText] = useState(""); // State to store the post text
  const [textList, setTextList] = useState([]);
  const location = useLocation();
  const isLoggedIn = true;

  // // Redirect to sign-in page if not logged in
  // if (!isLoggedIn) {
  //   return <Navigate to="/signin" />;
  // }

  const handleCreateText = async (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      return;
    }
    const newText = {
      id: Date.now(),
      text: text,
    };
    setTextList((prevText) => [...prevText, newText]);
    setText("");
  };

  return (
    <div id="homepage">
      <div id="content">
        <div id="profilepic">
          <img
            src="http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Best-Quality-Profile-Images-Pic-Download-2023.jpg"
            alt="Profile Pic"
          ></img>
        </div>

        <div className="textDisplay">
          {textList.map((text) => (
            <div key={text.id} className="texts">
              <p>{text.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="post-feed">
        <Posts isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
}

export default Home;
