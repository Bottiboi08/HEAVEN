const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [eyyBtn, leeBtn] = [".eyy-btn", ".lee-btn"].map(qs);

const handleeyyClick = () => {
  question.innerHTML = "EEEEEEEEEE ! HAYA HAYA !";
  gif.src = "ans.gif";

  // Remove the 'mouseover' event listener from leeBtn
  noBtn.removeEventListener("mouseover", handleleeMouseOver);

  // Remove the leeBtn from the DOM
  leeBtn.remove();

  // Define predefined romantic date ideas
  const dateIdeas = [
    "AAAAA333333 EEEEEEEEEE",

    // Add more date ideas as needed
  ];

  // Create and style a new button for Let's Go!
  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = " AAAAA3333 EEEEEEE!";
  letsGoBtn.classList.add("EEEEEEE-btn"); // You can add a class for styling if needed
  letsGoBtn.style.position = "absolute";

  // Adjust the left position based on screen width
  if (window.innerWidth <= 800) {
    letsGoBtn.style.left = "95%";
  } else {
    letsGoBtn.style.left = "63%";
  }

  letsGoBtn.style.transform = "translate(-50%, -50%)";
  letsGoBtn.style.width = "200px"; // Adjust the width as needed

  // Add a click event listener to prompt the user with random romantic date ideas
  letsGoBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * dateIdeas.length);
    const selectedDateIdea = dateIdeas[randomIndex];

    alert(`My reaction to this : ${selectedDateIdea}`);
  });

  // Replace yesBtn with the new letsGoBtn
  eyyBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  leeBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  leeBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

eyyBtn.addEventListener("click", handleeyyClick);
leeBtn.addEventListener("mouseover", handleleeMouseOver);
