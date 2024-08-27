const questionsContent = document.querySelectorAll('.question-content');
const buttons = document.querySelectorAll('[plus]')
console.log(buttons)

const checkIsButtonActivate = (icon) => {

    for (const button of buttons) {
        if (button !== icon && !button.hasAttribute('plus')) {

            button.parentNode.parentNode.parentNode.children[1].classList.toggle('hidden')
            button.src = 'assets/images/icon-plus.svg';
            button.toggleAttribute('plus')
        }

    }
}

const handleClick = (e, answer) => {
    const icon = e.target;

    checkIsButtonActivate(icon);

    if (icon.hasAttribute('plus')) {
        icon.toggleAttribute('plus')
        icon.src = 'assets/images/icon-minus.svg';
        answer.classList.toggle('hidden')
    }
    else {
        icon.toggleAttribute('plus')
        icon.src = 'assets/images/icon-plus.svg';
        answer.classList.toggle('hidden')

    }
}

for (const questionContent of questionsContent) {
    const button = questionContent.querySelector('button');
    const answer = questionContent.children[1];


    button.addEventListener('click', (e) => handleClick(e, answer));
}