function generateResume(){

document.getElementById("rName").innerText =
document.getElementById("name").value;

document.getElementById("rJob").innerText =
document.getElementById("job").value;

document.getElementById("rEmail").innerText =
document.getElementById("email").value;

document.getElementById("rPhone").innerText =
document.getElementById("phone").value;

document.getElementById("rProfile").innerText =
document.getElementById("profile").value;

document.getElementById("rSkills").innerText =
document.getElementById("skills").value;

document.getElementById("rEducation").innerText =
document.getElementById("education").value;

document.getElementById("rExperience").innerText =
document.getElementById("experience").value;

const file = document.getElementById("photo").files[0];

if(file){

const reader = new FileReader();

reader.onload = function(e){
document.getElementById("profilePic").src =
e.target.result;
}

reader.readAsDataURL(file);
}
}

function downloadResume(){
window.print();
}
