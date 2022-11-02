function tabHandler(evt, leader){
  let tabContent = document.getElementsByClassName('tab_content')
  for(let i = 0; i< tabContent.length; i++){
    tabContent[i].style.display = 'none'
  }

  let tabLInks = document.getElementsByClassName('tab_name')
  for(let i = 0; i< tabLInks.length; i++){
    tabContent[i].className.replace('active', '');
  }

  document.getElementById(leader).style.display = "block"
  evt.currentTarget.className += 'active'
}