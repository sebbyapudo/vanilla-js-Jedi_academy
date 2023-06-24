// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear()
console.log(date);
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
  // linksContainer.classList.toggle('show-links')
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if(containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`
  }
  else {
    linksContainer.style.height = 0;
  }
})

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link')
// ********** fixed navbar ************
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navbarHeight = navbar.getBoundingClientRect().height;
  if(scrollHeight > navbarHeight) {
    navbar.classList.add('fixed-nav')
  }
  else {
    navbar.classList.remove('fixed-nav')
  }

  console.log(navbarHeight, scrollHeight);

  // show topLink
  if(scrollHeight > 500) {
    topLink.classList.add('show-link')
  }
  else {
    topLink.classList.remove('show-link')
  }
})

topLink.addEventListener('click', () => {
  scrollHeight.style.height = `${0}px`
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((scrollLink) => {
  scrollLink.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault()
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    // Calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav')
    let position = element.offsetTop - navHeight; 

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      top: position,
      left: 0,
    })
    linksContainer.style.height = 0;
  })
})