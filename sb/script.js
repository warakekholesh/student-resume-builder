const form = document.getElementById('resumeForm');

form.addEventListener('submit', function(event) {
    // 1. Stop page from refreshing
    event.preventDefault();

    // 2. Read the text from the input boxes
    const name = document.getElementById('nameBox').value;
    const email = document.getElementById('emailBox').value;
    const college = document.getElementById('collegeBox').value;
    const skills = document.getElementById('skillsBox').value;

    // 3. Check for blank boxes
    if (name === '' || email === '' || college === '' || skills === '') {
        alert("Please fill in all the details.");
    } else {
        // 4. Inject the typed text into the empty HTML tags of the resume
        document.getElementById('outName').innerText = name;
        document.getElementById('outEmail').innerText = "Email: " + email;
        document.getElementById('outCollege').innerText = college;
        document.getElementById('outSkills').innerText = skills;

        // 5. Hide the form and unhide the finished resume
        document.getElementById('resumeForm').style.display = 'none';
        document.getElementById('resumeOutput').style.display = 'block';
    }
});