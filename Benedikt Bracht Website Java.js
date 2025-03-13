document.addEventListener("DOMContentLoaded", function() {
    // Use 'var' instead of 'const'
    var videoDescription = document.querySelector('.video-description');
    var videoContainer = document.querySelector('.video-container');
    
    // Use 'var' instead of 'const'
    var threshold = 0.9;

    // Function to check if the video container is in the viewport
    function checkIfInView() {
        // Get the bounding rectangle of the video container
        var rect = videoContainer.getBoundingClientRect();
        
        // Get the height of the viewport
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Check if the video container is within the visible portion of the viewport
        if ((rect.top <= windowHeight * threshold) && (rect.bottom >= 0)) {
            // If yes, add the "visible" class to the video description
            videoDescription.classList.add('visible');
        } else {
            // Otherwise, remove the "visible" class
            videoDescription.classList.remove('visible');
        }
    }

    // Attach the checkIfInView function to the scroll and resize events
    window.addEventListener('scroll', checkIfInView);
    window.addEventListener('resize', checkIfInView);

    // Perform an initial check in case the element is already visible
    checkIfInView();
});