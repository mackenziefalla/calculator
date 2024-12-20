//event listener to the form submission
document.querySelector('.requires-validation').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission. I got help from chatgbt for this. 

    // retrieve values from input fields and convert to numbers
    let number1 = Number(document.getElementById('num1').value);
    let number2 = Number(document.getElementById('num2').value);
    let number3 = Number(document.getElementById('num3').value);

    // Calculate statistics directly without using an array
    let max = Math.max(number1, number2, number3);
    let min = Math.min(number1, number2, number3);
    let mean = (number1 + number2 + number3) / 3;
    
    
    // Calculate median using a simpler approach
    let median = (number1 + number2 + number3) / 3; // Approximation (for three numbers, median will be the middle one)
    if (number1 > number2) {
        if (number1 < number3) median = number1; // number1 is in the middle
    } else {
        if (number2 < number3) median = number2; // number2 is in the middle
    }

    // Calculate range
    let range = max - min;

    // Display results
    document.getElementById('max').innerText = `Max: ${max}`;
    document.getElementById('min').innerText = `Min: ${min}`;
    document.getElementById('mean').innerText = `Mean: ${mean.toFixed(1)}`;
    document.getElementById('median').innerText = `Median: ${median}`;
    document.getElementById('range').innerText = `Range: ${range}`;
});
