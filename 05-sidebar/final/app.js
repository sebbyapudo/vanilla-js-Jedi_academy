const toggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

toggleBtn.addEventListener('click', ()=>{
  // if(!sidebar.classList.contains('show-sidebar')) {
  //   sidebar.classList.add('show-sidebar')
  // }
  // else {
  //   sidebar.classList.remove('show-sidebar')
  // }
  sidebar.classList.toggle('show-sidebar')

})

closeBtn.addEventListener('click', ()=>{
  // if(sidebar.classList.contains('show-sidebar')) {
  //   sidebar.classList.remove('show-sidebar')
  // }
  sidebar.classList.toggle('show-sidebar')
})