const textInput = document.getElementById('text-input');
  const checkBtn = document.getElementById('check-btn');
  const resultDiv = document.getElementById('result');

  function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleaned = str.toLowerCase().replace(/[\W_]/g, '');
    // Check if the cleaned string is equal to its reverse
    return cleaned === cleaned.split('').reverse().join('');
  }

  checkBtn.addEventListener('click', function() {
    // Get value and remove leading and trailing spaces
    const inputValue = textInput.value.trim();

    if (inputValue === '') {
      alert('Please input a value');
      return;
    }

    if (isPalindrome(inputValue)) {
      resultDiv.classList.remove('danger');
      resultDiv.classList.add('success');
      resultDiv.textContent = `${inputValue} is a palindrome`;

    } else {
      resultDiv.classList.remove('success');
      resultDiv.classList.add('danger');
      resultDiv.textContent = `${inputValue} is not a palindrome`;
    }
  });