import React, { useEffect, useState } from "react";
import "./App.css";

const Card = ({ number, onRemove }) => (
  <div className="mainCard">
    <span>{number}</span>

    <div className="btn" onClick={onRemove}>
      X
    </div>
  </div>
);

const App = (props) => {

  const my_cards = "card";
  const data = JSON.parse(localStorage.getItem(my_cards));

  const [card, setCard] = useState([]);

  useEffect(() => {
    localStorage.setItem(my_cards , JSON.stringify(card));
  }, [card]);

  useEffect(() => {
      setCard(data);
  }, []);




  const cardRemove = (index) => {
    const cardCopy = [...card];
    cardCopy.splice(index, 1);
    setCard(cardCopy);
  };

  const handleSubmitCardAdd = (e) => {
    const cardCopy = [...card];
    cardCopy.push(Math.floor(Math.random() * 1000));
    setCard(cardCopy);
  };

  const sortOnClick = () => {
    const cardSort = [...card];
    cardSort.sort((a, b) => {
      return a - b;
    });
    setCard(cardSort);
  };

  return (
    <>
      <div className="header">
        <button onClick={handleSubmitCardAdd}>Add card</button>
        <button onClick={sortOnClick}>Sort card</button>
      </div>
      <div className="main">
        <div className="mainInfo">
          <div className="mainInfoDiv">
            {card.map((randomNumber, index) => (
              <Card
                key={index}
                number={randomNumber}
                onRemove={() => cardRemove(index)}
              />
            ))}
          </div>

          <div className="mainInfoText">
            Press the "add-card" button to add the new Card.Use the "sort-cards"
            button to sort the Cards by the increase.Press an <span> X </span>
            icon on the top right to delete them.
          </div>
        </div>
      </div>
      <div className="footer">
        <span>Footer</span>
      </div>
    </>
  );
};

export default App;
