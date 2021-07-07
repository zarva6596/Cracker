/* eslint-disable no-undef */
'use strict';

const soybean = document.getElementById('soybean');
const soybeanValue = document.getElementById('soybean__value');

const sesame = document.getElementById('sesame');
const sesameValue = document.getElementById('sesame__value');

const wheat = document.getElementById('wheat');
const wheatValue = document.getElementById('wheat__value');

const corn = document.getElementById('corn');
const cornValue = document.getElementById('corn__value');

let sum = 0;

soybean.oninput = function() {
  soybeanValue.innerText = this.value + '%';
  corn.value = 100 - wheat.value - sesame.value - soybean.value;
  cornValue.innerText = corn.value + '%';

  sum = wheat.value - sesame.value - soybean.value + soybean.value;

  if (sum > 100 || wheat.value > 0) {
    wheat.value = 100 - corn.value - sesame.value - soybean.value;
    wheatValue.innerText = wheat.value + '%';
    sum = wheat.value - sesame.value - soybean.value + soybean.value;
  }

  if (sum > 100 || sesame.value > 0) {
    sesame.value = 100 - corn.value - wheat.value - soybean.value;
    sesameValue.innerText = sesame.value + '%';
    sum = wheat.value - sesame.value - soybean.value + soybean.value;
  }
};

sesame.oninput = function() {
  sesameValue.innerText = this.value + '%';
  corn.value = 100 - wheat.value - sesame.value - soybean.value;
  cornValue.innerText = corn.value + '%';

  sum = wheat.value - sesame.value - soybean.value + soybean.value;

  if (sum > 100 || wheat.value > 0) {
    wheat.value = 100 - corn.value - sesame.value - soybean.value;
    wheatValue.innerText = wheat.value + '%';
    sum = wheat.value - sesame.value - soybean.value + soybean.value;
  }

  if (sum > 100 || soybean.value > 0) {
    soybean.value = 100 - corn.value - wheat.value - sesame.value;
    soybeanValue.innerText = soybean.value + '%';
    sum = wheat.value - sesame.value - soybean.value + soybean.value;
  }
};

wheat.oninput = function() {
  wheatValue.innerText = this.value + '%';
  corn.value = 100 - wheat.value - sesame.value - soybean.value;
  cornValue.innerText = corn.value + '%';

  sum = wheat.value - sesame.value - soybean.value + soybean.value;

  if (sum > 100 || sesame.value > 0) {
    sesame.value = 100 - corn.value - wheat.value - soybean.value;
    sesameValue.innerText = sesame.value + '%';
    sum = wheat.value - sesame.value - soybean.value + soybean.value;
  }

  if (sum > 100 || soybean.value > 0) {
    soybean.value = 100 - corn.value - wheat.value - sesame.value;
    soybeanValue.innerText = soybean.value + '%';
    sum = wheat.value - sesame.value - soybean.value + soybean.value;
  }
};

corn.oninput = function() {
  cornValue.innerText = this.value + '%';
  wheat.value = 100 - corn.value - sesame.value - soybean.value;
  wheatValue.innerText = wheat.value + '%';

  sum = wheat.value - sesame.value - soybean.value + soybean.value;

  if (sum > 100 || sesame.value > 0) {
    sesame.value = 100 - corn.value - wheat.value - soybean.value;
    sesameValue.innerText = sesame.value + '%';
    sum = wheat.value - sesame.value - soybean.value + soybean.value;
  }

  if (sum > 100 || soybean.value > 0) {
    soybean.value = 100 - corn.value - wheat.value - sesame.value;
    soybeanValue.innerText = soybean.value + '%';
    sum = wheat.value - sesame.value - soybean.value + soybean.value;
  }
};

jQuery(($) => {
  $('.constructor__select').on('click', '.select__head', function() {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).next().fadeOut();
    } else {
      $('.select__head').removeClass('open');
      $('.select__list').fadeOut();
      $(this).addClass('open');
      $(this).next().fadeIn();
    }
  });

  $('.constructor__select').on('click', '.select__item', function() {
    $('.select__head').removeClass('open');
    $(this).parent().fadeOut();
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().prev().val($(this).text());
  });

  $(document).click(function(e) {
    if (!$(e.target).closest('.constructor__select').length) {
      $('.select__head').removeClass('open');
      $('.select__list').fadeOut();
    }
  });

  $('.basket').on('click', '.basket__head', function() {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).next().fadeOut();
    } else {
      $('.basket__head').removeClass('open');
      $('.basket__content').fadeOut();
      $(this).addClass('open');
      $(this).next().fadeIn();
    }
  });

  $(document).click(function(e) {
    if (!$(e.target).closest('.basket').length) {
      $('.basket__head').removeClass('open');
      $('.basket__content').fadeOut();
    }
  });

  $('.basket').on('click', '.basket__top-close', function() {
    $('.basket__head').removeClass('open');
    $('.basket__content').fadeOut();
  });
});
