document.addEventListener("DOMContentLoaded", function () {
    const editButton = document.getElementById("edit-profile");
    const profileForm = document.querySelector(".edit-profile-form");
    const profileCard = document.querySelector(".profile-card");

    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const skillsField = document.getElementById("skills");

    const nameDisplay = document.getElementById("volunteer-name");
    const emailDisplay = document.getElementById("volunteer-email");
    const skillsDisplay = document.getElementById("volunteer-skills");

    // Toggle form visibility
    editButton.addEventListener("click", function () {
        profileForm.classList.toggle("hidden");
    });

    // Save profile changes
    document.getElementById("profile-form").addEventListener("submit", function (e) {
        e.preventDefault();

        // Update displayed values
        nameDisplay.textContent = nameField.value;
        emailDisplay.textContent = emailField.value;
        skillsDisplay.textContent = skillsField.value;

        // Hide form after saving
        profileForm.classList.add("hidden");
    });
});
