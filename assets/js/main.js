function updateViewport() {
  var newHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  var newWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  document.getElementById('w').innerHTML = newWidth;
  document.getElementById('h').innerHTML = newHeight;
}

function updateDPR() {
  document.getElementById('dpr').innerHTML = window.devicePixelRatio.toFixed(2);
}

function updateScreenRes() {
  var newHeight = window.screen.height;
  var newWidth = window.screen.width;

  document.getElementById('screen_w').innerHTML = newWidth;
  document.getElementById('screen_h').innerHTML = newHeight;
}

function doCalcs() {
  requestAnimationFrame(updateDPR);
  requestAnimationFrame(updateViewport);
  requestAnimationFrame(updateScreenRes);
}

window.addEventListener('load', doCalcs, false);
window.addEventListener('resize', doCalcs, false);
window.addEventListener('orientationchange', doCalcs, false);

document.querySelectorAll('.Footer__toggle')[0].addEventListener('click', function() {
  document.querySelectorAll('.Footer')[0].classList.toggle('Expanded');
}, false);
