const arrowBtn = [...document.querySelectorAll(".title > img")];

const answers = [
  {
    paragraph:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    paragraph:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    paragraph:
      " Click 'Forgot password' from the login page or 'Change password' from your profile page. A reset link will be emailed to you.",
  },
  {
    paragraph:
      "Yes! Send us a message and we'll process your request no questions asked.",
  },
  {
    paragraph:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

for (let i = 0; i < arrowBtn.length; i += 1) {
  arrowBtn[i].addEventListener("click", () => {
    const answer = document.getElementById(`p-${i + 1}`);
    const question = document.getElementById(`question-${i + 1}`);
    question.style.color = "hsl(238, 29%, 16%)";
    answer.innerText = `${answers[i].paragraph}`;
    answer.classList.toggle("hide");
  });
}
