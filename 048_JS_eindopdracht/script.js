function addMoviesToDom() {
  //laden van alle films:
  movies.map((movie) => {
    const newMovie = document.getElementById("movies"); //get <ul> element
    const newLi = document.createElement("li"); // create nw <li>
    newMovie.appendChild(newLi).classList.add("tile"); //combine <li> in <ul>
    const newA = document.createElement("a");
    newA.href = "https://www.imdb.com/title/" + movie.imdbID;
    const newImg = document.createElement("IMG"); // create nw <img>
    newImg.setAttribute("src", movie.Poster); //add poster to <img>
    newImg.setAttribute("alt", movie.Title); //add alt-text to <img>
    newA.appendChild(newImg);
    newA.target = "_blank";
    newLi.appendChild(newA);
    deselectRadio();
  });
}

addMoviesToDom();

const searchTerm = "";
function deselectRadio() {
  //uncheck alle radiobuttons
  document.getElementById("reset").checked = false;
  document.getElementById("recent").checked = false;
  document.getElementById("x-men").checked = false;
  document.getElementById("princess").checked = false;
  document.getElementById("batman").checked = false;
  document.getElementById("avenger").checked = false;
}
function deleteSelection() {
  //verwijder huidige lijst films
  const ulList = document.getElementById("movies");
  ulList.innerHTML = "";
}

function addMoviesToDomTitle(searchTerm) {
  //selectie op basis van titelwoord
  movies.map((movie) => {
    if (movie.Title.includes(searchTerm)) {
      const newMovie = document.getElementById("movies"); //get <ul> element
      const newLi = document.createElement("li"); // create nw <li>
      newMovie.appendChild(newLi).classList.add("tile"); //combine <li> in <ul>
      const newA = document.createElement("a");
      newA.href = "https://www.imdb.com/title/" + movie.imdbID;
      const newImg = document.createElement("IMG"); // create nw <img>
      newImg.setAttribute("src", movie.Poster); //add poster to <img>
      newImg.setAttribute("alt", movie.Title); //add alt-text to <img>
      newA.appendChild(newImg);
      newA.target = "_blank";
      newLi.appendChild(newA);
      deselectRadio();
    }
    document.getElementById("select").innerHTML =
      "Er is gefilterd op: " + searchTerm;
  });
}

//reset, toon alle films + verwijder selectie-melding:
const reset = document.getElementById("reset");
reset.addEventListener("change", selectReset);

function selectReset() {
  deselectRadio();
  deleteSelection();
  document.getElementById("select").innerHTML = "";
  addMoviesToDom();
}

//select avenger films:
const avenger = document.getElementById("avenger");
avenger.addEventListener("change", selectAvenger);

function selectAvenger() {
  deselectRadio();
  deleteSelection();
  //voeg nieuwe lijst films toe
  const searchTerm = "Avenger";
  addMoviesToDomTitle(searchTerm);
}

//select x-men films:
const xmen = document.getElementById("x-men");
xmen.addEventListener("change", selectXMen);

function selectXMen() {
  deselectRadio();
  deleteSelection();
  //voeg nieuwe lijst films toe
  const searchTerm = "X-Men";
  addMoviesToDomTitle(searchTerm);
}

//select princess films:
const princess = document.getElementById("princess");
princess.addEventListener("change", selectPrincess);

function selectPrincess() {
  deselectRadio();
  deleteSelection();
  //voeg nieuwe lijst films toe
  const searchTerm = "Princess";
  addMoviesToDomTitle(searchTerm);
}

//select batman films:
const batman = document.getElementById("batman");
batman.addEventListener("change", selectBatman);

function selectBatman() {
  deselectRadio();
  deleteSelection();
  //voeg nieuwe lijst films toe
  const searchTerm = "Batman";
  addMoviesToDomTitle(searchTerm);
}

//select recente films:
const recent = document.getElementById("recent");
recent.addEventListener("change", selectRecent);

function selectRecent() {
  deselectRadio();
  deleteSelection();
  //voeg nieuwe lijst films toe
  addMoviesToDomRecent();
}
//voeg nieuwe films toe
function addMoviesToDomRecent() {
  movies.map((movie) => {
    if (movie.Year >= 2014) {
      const newMovie = document.getElementById("movies"); //get <ul> element
      const newLi = document.createElement("li"); // create nw <li>
      newMovie.appendChild(newLi).classList.add("tile"); //combine <li> in <ul>
      const newA = document.createElement("a");
      newA.href = "https://www.imdb.com/title/" + movie.imdbID;
      const newImg = document.createElement("IMG"); // create nw <img>
      newImg.setAttribute("src", movie.Poster); //add poster to <img>
      newImg.setAttribute("alt", movie.Title); //add alt-text to <img>
      newA.appendChild(newImg);
      newA.target = "_blank";
      newLi.appendChild(newA);
      deselectRadio();
    }
    document.getElementById("select").innerHTML =
      "Er is gefilterd op: recente films";
  });
}
