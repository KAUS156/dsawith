
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".event-expand").forEach(button => {
        button.addEventListener("click", function () {
            const details = this.nextElementSibling;
            const isOpen = details.style.display === "flex";

            // Close all other event details
            document.querySelectorAll(".event-details").forEach(detail => {
                detail.style.display = "none";
            });

            // Reset all expand buttons to "+"
            document.querySelectorAll(".event-expand").forEach(expandBtn => {
                expandBtn.textContent = "+";
            });

            // Toggle the clicked event details
            details.style.display = isOpen ? "none" : "flex";

            // Change "+" to "-" when expanded
            this.textContent = isOpen ? "+" : "-";
        });
    });
});

