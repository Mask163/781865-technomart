var buttonsBuy = document.querySelectorAll('.btn-buy');
var modalSucses = document.querySelector('.modal-sucses');
var basket = document.querySelector('.basket');
var currentBasket = 1;

var clickButtonBuy = function (button) {
    button.addEventListener('click', function (evt) {
        evt.preventDefault();
        modalSucses.classList.add('modal-show');
        basket.style.background = '#ee3643';
        basket.innerHTML = 'Корзина: ' + currentBasket++;
  });
};

for (var i = 0; i < buttonsBuy.length; i++) {
    clickButtonBuy(buttonsBuy[i]);
}

var closeModalSucses = modalSucses.querySelector('.modal-close');

closeModalSucses.addEventListener('click', function () {
    modalSucses.classList.remove('modal-show');
});

document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        modalSucses.classList.remove('modal-show');
    }
});

var buttonsBookmark = document.querySelectorAll('.btn-bookmark');
var bookmarks = document.querySelector('.bookmarks');
var currentBookmark = 1;

var clickButtonBookmark = function (button) {
    button.addEventListener('click', function (evt) {
        evt.preventDefault();
        bookmarks.style.background = '#ee3643';
        bookmarks.innerHTML = 'Закладки: ' + currentBookmark++;
  });
};

for (var i = 0; i < buttonsBookmark.length; i++) {
	clickButtonBookmark(buttonsBookmark[i]);
}

var modalFeedback = document.querySelector('.modal-feedback');
var btnContact = document.querySelector('.btn-contact');
var login = modalFeedback.querySelector('[name=user-name]');
var form = modalFeedback.querySelector('form');
var email = modalFeedback.querySelector('[name=user-mail]');
var closeModalFeedback = modalFeedback.querySelector('.modal-close');

var isStorageSupport = true;
var storage = "";
  
try {
    storage = localStorage.getItem('login');
} catch (err) {
    isStorageSupport = false;
}

btnContact.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalFeedback.classList.add('modal-show');
    
    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();  
    }
});

closeModalFeedback.addEventListener('click', function () {
    modalFeedback.classList.remove('modal-show');
    modalFeedback.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt) {
    if (!login.value || !email.value) {
        evt.preventDefault();
        modalFeedback.classList.remove('modal-error');
        modalFeedback.offsetWidth = modalFeedback.offsetWidth;
        modalFeedback.classList.add('modal-error');
    } else {
        if (isStorageSupport) {
        localStorage.setItem('login', login.value);
        }
    }
  });

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
    	evt.preventDefault();
    	if (modalFeedback.classList.contains('modal-show')) {
        	modalFeedback.classList.remove('modal-show');
        	modalFeedback.classList.remove('modal-error');
      }
    }
  });


var modalMap = document.querySelector('.modal-map');
var previewMap = document.querySelector('.map');

previewMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalMap.classList.add('modal-show-map');
});

var closeModalMap = modalMap.querySelector('.modal-close');

closeModalMap.addEventListener('click', function () {
    modalMap.classList.remove('modal-show-map');
});

document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        modalMap.classList.remove('modal-show-map');
    }
});