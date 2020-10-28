/* eslint-disable no-undef */
'use strict';

const soybean = document.getElementById('soybean');
const soybeanValue = document.getElementById('soybean__value');

soybean.oninput = function() {
  soybeanValue.innerText = this.value + '%';
};

const sesame = document.getElementById('sesame');
const sesameValue = document.getElementById('sesame__value');

sesame.oninput = function() {
  sesameValue.innerText = this.value + '%';
};

const wheat = document.getElementById('wheat');
const wheatValue = document.getElementById('wheat__value');

wheat.oninput = function() {
  wheatValue.innerText = this.value + '%';
};

const corn = document.getElementById('corn');
const cornValue = document.getElementById('corn__value');

corn.oninput = function() {
  cornValue.innerText = this.value + '%';
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
      $('.basked__head').removeClass('open');
      $('.basked__kontent').fadeOut();
    }
  });
});
