function generateResume(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let education = document.getElementById("education").value;
    let skills = document.getElementById("skills").value;
    let experience = document.getElementById("experience").value;

    document.getElementById("resume").innerHTML = `
        <h2>${name}</h2>
        <p><b>Email:</b> ${email}</p>
        <p><b>Education:</b> ${education}</p>
        <p><b>Skills:</b> ${skills}</p>
        <p><b>Experience:</b> ${experience}</p>
    `;
}
