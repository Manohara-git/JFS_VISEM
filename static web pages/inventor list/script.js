// ===== Data for Programming Language Inventors =====
const inventors = [
  {
    name: "James Gosling",
    language: "Java",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/James_Gosling_2008.jpg",
    bio: "James Gosling, a Canadian computer scientist, is known as the father of the Java programming language, created in 1995 at Sun Microsystems."
  },
  {
    name: "Guido van Rossum",
    language: "Python",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/66/Guido_van_Rossum_OSCON_2006.jpg",
    bio: "Guido van Rossum is a Dutch programmer best known as the creator of Python in 1991."
  },
  {
    name: "Dennis Ritchie",
    language: "C",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Dennis_Ritchie_2011.jpg",
    bio: "Dennis Ritchie was an American computer scientist who created the C programming language."
  },
  {
    name: "Bjarne Stroustrup",
    language: "C++",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/BjarneStroustrup.jpg",
    bio: "Bjarne Stroustrup created C++ as an extension of the C language."
  },
  {
    name: "Brendan Eich",
    language: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg",
    bio: "Brendan Eich created JavaScript in 10 days while working at Netscape."
  },
  {
    name: "Rasmus Lerdorf",
    language: "PHP",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Rasmus_Lerdorf.jpg",
    bio: "Rasmus Lerdorf created PHP in 1994."
  },
  {
    name: "Yukihiro Matsumoto",
    language: "Ruby",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/Yukihiro_Matsumoto.JPG",
    bio: "Yukihiro 'Matz' Matsumoto created Ruby in 1995."
  },
  {
    name: "John McCarthy",
    language: "LISP",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/John_McCarthy_Stanford.jpg",
    bio: "John McCarthy invented Lisp in 1958."
  },
  {
    name: "Grace Hopper",
    language: "COBOL",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/37/Grace_Hopper_%281986%29.jpg",
    bio: "Grace Hopper designed COBOL and pioneered machine-independent languages."
  },
  {
    name: "Ken Thompson",
    language: "Go",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Ken_Thompson_%28sitting%29.jpg",
    bio: "Ken Thompson co-developed Unix and the Go programming language."
  }
];

// Load all inventor cards
const grid = document.getElementById("grid");

function loadInventors(list) {
  grid.innerHTML = "";
  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>Invented: ${item.language}</p>
    `;
    card.onclick = () => openModal(item);
    grid.appendChild(card);
  });
}

loadInventors(inventors);

// Search
const search = document.getElementById("search");
const reset = document.getElementById("reset");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  const filtered = inventors.filter(i =>
    i.name.toLowerCase().includes(value) ||
    i.language.toLowerCase().includes(value)
  );
  loadInventors(filtered);
});

reset.onclick = () => {
  search.value = "";
  loadInventors(inventors);
};

// Dropdown Filter
const dropdown = document.getElementById("inventorDropdown");

dropdown.addEventListener("change", () => {
  const selected = dropdown.value;
  if (selected === "") {
    loadInventors(inventors);
  } else {
    const filtered = inventors.filter(i => i.name === selected);
    loadInventors(filtered);
  }
});

// Modal
const modal = document.getElementById("modal");
const modalName = document.getElementById("modalName");
const modalLangs = document.getElementById("modalLangs");
const modalBio = document.getElementById("modalBio");
const modalAvatar = document.getElementById("modalAvatar");
const modalClose = document.getElementById("modalClose");

function openModal(item) {
  modal.style.display = "flex";
  modalName.textContent = item.name;
  modalLangs.textContent = `Invented: ${item.language}`;
  modalBio.textContent = item.bio;
  modalAvatar.innerHTML = `<img src="${item.img}">`;
}

modalClose.onclick = () => {
  modal.style.display = "none";
};
