document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".revealButton");
    const backgroundMusic = document.getElementById("backgroundMusic");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");
            const targetList = document.getElementById(targetId);
            targetList.classList.toggle("hidden");
        });

        // For mobile devices, handle touch event
        button.addEventListener("touchstart", (e) => {
            e.preventDefault(); // Prevent default touch behavior
            const targetId = button.getAttribute("data-target");
            const targetList = document.getElementById(targetId);
            targetList.classList.toggle("hidden");
        });
    });

    // Autoplay music on page load
    window.addEventListener('load', () => {
        backgroundMusic.play().catch(error => {
            console.log('Autoplay was prevented:', error);
        });
    });
});
