const headings = document.querySelectorAll('h1');
const options = document.querySelectorAll('button');

const arr = ['Rock 🪨', 'Paper 📃', 'Pencil ✏️', 'Scissor ✂️'];

options.forEach((option) => {

    option.addEventListener('click', (event) => {

        const num = Math.floor(Math.random() * 4);

        headings[0].firstElementChild.textContent = arr[num];

        headings[1].firstElementChild.textContent = event.target.textContent;

        if (arr[num] === 'Rock 🪨' && event.target.textContent === 'Paper 📃') {

            headings[2].firstElementChild.textContent = 'You win!';

        }
        else if (arr[num] === 'Rock 🪨' && event.target.textContent === 'Pencil ✏️') {

            headings[2].firstElementChild.textContent = 'You lost!';

        }
        else if (arr[num] === 'Rock 🪨' && event.target.textContent === 'Scissor ✂️') {

            headings[2].firstElementChild.textContent = 'You lost!';

        }
        else if (arr[num] === 'Paper 📃' && event.target.textContent === 'Rock 🪨') {

            headings[2].firstElementChild.textContent = 'You lost!';

        }
        else if (arr[num] === 'Paper 📃' && event.target.textContent === 'Pencil ✏️') {

            headings[2].firstElementChild.textContent = 'You win!';

        }
        else if (arr[num] === 'Paper 📃' && event.target.textContent === 'Scissor ✂️') {

            headings[2].firstElementChild.textContent = 'You win!';

        }
        else if (arr[num] === 'Pencil ✏️' && event.target.textContent === 'Rock 🪨') {

            headings[2].firstElementChild.textContent = 'You win!';

        }
        else if (arr[num] === 'Pencil ✏️' && event.target.textContent === 'Paper 📃') {

            headings[2].firstElementChild.textContent = 'You lost!';

        }
        else if (arr[num] === 'Pencil ✏️' && event.target.textContent === 'Scissor ✂️') {

            headings[2].firstElementChild.textContent = 'You win!';

        }
        else if (arr[num] === 'Scissor ✂️' && event.target.textContent === 'Rock 🪨') {

            headings[2].firstElementChild.textContent = 'You win!';

        }
        else if (arr[num] === 'Scissor ✂️' && event.target.textContent === 'Paper 📃') {

            headings[2].firstElementChild.textContent = 'You lost!';

        }
        else if (arr[num] === 'Scissor ✂️' && event.target.textContent === 'Pencil ✏️') {

            headings[2].firstElementChild.textContent = 'You lost!';

        }
        else {

            headings[2].firstElementChild.textContent = 'It\'s a draw!';

        }

    })

})