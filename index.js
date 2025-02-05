const template = document.getElementById('templates');
const lil_guy = document.getElementById('lil-guy');
const huge_stinker = document.getElementById('huge-stinker');
const enigma = document.getElementById('enigma');

const person_name = document.getElementById('person-name');
const giver_name = document.getElementById('giver-name');
const job = document.getElementById('job');

const person_name_elements = document.getElementsByClassName('name');
const giver_name_elements = document.getElementsByClassName('giver-name');
const job_elements = document.getElementsByClassName('position');
const dates = document.getElementsByClassName('date');

const print_button = document.getElementById('print');

// Initialize the date with the date
let date = new Date().toLocaleDateString('ig-ng');
for (i=0;i<dates.length;i++) {
    dates[i].innerHTML = date;
}

template.addEventListener('change', () => {
    if (template.value === 'lil-guy') {
        lil_guy.classList.remove('hidden');

        huge_stinker.classList.add('hidden');
        enigma.classList.add('hidden');
    } else if (template.value === 'huge-stinker') {
        huge_stinker.classList.remove('hidden');

        lil_guy.classList.add('hidden');
        enigma.classList.add('hidden');
    } else if (template.value === 'enigma') {
        enigma.classList.remove('hidden');

        lil_guy.classList.add('hidden');
        huge_stinker.classList.add('hidden');
    }
});

person_name.addEventListener('change', () => {
    for (i=0;i<person_name_elements.length;i++) {
        person_name_elements[i].innerHTML = person_name.value;
    }
});

giver_name.addEventListener('change', () => {
    for (i=0;i<giver_name_elements.length;i++) {
        giver_name_elements[i].innerHTML = giver_name.value;
    }
});

job.addEventListener('change', () => {
    for (i=0;i<job_elements.length;i++) {
        job_elements[i].innerHTML = job.value;
    }
});

print_button.addEventListener('click', () => {
    date = new Date().toLocaleDateString('ig-ng');
    for (i=0;i<dates.length;i++) {
        dates[i].innerHTML = date;
    }
    print();
});