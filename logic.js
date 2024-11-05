// data fetching logic
const users = [
  {
    imageUrl: "assets/images/Panda.png",
    name: "John Doe",
    // email: "johndoe@example.com",
    age: "28 years old",
    info: "A passionate wildlife enthusiast and photographer, often found exploring nature.",
    // ImageUrl: "/Panda.png"
  },
  {
    imageUrl: "assets/images/BrownHairedMan.png",
    name: "Jane Smith",
    email: "janesmith@example.com",
    // age: 25,
    info: "An avid reader and aspiring novelist, Jane loves spending her weekends at local cafes.",
  },
  {
    // name: "Jane Smith",
    email: "mikebrown@example.com",
    age: "45 years old",
    info: "Tech-savvy and innovative, Sarah is known for her cutting-edge software solutions.",
  },
  {
    imageUrl: "assets/images/BlackHairedMan.png",
    name: "Sarah Johnson",
    email: "sarahjohnson@example.com",
    age: "30 years old",
    info: "A fitness enthusiast, Alex enjoys hiking and participating in marathons around the country",
  },
  {
    name: "Alex Martinez",
    // email: "janesmith@example.com",
    age: "27 years old",
    // info: "More info",
  },
];

const userTemplate = document.getElementById("user-template").content;
const usersContainer = document.querySelector(".users-container");

users.forEach((user, index) => {
  const userElement = userTemplate.cloneNode(true);
  //   ======================

  // =========================
  userElement.querySelector(".user-image").src = user.imageUrl; // Replace with actual image URL
  userElement.querySelector(".user-name").textContent = user.name;
  userElement.querySelector(".user-email").textContent = user.email;
  userElement.querySelector(".user-age").textContent = user.age;
  userElement.querySelector(".user-info").textContent = user.info;

  // if (index === 0) {
  //   userElement.querySelector(".user-card").classList.add("first-card");
  // } else if (index % 2 === 1) {
  //   userElement.querySelector(".user-card").classList.add("rotate-right");
  // }

  if (index === 0) {
    userElement.querySelector(".user-card").classList.add("first-card");
  } else if (index % 2 === 1) {
    userElement.querySelector(".user-card").classList.add("rotate-left");
  } else {
    userElement.querySelector(".user-card").classList.add("rotate-right");
  }
  // ===============
    const closeButton = userElement.querySelector(".btn-close");
    // closeButton.addEventListener("click", () => {
    //   closeButton.closest(".user-card").style.display = "none";
    // });
    closeButton.addEventListener('click', () => {
        closeButton.closest('.user-card').classList.add('hidden');
      });

 
  // ==============
  usersContainer.appendChild(userElement);
});
