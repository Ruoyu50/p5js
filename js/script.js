const searchBtn = document.querySelector('.searchBtn'),
  closeBtn = document.querySelector('.closeBtn'),
  searchBox = document.querySelector('.searchBox'),
  navigation = document.querySelector('.navigation'),
  menuToggle = document.querySelector('.menuToggle'),
  header = document.querySelector('header')

searchBtn.onclick = function () {
  searchBox.classList.add('active')
  searchBtn.classList.add('active')
  closeBtn.classList.add('active')
  menuToggle.classList.add('hide')
  header.classList.remove('open')
};

closeBtn.onclick = function () {
  searchBox.classList.remove('active')
  searchBtn.classList.remove('active')
  closeBtn.classList.remove('active')
  menuToggle.classList.remove('hide')
}

menuToggle.onclick = function () {
  header.classList.toggle('open')
  searchBox.classList.remove('active')
  searchBtn.classList.remove('active')
  closeBtn.classList.remove('active')
}