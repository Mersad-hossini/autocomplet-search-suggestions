let suggestions = [
  "Channel",
  "CodingLab",
  "CodingNepal",
  "YouTube",
  "YouTuber",
  "YouTube Channel",
  "Blogger",
  "Bollywood",
  "Vlogger",
  "Vechiles",
  "Facebook",
  "Freelancer",
  "Facebook Page",
  "Designer",
  "Developer",
  "Web Designer",
  "Web Developer",
  "Login Form in HTML & CSS",
  "How to learn HTML & CSS",
  "How to learn JavaScript",
  "How to become Freelancer",
  "How to become Web Designer",
  "How to start Gaming Channel",
  "How to start YouTube Channel",
  "What does HTML stands for?",
  "What does CSS stands for?",
];

let searchInputContainer = document.querySelector(".search-input");
let searchInput = document.getElementById("search");
let autocomBox = document.querySelector(".autocom-box");

function filterSuggestions() {
  let searchInputValue = searchInput.value;
  autocomBox.innerHTML = "";

  if (searchInputValue) {
    searchInputContainer.classList.add("active");
  } else {
    searchInputContainer.classList.remove("active");
  }

  let mainSuggestion = suggestions.filter((item) => {
    return item.toLowerCase().startsWith(searchInputValue.toLowerCase());
    // return item.toLowerCase().includes(searchInputValue.toLowerCase());
  });

  if (mainSuggestion.length) {
    mainSuggestion.map((mainItems) => {
      autocomBox.insertAdjacentHTML(
        "beforeend",
        `<li onclick="liClick('${mainItems}')">${mainItems}</li>`
      );
    });
  } else {
    autocomBox.insertAdjacentHTML(
      "beforeend",
      `<li onclick="liClick('${searchInput.value}')">${searchInput.value}</li>`
    );
  }
}

function liClick(item) {
  searchInput.value = item;
  searchInputContainer.classList.remove("active");
}

searchInput.addEventListener("keyup", filterSuggestions);