let bookNavToggle = false;
let artNavToggle = false;
let socialNavToggle = false;

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

/* Social Network Nav Display on Click */

function displaySocialNav() {
  if (socialNavToggle == false) {
    clearData(document.querySelector("main"));
    makeSocialIcons();
    socialNavToggle = true;
    document.querySelector("main").style.opacity = 1;
    document.querySelector("#nav-social").style.color = "black";
  } else {
    document.querySelector("main").style.opacity = 0;
    document.querySelector("#nav-social").style.color = "white";
    setTimeout(() => clearData(document.querySelector("main")), 900);
    socialNavToggle = false;
  }

  function makeSocialIcons() {
    let socialDiv = document.createElement("div");
    socialDiv.setAttribute("id", "renegade-reader-div");

    let h2 = document.createElement("h2");
    h2.innerText =
      "Join the community of Renegade Readers on facebook for discussions, updates, and sneak-peaks!";

    let h22 = document.createElement("h2");
    h22.innerText = "You can also visit JN on twitter and instagram.";

    let iconDiv = document.createElement("div");
    iconDiv.setAttribute("id", "icon-div");
    let facebookLink = document.createElement("a");
    let twitterLink = document.createElement("a");
    let instagramLink = document.createElement("a");
    facebookLink.setAttribute(
      "href",
      "https://www.facebook.com/groups/jnchaneyreaders/"
    );
    facebookLink.setAttribute("target", "_blank");
    twitterLink.setAttribute("href", "https://twitter.com/JNChaney");
    twitterLink.setAttribute("target", "_blank");
    instagramLink.setAttribute("href", "https://instagram.com/jn_chaney/");
    instagramLink.setAttribute("target", "_blank");

    let facebookIcon = document.createElement("i");
    let twitterIcon = document.createElement("i");
    let instagramIcon = document.createElement("i");
    facebookIcon.classList = "fab fa-facebook";
    twitterIcon.classList = "fab fa-twitter";
    instagramIcon.classList = "fab fa-instagram";

    facebookLink.appendChild(facebookIcon);
    twitterLink.appendChild(twitterIcon);
    instagramLink.appendChild(instagramIcon);

    iconDiv.appendChild(facebookLink);
    iconDiv.appendChild(twitterLink);
    iconDiv.appendChild(instagramLink);

    socialDiv.appendChild(h2);
    socialDiv.appendChild(h22);
    socialDiv.appendChild(iconDiv);

    document.querySelector("main").appendChild(socialDiv);
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
  socialNavToggle = false;

  document.querySelector("#nav-books").style.color = "white";
  document.querySelector("#nav-art").style.color = "white";
  document.querySelector("#nav-merch").style.color = "white";
  document.querySelector("#nav-social").style.color = "white";
  document.querySelector("#nav-collaborators").style.color = "white";
  document.querySelector("#nav-contact").style.color = "white";
}
