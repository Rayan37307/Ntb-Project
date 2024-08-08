function showSidebar(){
    const sidebar = document.querySelector('.ntb-sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.ntb-sidebar')
    sidebar.style.display = 'none'
  }


var content = document.getElementsByTagName('body')[0];
var darkmode = document.getElementsByClassName('switch');

darkmode.addEventListener('click', function(){
  darkmode.classlist.toggle('active')
  content.classList.toggle('night')
} )
