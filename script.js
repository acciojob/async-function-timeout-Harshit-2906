//your JS code here. If required.
         // Function to introduce delay
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        // Async function to handle the button click
        async function handleClick() {
            const text = document.getElementById('text').value;
            const delayValue = document.getElementById('delay').value;
            
            // Convert delayValue to an integer
            const delayMs = parseInt(delayValue);
            
            // Introduce delay
            await delay(delayMs);
            
            // Display the user-provided text
            document.getElementById('output').innerText = text;
        }

        // Event listener for the button click
        document.getElementById('btn').addEventListener('click', handleClick);