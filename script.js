function handleLogin() {
    sessionStorage.setItem("loggedIn", true);
    alert("Login successful!");
    window.location.href = "index.html"; // Redirect to Home after login
    return false; // Prevent form submission
}
function searchProgress() {
    let location = document.getElementById("location").value.toLowerCase();
    let progressData = {
        "village a": "Road construction - 70% completed",
        "village b": "Water pipeline installation - 50% completed",
        "village c": "Solar streetlights setup - 90% completed"
    };

    let result = progressData[location] || "No data available for this location.";
    document.getElementById("progress-result").innerText = result;
}

function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 28.7041, lng: 77.1025 }, // Default location (Delhi, India)
        zoom: 5
    });

    let marker = new google.maps.Marker({
        position: { lat: 28.7041, lng: 77.1025 },
        map: map,
        title: "Project Location"
    });
}