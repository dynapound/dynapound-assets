(function() {
    // Function to create the left banner with instructions and a toggle button
    function createBanner() {
        // Create the banner container
        let banner = document.createElement('div');
        banner.style.position = 'fixed';
        banner.style.top = '0';
        banner.style.left = '0';
        banner.style.width = '800px';
        banner.style.height = '100%';
        banner.style.backgroundColor = 'rgba(15, 23, 42, 0.9)'; // Dark theme with some transparency
        banner.style.color = '#fff';
        banner.style.padding = '30px';
        banner.style.zIndex = '1000';
        banner.style.fontFamily = 'Arial, sans-serif';
        banner.style.overflowY = 'auto';
        banner.style.boxShadow = '2px 0 10px rgba(0, 0, 0, 0.5)';
        
        // Title text
        let title = document.createElement('h2');
        title.innerText = 'Screenshot Instructions';
        title.style.marginBottom = '20px';
        title.style.fontSize = '22px';
        title.style.fontWeight = '600';
        title.style.color = '#60a5fa'; // Light blue for title
        banner.appendChild(title);

        // Instructions text
        let instructions = document.createElement('p');
        instructions.innerText = '1. Take a screenshot (using your OS\'s screenshot tool).\n' +
                                 '2. Drag the screenshot to Gauthmaths or Paste.\n' +
                                 '3. Press Ctrl + V to paste the image.';
        instructions.style.fontSize = '16px';
        instructions.style.lineHeight = '1.6';
        instructions.style.color = '#d1d5db'; // Muted gray for text
        banner.appendChild(instructions);

        // Create the toggle button to show/hide the iframe
        let toggleButton = document.createElement('button');
        toggleButton.innerText = 'Toggle Iframe';
        toggleButton.style.marginTop = '20px';
        toggleButton.style.padding = '12px 20px';
        toggleButton.style.backgroundColor = '#007bff'; // Blue button
        toggleButton.style.color = '#fff';
        toggleButton.style.border = 'none';
        toggleButton.style.cursor = 'pointer';
        toggleButton.style.borderRadius = '8px';
        toggleButton.style.fontSize = '16px';
        toggleButton.style.transition = 'background-color 0.3s ease';
        
        toggleButton.addEventListener('mouseenter', function() {
            toggleButton.style.backgroundColor = '#2563eb'; // Lighter blue on hover
        });
        toggleButton.addEventListener('mouseleave', function() {
            toggleButton.style.backgroundColor = '#007bff';
        });

        toggleButton.addEventListener('click', function() {
            iframeContainer.style.display = iframeContainer.style.display === 'none' ? 'block' : 'none';
        });

        banner.appendChild(toggleButton);

        // Create the iframe container (hidden by default)
        let iframeContainer = document.createElement('div');
        iframeContainer.style.marginTop = '20px';
        iframeContainer.style.display = 'none'; // Initially hidden

        // Create the iframe inside the container
        let iframe = document.createElement('iframe');
        iframe.src = 'https://www.gauthmath.com/'; // You can change this to your desired page or app
        iframe.style.width = '100%';
        iframe.style.height = '1000px';
        iframe.style.border = 'none';
        iframe.style.borderRadius = '8px';
        iframe.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        iframe.style.marginTop = '20px';
        iframeContainer.appendChild(iframe);

        banner.appendChild(iframeContainer);

        // Append the banner to the body of the page
        document.body.appendChild(banner);
    }

    // Create the banner when the script loads
    createBanner();
})();
