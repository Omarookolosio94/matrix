// Get the modal
function openModal(name) {
  var modal = document.getElementById(name);
  // Get the <span> element that closes the modal
  var closeBtn = modal.firstElementChild.firstElementChild;

  modal.style.display = 'block';

  closeBtn.onclick = function () {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  var navLink = document.getElementsByClassName('nav-link');
  if ($trans) {
    $trans.classList.add('noanimate');
  }
  if (prevScrollpos > currentScrollPos) {
    navLink[0].classList.add('show');
  } else {
    navLink[0].classList.remove('show');
    navLink[0].classList.add('hide');
  }
  prevScrollpos = currentScrollPos;
};

//SVG Loader
var $loader = document.querySelector('.loader');
var $trans = document.querySelector('.trans-box');

window.onload = function () {
  if ($loader) {
    $loader.classList.remove('loader--active');
  } else {
    return null;
  }
};

// document.querySelector('.btn').addEventListener('click', function () {
//   $loader.classList.add('loader--active');

//   window.setTimeout(function () {
//     $loader.classList.remove('loader--active');
//   }, 5000);
// });
