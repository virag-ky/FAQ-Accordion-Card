const arrowBtn = [...document.querySelectorAll('.title > img')];

for (let i = 0; i < arrowBtn.length; i += 1) {
  arrowBtn[i].addEventListener('click', () => {
    arrowBtn[i].classList.toggle('rotate');
    const answer = document.getElementById(`p-${i + 1}`);
    answer.classList.toggle('show');
    const question = document.getElementById(`question-${i + 1}`);
    question.classList.toggle('bold');
  });
}
