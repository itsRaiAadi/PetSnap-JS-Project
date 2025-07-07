let mainContainer = document.getElementById("container");
let pets = document.getElementById("pets-img");
let icon = document.getElementById("heart-icon");
let button = document.getElementById("btn");

let petsArray = [
  "https://cdn.pixabay.com/photo/2023/03/11/17/40/ai-generated-7844933_960_720.jpg",
  "https://cdn.pixabay.com/photo/2023/07/31/09/56/cat-8160676_960_720.png",
  "https://cdn.pixabay.com/photo/2024/05/06/09/15/lion-8742894_960_720.jpg",
  "https://cdn.pixabay.com/photo/2024/05/06/09/15/lion-8742894_960_720.jpg",
  "https://cdn.pixabay.com/photo/2023/03/11/22/12/ai-generated-7845410_960_720.jpg",
  "https://cdn.pixabay.com/photo/2024/07/21/10/10/ai-generated-8909981_960_720.jpg",
  "https://cdn.pixabay.com/photo/2024/04/01/10/31/ai-generated-8668581_960_720.png",
  "https://cdn.pixabay.com/photo/2019/12/17/07/20/chimpanzee-4700974_960_720.png",
  "https://cdn.pixabay.com/photo/2023/05/17/17/04/ai-generated-8000642_960_720.jpg",
  "https://cdn.pixabay.com/photo/2023/11/02/00/19/ai-generated-8359510_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/02/21/13/20/ai-generated-8587724_960_720.png",
];

let setFunction = () => {
  let randomImage = Math.floor(Math.random() * petsArray.length);
  pets.setAttribute("src", petsArray[randomImage]);
};

window.addEventListener("load", () => {
  setFunction();
  icon.remove();
});

let isClicked = false;
pets.addEventListener("dblclick", () => {
  if (isClicked == false) {
    mainContainer.appendChild(icon);
    button.classList.replace("w-full", "w-3xs");
    icon.classList.add("animate-bounce");
    setTimeout(() => {
      icon.classList.remove("animate-bounce");
    }, 2500);

    isClicked = true;
  } else {
    icon.remove();
    button.classList.replace("w-3xs", "w-full");
    isClicked = false;
  }
});

button.addEventListener("click", () => {
  setFunction();
  icon.remove();
  button.classList.replace("w-3xs", "w-full");
  icon.classList.add("animate-bounce");
});
