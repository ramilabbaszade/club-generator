import React from "react";
import "./App.css";

const App = () => {
  const clubs = [
    {
      id: 1,
      country: "Germany",
      name: "Borussia Dortmund",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png",
    },
    {
      id: 2,
      country: "England",
      name: "Liverpool",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png",
    },
    {
      id: 3,
      country: "Spain",
      name: "Barcelona",
      logo:
        "https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/1010px-FC_Barcelona_%28crest%29.svg.png",
    },
    {
      id: 4,
      country: "Azerbaijan",
      name: "Qarabagh FC",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/Qaraba%C4%9F_FK_logo.svg/1200px-Qaraba%C4%9F_FK_logo.svg.png",
    },
    {
      id: 5,
      country: "Turkey",
      name: "Besiktas",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Besiktas_JK.svg/1200px-Besiktas_JK.svg.png",
    },
    {
      id: 6,
      country: "Italy",
      name: "Milan",
      logo:
        "https://assets.stickpng.com/images/584ab15330d6736bca3d6e24.png",
    },
    {
      id: 7,
      country: "Italy",
      name: "Juventus",
      logo:
        "https://purepng.com/public/uploads/large/purepng.com-juventus-logojuventuslogojuventus-turin-logonew-21529676316hzqzr.png",
    },
  ];
  const randomNum = Math.floor(Math.random() * clubs.length + 1);
  const loadedClub = clubs.filter((item) => item.id === randomNum);
  return (
    <div className="App">
      {loadedClub.length !== 1 ? (
        <h3>Loading...</h3>
      ) : (
        loadedClub.map((item) => {
          return (
            <div key={item.id}>
              <h2> {item.name}</h2>
              <p> {item.country} </p>
              <img className="logo" src={item.logo} alt={item.name} />
            </div>
          );
        })
      )}
      <div className="btn_div">
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Find Club
        </button>
      </div>
    </div>
  );
};

export default App;
