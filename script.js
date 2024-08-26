const questionsContent = document.querySelectorAll('.question-content');

const handleClick = (e, answer) => {
    const icon = e.target;
    if (icon.hasAttribute('plus')) {
        icon.toggleAttribute('plus')
        icon.src = '/assets/images/icon-minus.svg';
        answer.classList.toggle('hidden')
    }
    else {
        icon.toggleAttribute('plus')
        icon.src = '/assets/images/icon-plus.svg';
        answer.classList.toggle('hidden')

    }
}

for (const questionContent of questionsContent) {
    const button = questionContent.querySelector('button');
    const answer = questionContent.children[1];


    button.addEventListener('click', (e) => handleClick(e, answer));
}