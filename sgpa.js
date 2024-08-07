const grades = {
    'A': 10,
    'A-': 9,
    'B+': 8,
    'B': 7,
    'B-': 6,
    'C+': 5,
    'C': 4,
    'C-': 3,
    'D+': 2,
    'D': 1,
    'F': 0
};

let subjects = [];

function addSubject() {
    const name = document.getElementById('subjectName').value;
    const credits = parseInt(document.getElementById('subjectCredits').value);
    const grade = document.getElementById('subjectGrade').value.toUpperCase();

    if (!grades.hasOwnProperty(grade)) {
        alert('Invalid grade. Please enter a valid grade.');
        return;
    }

    const subject = { name, credits, grade };
    subjects.push(subject);

    updateTable();
    clearForm();
}

function updateTable() {
    const tbody = document.querySelector('#subjectsTable tbody');
    tbody.innerHTML = '';

    subjects.forEach((subject, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${subject.name}</td>
            <td>${subject.credits}</td>
            <td>${subject.grade}</td>
        `;
        tbody.appendChild(row);
    });
}

function clearForm() {
    document.getElementById('subjectForm').reset();
}

function calculateSGPA() {
    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach(subject => {
        totalCredits += subject.credits;
        totalPoints += subject.credits * grades[subject.grade];
    });

    const sgpa = (totalPoints / totalCredits).toFixed(2);
    document.getElementById('sgpa').textContent = sgpa;
}
