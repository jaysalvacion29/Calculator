// Add button functionality: adds the two numbers and displays the result
document.getElementById('addBtn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const result = num1 + num2;
    document.getElementById('result').value = result;
  });
  
  // Clear button functionality: clears all the input fields
  document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').value = '';
  });
  
  // Exit button functionality: attempts to close the window
  document.getElementById('exitBtn').addEventListener('click', function() {
    // window.close() works only for windows opened by a script.
    try {
      window.close();
    } catch (e) {
      alert('Exit button clicked - this would close the window in a desktop application.');
    }
  });
  