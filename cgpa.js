document.getElementById('semesters').addEventListener('input', function() {
    const semestersInput = document.getElementById('semestersInput');
    semestersInput.innerHTML = '';
    const numSemesters = this.value;
    for (let i = 1; i <= numSemesters; i++) {
        const div = document.createElement('div');
        div.className = 'input-group';
        div.innerHTML = `
            <label for="sgpa${i}">SGPA for Semester ${i}:</label>
            <input type="number" id="sgpa${i}" name="sgpa${i}" min="0" max="10" step="0.01" required>
        `;
        semestersInput.appendChild(div);
    }
});

function calculateCGPA() {
    const numSemesters = document.getElementById('semesters').value;
    let totalSGPA = 0;
    for (let i = 1; i <= numSemesters; i++) {
        const sgpa = parseFloat(document.getElementById(`sgpa${i}`).value);
        if (isNaN(sgpa) || sgpa < 0 || sgpa > 10) {
            alert(`Please enter a valid SGPA for semester ${i}`);
            return;
        }
        totalSGPA += sgpa;
    }
    const cgpa = totalSGPA / numSemesters;
    document.getElementById('result').innerText = `Your CGPA is ${cgpa.toFixed(2)}`;
}
