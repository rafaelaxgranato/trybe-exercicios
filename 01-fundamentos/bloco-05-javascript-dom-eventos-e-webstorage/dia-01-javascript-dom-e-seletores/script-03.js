const header = document.getElementById("header-container");
header.style.backgroundColor = "green";

const emergencyTasks = document.getElementsByClassName("emergency-tasks")[0];
emergencyTasks.style.backgroundColor = "pink";

const emergencyTasksHeaders = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
    emergencyTasksHeaders[index].style.backgroundColor = "purple";
}

const noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks")[0];
noEmergencyTasks.style.backgroundColor = "yellow";

const noEmergencyTasksHeaders = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
    noEmergencyTasksHeaders[index].style.backgroundColor = "black";
}


const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "gray";