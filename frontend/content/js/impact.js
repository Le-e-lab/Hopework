document.addEventListener("DOMContentLoaded", function () {
    // Dummy data for volunteer impact
    const totalHours = 25;
    const totalEvents = 3;

    document.getElementById("total-hours").textContent = totalHours;
    document.getElementById("total-events").textContent = totalEvents;

    // Hours by Month Chart (Bar Chart)
    const hoursCtx = document.getElementById("hoursChart").getContext("2d");
    new Chart(hoursCtx, {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Hours Volunteered",
                data: [5, 8, 3, 2, 4, 3], // Dummy data
                backgroundColor: "#007bff"
            }]
        }
    });

    // Event Participation Breakdown (Pie Chart)
    const eventsCtx = document.getElementById("eventsChart").getContext("2d");
    new Chart(eventsCtx, {
        type: "pie",
        data: {
            labels: ["Beach Cleanup", "Food Drive", "Tree Planting"],
            datasets: [{
                data: [40, 35, 25], // Dummy data
                backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56"]
            }]
        }
    });
});
