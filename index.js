let bookNavToggle = false;
let artNavToggle = false;

let bookCategories = [
  {
    title: "The Last Reaper",
    img: "./imgs/navDisplay/reaper_books_display_200x200.jpg",
    quote: ""
  },
  {
    title: "Renegade Star",
    img: "./imgs/navDisplay/renegade_books_display_200x200.jpg",
    quote: ""
  },
  {
    title: "Renegade Origins",
    img: "./imgs/navDisplay/renegade_origins_books_display_200x200.jpg",
    quote: ""
  },
  {
    title: "Orion Colony",
    img: "./imgs/navDisplay/orion_books_display_200x200.jpg",
    quote: ""
  },
  {
    title: "The Variant Saga",
    img: "./imgs/navDisplay/variant_books_display_200x200.jpg",
    quote: ""
  },
  {
    title: "The Fifth Column",
    img: "./imgs/navDisplay/fifth_column_books_display_200x200.jpg",
    quote: ""
  },
  {
    title: "Stand Alone Works",
    img: "./imgs/navDisplay/stand_alone_books_display_200x200.jpg",
    quote: ""
  }
];

let charArt = [
  {
    img: "./imgs/charArt/char_art_1_w200.jpg",
    caption: ""
  },
  {
    img: "./imgs/charArt/char_art_2_w200.jpg",
    caption: ""
  },
  {
    img: "./imgs/charArt/char_art_3_w200.jpg",
    caption: ""
  },
  {
    img: "./imgs/charArt/char_art_4_w200.jpg",
    caption: ""
  },
  {
    img: "./imgs/charArt/char_art_5_w200.jpg",
    caption: ""
  },
  {
    img: "./imgs/charArt/char_art_6_w200.jpg",
    caption: ""
  },
  {
    img: "./imgs/charArt/char_art_7_w200.jpg",
    caption: ""
  }
];

/* DISPLAY BOOK CATEGORIES ON NAV CLICK */

function displayBooksNav() {
  if (bookNavToggle == false) {
    clearData(document.querySelector("main"));
    for (let book in bookCategories) {
      displayNav(bookCategories[book].title, bookCategories[book].img);
    }
    bookNavToggle = true;
    document.querySelector("main").style.opacity = 1;
    document.querySelector("#nav-books").style.color = "black";
  } else {
    document.querySelector("main").style.opacity = 0;
    document.querySelector("#nav-books").style.color = "white";
    setTimeout(() => clearData(document.querySelector("main")), 900);
    bookNavToggle = false;
  }
}

/* DISPLAY ART CATEGORIES ON NAV CLICK */

function displayArtNav() {
  if (artNavToggle == false) {
    clearData(document.querySelector("main"));
    for (let art in charArt) {
      displayNav(charArt[art].caption, charArt[art].img);
    }
    artNavToggle = true;
    document.querySelector("main").style.opacity = 1;
    document.querySelector("#nav-art").style.color = "black";
  } else {
    document.querySelector("main").style.opacity = 0;
    document.querySelector("#nav-art").style.color = "white";
    setTimeout(() => clearData(document.querySelector("main")), 900);
    artNavToggle = false;
  }
}

/* Global Nav Display Element Constructor */

function displayNav(caption, imgURI) {
  let container = document.createElement("div");
  let h2 = document.createElement("h2");
  let img = document.createElement("img");

  h2.innerText = caption;
  img.setAttribute("src", imgURI);
  img.setAttribute("alt", caption);

  container.appendChild(h2);
  container.appendChild(img);

  document.querySelector("main").appendChild(container);
}

/* GLOBAL CLEAR FUNCTION FOR NAVIGATION DISPLAY */

function clearData(element) {
  if (element.hasChildNodes) {
    if (element.hasChildNodes) {
      while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
      }
    }
  }
  
  bookNavToggle = false;
  artNavToggle = false;

  document.querySelector("#nav-books").style.color = "white";
  document.querySelector("#nav-art").style.color = "white";
  document.querySelector("#nav-merch").style.color = "white";
  document.querySelector("#nav-social").style.color = "white";
  document.querySelector("#nav-collaborators").style.color = "white";
  document.querySelector("#nav-contact").style.color = "white";
}
