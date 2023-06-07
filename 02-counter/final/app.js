// Declaring our global variables 
const btns = document.querySelectorAll('.btn');
const value = document.getElementById('value')

// Set initial count
let count = 0;

// Looping over the btns (NodeList)
btns.forEach((btn)=>{
  btn.addEventListener('click', (e)=>{
    const styles = (e.currentTarget.classList);

    if(styles.contains('decrease')) {
      count--
    }
    else if(styles.contains('increase')) {
      count++
    }else {
      count = 0;
    }

    // Setting colors for value if < || > || = 0
    if(count > 0) {
      value.style.color = 'green'
    }
    if(count < 0) {
      value.style.color = 'red'
    }
    if(count === 0) {
      value.style.color = "#222"
    }
    value.textContent = count;
  })
});
