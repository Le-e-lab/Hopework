document.addEventListener("DOMContentLoaded", function () {
    const contentDiv = document.getElementById("content");
    const navLinks = document.querySelectorAll(".nav-link");

    function loadPage(page) {
        fetch(`content/${page}.html`)
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;
                window.history.pushState({ page }, "", `#${page}`);

                navLinks.forEach(link => link.classList.remove("active"));
                document.querySelector(`[data-page="${page}"]`).classList.add("active");
            })
            .catch(() => contentDiv.innerHTML = "<p>Error loading page.</p>");
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const page = this.getAttribute("data-page");
            loadPage(page);
        });
    });

    window.addEventListener("popstate", function (event) {
        if (event.state && event.state.page) {
            loadPage(event.state.page);
        }
    });

    // Load default page
    const defaultPage = window.location.hash.substring(1) || "home";
    loadPage(defaultPage);
});

// Event page
document.addEventListener("DOMContentLoaded", function () {
    const signupButtons = document.querySelectorAll(".signup-btn");

    signupButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("You have signed up for this event!");
        });
    });
});

// Impact page
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
