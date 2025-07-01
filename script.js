let counter = 0;
const counterDiv = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');
const decrementButton = document.getElementById('decrementBtn');
const resetButton = document.getElementById('resetBtn');
const colorSelect = document.getElementById('colorSelect');
const themeSelect = document.getElementById('themeSelect');

incrementButton.addEventListener('click', () => {
    counter++;
    counterDiv.textContent = counter;
});

decrementButton.addEventListener('click', () => {
    counter--;
    counterDiv.textContent = counter;
});

resetButton.addEventListener('click', () => {
    counter = 0;
    counterDiv.textContent = counter
});

const updateFontColorOptions = () => {
    const selectedTheme = themeSelect.value;
  
    if (selectedTheme === 'light') {
      colorSelect.innerHTML = `
        <option value="theme">Theme</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
      `;
      // Set font color to black for light theme
      if (colorSelect.value === 'theme') {
        document.body.style.color = 'black';
      }
    } else if (selectedTheme === 'dark') {
      colorSelect.innerHTML = `
        <option value="theme">Theme</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
      `;
      // Set font color to white for dark theme
      if (colorSelect.value === 'theme') {
        document.body.style.color = 'white';
      }
    }
  };
  
  // Change background color and update font color accordingly
  themeSelect.addEventListener('change', () => {
    const selectedTheme = themeSelect.value;
  
    if (selectedTheme === 'light') {
      document.body.style.backgroundColor = 'lightgray';
    } else if (selectedTheme === 'dark') {
      document.body.style.backgroundColor = '#0F0F0F';
    }
  
    // Update font color options based on theme
    updateFontColorOptions();
  });
  
  // Font color change based on selected option
  colorSelect.addEventListener('change', () => {
    const selectedColor = colorSelect.value;
  
    if (selectedColor === 'theme') {
      const selectedTheme = themeSelect.value;
      // Apply the correct color based on the selected theme
      if (selectedTheme === 'light') {
        document.body.style.color = 'black';
      } else if (selectedTheme === 'dark') {
        document.body.style.color = 'white';
      }
    } else {
      document.body.style.color = selectedColor;
    }
  });