let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// Write your code here:
function showInfo() {
  moreInfo.style.display = 'block'
}

readMore.addEventListener('click', showInfo)

let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// Write your code here
let textChange = function() {
  view.innerHTML = 'Hello, World!'
}

let textReturn = function() {
  view.innerHTML = 'View'
}

view.addEventListener('click', textChange)
close.addEventListener('click', textReturn)