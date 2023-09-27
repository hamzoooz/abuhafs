// owl-carusel and tabs 
$(document).ready(function () {

  $('.toggle-button-in-single').click(function () {
    var target = $(this).attr('data-bs-target');
    $('.collapse').not(target).collapse('hide');
  });

  auto_play = false
  // play-circle-in-frontpage 
  $(".play-circle-in-frontpage").click(function () {
    // $(this).toggle('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter    
    autoPlay = true
  })
});

// owl-carusel and tabs 
$(document).ready(function () {
  // owl-demo-frontpage-last-book
  var owl = $("#owl-demo-frontpage-last-book");
  owl.owlCarousel({
    items: 6,
    lazyLoad: true,
    stopOnHover: true,
    navigation: false,
    loop: true,
    autoPlay: auto_play,
    margin: 9,
    responsive: {
      0: {
        items: 2,
      },
      700: {
        items: 3,
      },
      960: {
        items: 4,
      },
      1200: {
        items: 5,
      },
      1600: {
        items: 6,
      },
      1800: {
        items: 7,
      },
    },
  });

  // owl_demo_frontpage_feed_book_slug
  var owl = $("#owl_demo_frontpage_feed_book_slug");
  owl.owlCarousel({
    items: 6,
    lazyLoad: true,
    stopOnHover: true,
    navigation: false,
    loop: false,
    autoPlay: false,
    margin: 9,
    responsive: {
      0: {
        items: 2,
      },
      700: {
        items: 3,
      },
      960: {
        items: 4,
      },
      1200: {
        items: 5,
      },
      1600: {
        items: 6,
      },
      1800: {
        items: 7,
      },
    },
  });

  // owl_demo_frontpage_feed_book
  var owl = $("#owl_demo_frontpage_feed_book");
  owl.owlCarousel({
    items: 6,
    lazyLoad: true,
    stopOnHover: true,
    navigation: false,
    // loop: true,
    // autoPlay: auto_play,
    loop: false,
    autoPlay: false,
    margin: 9,
    responsive: {
      0: {
        items: 2,
      },
      700: {
        items: 3,
      },
      960: {
        items: 4,
      },
      1200: {
        items: 5,
      },
      1600: {
        items: 6,
      },
      1800: {
        items: 7,
      },
    },
  });

  // owl_demo_frontpage_feed_book_sugiste
  var owl = $("#owl_demo_frontpage_feed_book_sugiste");
  owl.owlCarousel({
    items: 6,
    lazyLoad: true,
    stopOnHover: true,
    navigation: false,
    // loop: true,
    // autoPlay: auto_play,
    autoPlay: true,
    margin: 9,
    responsive: {
      0: {
        items: 2,
      },
      700: {
        items: 3,
      },
      960: {
        items: 4,
      },
      1200: {
        items: 5,
      },
      1600: {
        items: 6,
      },
      1800: {
        items: 7,
      },
    },
  });

  // owl_sugist_user
  var owl = $("#owl_sugist_user");
  owl.owlCarousel({
    items: 6,
    lazyLoad: true,
    stopOnHover: true,
    navigation: false,
    // loop: true,
    // autoPlay: auto_play,
    autoPlay: true,
    margin: 9,
    responsive: {
      0: {
        items: 2,
      },
      700: {
        items: 3,
      },
      960: {
        items: 4,
      },
      1200: {
        items: 5,
      },
      1600: {
        items: 6,
      },
      1800: {
        items: 7,
      },
    },
  });

  $(".tooltip").tooltip();
    
  $(".stop-circle-in-frontpage").click(function () {
    owl.trigger('owl.stop');
  })
});

// owl - demo -
$(document).ready(function () {

  $("#owl-demo-frontpage-recent-book").owlCarousel({
    items: 6,
    lazyLoad: true,
    stopOnHover: true,
    // autoHeight: true,
    navigation: false,
    // loop: true,
    // autoplay: true,
    margin: 4,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      960: {
        items: 4,
      },
      1200: {
        items: 5,
      },
      1600: {
        items: 6,
      },
      1800: {
        items: 7,
      },
    },
  });

  $("#owl-demo-frontpage-category-book").owlCarousel({
    items: 6,
    lazyLoad: true,
    stopOnHover: true,
    // autoHeight: true,
    navigation: false,
    // loop: true,
    autoplay: true,
    margin: 4,
    responsive: {
      0: {
        items: 4,
      },
      600: {
        items: 6,
      },
      960: {
        items: 8,
      },
      1200: {
        items: 10,
      },
    },
  });


  $("#owl-demo-user-book").owlCarousel({
    items: 6,
    lazyLoad: true,
    stopOnHover: true,
    // autoHeight: true,
    navigation: false,
    // loop: true,
    autoplay: true,
    margin: 4,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      960: {
        items: 4,
      },
      1200: {
        items: 4,
      },
      1600: {
        items: 5,
      },
      1800: {
        items: 5,
      },
    },
  });


  $("#owl-demo-waiting-abrove-book").owlCarousel({
    items: 6,
    lazyLoad: true,
    stopOnHover: true,
    // autoHeight: true,
    navigation: false,
    // loop: true,
    autoplay: true,
    margin: 4,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      960: {
        items: 4,
      },
      1200: {
        items: 5,
      },
      1600: {
        items: 6,
      },
      1800: {
        items: 7,
      },
    },
  });


  $("#owl-demo-move-to-trash").owlCarousel({
    items: 6,
    lazyLoad: true,
    stopOnHover: true,
    // autoHeight: true,
    navigation: false,
    // loop: true,
    autoplay: true,
    margin: 4,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      960: {
        items: 4,
      },
      1200: {
        items: 5,
      },
      1600: {
        items: 6,
      },
      1800: {
        items: 7,
      },
    },
  });


  $("#owl-demo-move-to-draft").owlCarousel({
    items: 6,
    lazyLoad: true,
    stopOnHover: true,
    // autoHeight: true,
    navigation: false,
    // loop: true,
    autoplay: true,
    margin: 4,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      960: {
        items: 4,
      },
      1200: {
        items: 5,
      },
      1600: {
        items: 6,
      },
      1800: {
        items: 7,
      },
    },
  });

  $("#tabs").tabs();
  
  $("#tabs_user").tabs();
  
  $("#tabs_book_detial").tabs();

});

// Books  App 
// #######################################
$(document).ready(function () {
  
  $(document).on('click', '.move-to-draft', function (e) {
    // delete book 
    e.preventDefault();
    var book_id = $(this).closest('.book_data').find('.book_id').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    $.ajax({
      method: "POST",
      url: "my_library/delet_book/" + book_id,
      data: {
        // "user":user,
        'book_id': book_id,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        $('#book_id_' + book_id).remove();
        alertify.success(response.status)

        $('.trending-book').load(location.href + ' .trending-book');
      }
    });
  });

  // remove-from-cart
  $(document).on('click', '.remove-from-cart', function (e) {
    e.preventDefault();
    var book_id = $(this).closest('.book_data').find('.book_id').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    $.ajax({
      method: "POST",
      url: "/remove_form_cart",
      data: {
        'book_id': book_id,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        $('.cart-container').load(location.href + ' .cart-container');
        alertify.success(response.status)
      }
    });
  });
});

// Manage  App 
// #######################################
$(document).ready(function () {

  // Move To Pbulished Book
  $(document).on('click', '.move_to_published', function (e) {
    // delete book 
    e.preventDefault();
    var book_id = $(this).closest('.book_data').find('.book_id').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    console.log(book_id)
    $.ajax({
      method: "POST",
      url: "move_to_published/" + book_id,
      data: {
        // "user":user,
        'book_id': book_id,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        alertify.success(response.status)
        $('.move_to_published_1').load(location.href + ' .move_to_published_1');
        console.log(book_id)
      }
    });
  });

  // Move To Delete  Book
  $(document).on('click', '.move_to_delete', function (e) {
    // delete book 
    e.preventDefault();
    var book_id = $(this).closest('.book_data').find('.book_id').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    console.log(book_id)
    $.ajax({
      method: "POST",
      url: "move_to_delete/" + book_id,
      data: {
        // "user":user,
        'book_id': book_id,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        alertify.success(response.status)
        $('.move_to_delete_1').load(location.href + ' .move_to_delete_1');
        console.log(book_id)
      }
    });
  });


  // Move To Waiting Book
  $(document).on('click', '.move_to_waiting', function (e) {
    // delete book 
    e.preventDefault();
    var book_id = $(this).closest('.book_data').find('.book_id').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    console.log(book_id)
    $.ajax({
      method: "POST",
      url: "move_to_waiting/" + book_id,
      data: {
        // "user":user,
        'book_id': book_id,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        alertify.success(response.status)
        $('.move_to_waiting_1').load(location.href + ' .move_to_waiting_1');
        console.log(book_id)
      }
    });
  });


  // Move To Daft Book
  $(document).on('click', '.move_to_draft', function (e) {
    // delete book 
    e.preventDefault();
    var book_id = $(this).closest('.book_data').find('.book_id').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    console.log(book_id)
    $.ajax({
      method: "POST",
      url: "move_to_draft/" + book_id,
      data: {
        // "user":user,
        'book_id': book_id,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        alertify.success(response.status)
        $('.move_to_draft_1').load(location.href + ' .move_to_draft_1');
        console.log(book_id)
      }
    });
  });

  // Move To Not Abrove Book
  $(document).on('click', '.move_to_published', function (e) {
    // delete book 
    e.preventDefault();
    var book_id = $(this).closest('.book_data').find('.book_id').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    console.log(book_id)
    $.ajax({
      method: "POST",
      url: "move_to_published/" + book_id,
      data: {
        // "user":user,
        'book_id': book_id,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        alertify.success(response.status)
        $('.move_to_published_1').load(location.href + ' .move_to_published_1');
        console.log(book_id)
      }
    });
  });

  // Move To Abroved Book
  $(document).on('click', '.move_to_abrov', function (e) {
    // delete book 
    e.preventDefault();
    var book_id = $(this).closest('.book_data').find('.book_id').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    console.log(book_id)
    $.ajax({
      method: "POST",
      url: "move_to_abrov/" + book_id,
      data: {
        // "user":user,
        'book_id': book_id,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        alertify.success(response.status)
        $('.move_to_abrov_1').load(location.href + ' .move_to_abrov_1');
        console.log(book_id)
      }
    });
  });

  // Move To Not Abroved Book
  $(document).on('click', '.move_to_not_abrov', function (e) {
    // delete book 
    e.preventDefault();
    var book_id = $(this).closest('.book_data').find('.book_id').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    console.log(book_id)
    $.ajax({
      method: "POST",
      url: "move_to_not_abrov/" + book_id,
      data: {
        // "user":user,
        'book_id': book_id,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        alertify.success(response.status)
        $('.move_to_not_abrov_1').load(location.href + ' .move_to_not_abrov_1');
        console.log(book_id)
      }
    });
  });


});

// Cart  App 
// #######################################
$(document).ready(function () {
  // addToCartBtn
  $('.addToCartBtn').click(function (e) {
    e.preventDefault();
    var book_id = $(this).closest('.book_data').find('.book_id').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    $.ajax({
      method: "POST",
      url: "/add-to-cart",
      data: {
        'book_id': book_id,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        alertify.success(response.status)
      }
    });
  });

  // remove-from-cart
  $(document).on('click', '.remove-from-cart', function (e) {
    e.preventDefault();
    var book_id = $(this).closest('.book_data').find('.book_id').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    $.ajax({
      method: "POST",
      url: "/remove_form_cart",
      data: {
        'book_id': book_id,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        $('.cart-container').load(location.href + ' .cart-container');
        alertify.success(response.status)
      }
    });
  });
});

// Wishlist App
// #######################################
$(document).ready(function () {
  // add_to_wishlist

  $('.add_to_wishlist').click(function (e) {
    e.preventDefault();
    var book_id = $(this).closest('.book_data').find('.book_id_in_wishlist').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    $.ajax({
      method: "POST",
      url: "/add_to_wishlist/",
      data: {
        'book_id': book_id,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        alertify.success(response.status)
      }
    });
  });

  // remove-from-wishlist
  $(document).on('click', '.remove-from-wishlist', function (e) {
    e.preventDefault();
    var book_id = $(this).closest('.book_data').find('.book_id').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    $.ajax({
      method: "POST",
      url: "/remove_from_wishlist/",
      data: {
        'book_id': book_id,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        alertify.success(response.status)
        $('.wishlist-container').load(location.href + ' .wishlist-container');
      }
    });
  });

});

// Follower system App 
// #######################################
$(document).ready(function () {
  $(document).on('click', '.follow', function (e) {
    e.preventDefault();
    var user = $(this).closest('.user-data').find('.user').val();
    var follower = $(this).closest('.user-data').find('.follower').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    var form = $('.form_class_in_user')
    var url = form.attr('action');

    $.ajax({
      method: "POST",
      url: url ,
      data: {
        'user': user,
        'follower': follower,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        alertify.success(response.status)
        $('#user_id_' + follower).remove();
        $('.user-data2').load(location.href + ' .user-data2');

      }
    });
  });

});
// Rating App
// #######################################
$(document).ready(function () {

  // Rating System to book 
  $(document).on('click', '.star_book_5', function (e) {
    e.preventDefault();
    var value = $(this).closest('.rating_system').find('.star_book_input_5').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    // var form = $('.form_class_in_user')
    // var url = form.attr('action');
    console.log(value)
    $.ajax({
      method: "POST",
      url: 'rating',
      data: {
        'value': value,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        console.log(value)
        alertify.success(response.status)
        // $('.average_rating').text(data.average_rating);
        $('.rating-book').load(location.href + ' .rating-book');
        // $('#user_id_' + comment_id).remove();
      }
    });
  });

  $(document).on('click', '.star_book_4', function (e) {
    e.preventDefault();
    var value = $(this).closest('.rating_system').find('.star_book_input_4').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    console.log(value)
    $.ajax({
      method: "POST",
      url: 'rating',
      data: {
        'value': value,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        console.log(value)
        alertify.success(response.status)
        // $('.average_rating').text(data.average_rating);
        $('.rating-book').load(location.href + ' .rating-book');
      }
    });
  });

  $(document).on('click', '.star_book_3', function (e) {
    e.preventDefault();
    var value = $(this).closest('.rating_system').find('.star_book_input_3').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    console.log(value)
    $.ajax({
      method: "POST",
      url: 'rating',
      data: {
        'value': value,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        console.log(value)
        alertify.success(response.status)
        // $('.average_rating').text(data.average_rating);
        $('.rating-book').load(location.href + ' .rating-book');
      }
    });
  });

  $(document).on('click', '.star_book_2', function (e) {
    e.preventDefault();
    var value = $(this).closest('.rating_system').find('.star_book_input_2').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    console.log(value)
    $.ajax({
      method: "POST",
      url: 'rating',
      data: {
        'value': value,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        console.log(value)
        alertify.success(response.status)
        // $('.average_rating').text(data.average_rating);
        $('.rating-book').load(location.href + ' .rating-book');
      }
    });
  });

  $(document).on('click', '.star_book_1', function (e) {
    e.preventDefault();
    var value = $(this).closest('.rating_system').find('.star_book_input_1').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    console.log(value)
    $.ajax({
      method: "POST",
      url: 'rating',
      data: {
        'value': value,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        console.log(value)
        alertify.success(response.status)
        // $('.average_rating').text(data.average_rating);
        $('.rating-book').load(location.href + ' .rating-book');
      }
    });
  });

// #######################################

  // Rating System to user 
  $(document).on('click', '.star_user_5', function (e) {
    e.preventDefault();
    var value = $(this).closest('.rating_system').find('.star_user_input_5').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    var form = $('.form_class_for_rating_user')
    var url = form.attr('action');
    console.log(url)
    console.log(value)
    $.ajax({
      method: "POST",
      url: url,
      data: {
        'value': value,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        alertify.success(response.status)
        // $('.average_rating').text(data.average_rating);
        $('.form_class_for_rating_user').load(location.href + ' .form_class_for_rating_user');
      }
    });
  });

  $(document).on('click', '.star_user_4', function (e) {
    e.preventDefault();
    var value = $(this).closest('.rating_system').find('.star_user_input_4').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    var form = $('.form_class_for_rating_user');
    var url = form.attr('action');
    console.log(url)
    console.log(value)
    $.ajax({
      method: "POST",
      url: url,
      data: {
        'value': value,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        console.log(value)
        alertify.success(response.status)
        // $('.average_rating').text(data.average_rating);
        $('.form_class_for_rating_user').load(location.href + ' .form_class_for_rating_user');
      }
    });
  });

  $(document).on('click', '.star_user_3', function (e) {
    e.preventDefault();
    var value = $(this).closest('.rating_system').find('.star_user_input_3').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    var form = $('.form_class_for_rating_user')
    var url = form.attr('action');
    console.log(url)
    console.log(value)
    $.ajax({
      method: "POST",
      url: url,
      data: {
        'value': value,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        console.log(value)
        alertify.success(response.status)
        // $('.average_rating').text(data.average_rating);
        $('.form_class_for_rating_user').load(location.href + ' .form_class_for_rating_user');
      }
    });
  });

  $(document).on('click', '.star_user_2', function (e) {
    e.preventDefault();
    var value = $(this).closest('.rating_system').find('.star_user_input_2').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    var form = $('.form_class_for_rating_user')
    var url = form.attr('action');
    console.log(url)
    console.log(value)
    $.ajax({
      method: "POST",
      url: url,
      data: {
        'value': value,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        console.log(value)
        alertify.success(response.status)
        // $('.average_rating').text(data.average_rating);
        $('.form_class_for_rating_user').load(location.href + ' .form_class_for_rating_user');
      }
    });
  });

  $(document).on('click', '.star_user_1', function (e) {
    e.preventDefault();
    var value = $(this).closest('.rating_system').find('.star_user_input_1').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    var form = $('.form_class_for_rating_user')
    var url = form.attr('action');
    console.log(url)
    console.log(value)
    $.ajax({
      method: "POST",
      url: url,
      data: {
        'value': value,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        console.log(value)
        alertify.success(response.status)
        // $('.average_rating').text(data.average_rating);
        $('.form_class_for_rating_user').load(location.href + ' .form_class_for_rating_user');
      }
    });
  });

});


// #######################################
// Comments App  comment-sections
// #######################################
$(document).ready(function () {
  $('.send_comment').click(function (e) {
    e.preventDefault();
    var text = $(this).closest('.add_comment_sections').find('.text_id_in_comment').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();

    console.log(text)
    $.ajax({
      method: "POST",
      url: 'add_comment/',
      data: {
        'text': text,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        console.log(text)
        alertify.success(response.status)
        // $('.comment-sections').load(location.href + ' .comment-sections');
        $('#comment_sections').html(response.html);
        $('.add_comment_sections').load(location.href + ' .add_comment_sections');
      }
    });
  });

    // Delete Comment 
  $('.move_to_trash').click(function () {
      // var itemId = $(this).data('item-id');
    var comment_id = $(this).closest('#add_comment_sections').find('.comment_id').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();

      $.ajax({
        url: '/delete_comment/' + comment_id ,
        type: 'POST',
        dataType: 'json',
        data: {
          'comment_id': comment_id,
          'csrfmiddlewaretoken': token
        },
        success: function (response) {
          if (response.success) {
            // Update HTML content on success
            $('#comment_id_' + comment_id).remove();
          } else {
            console.log('Item removal failed.');
          }
        },
        error: function (xhr, status, error) {
          console.log('Error:', error);
        }
      });
    });

});

// #######################################
// Quotes App  
$(document).ready(function () {
  // $(document).on('click', '.send_quote', function (e) {
  $('.send_quote').click(function (e) {
    e.preventDefault();
    var text_quote = $(this).closest('.quotes_sections').find('.text_id_in_quote').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    $.ajax({
      method: "POST",
      url: 'add_quote/',
      data: {
        'text_quote': text_quote,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        alertify.success(response.status)
        $('#quotes_sections').load(location.href + ' #quotes_sections');
        $('#quotes_section').html(response.html);
      }
    });
  });

  // Delete quote
  $('.move_quote_to_trash').click(function () {
    // var itemId = $(this).data('item-id');
    var quote_id = $(this).closest('#add_quote_sections').find('.quote_id_in_quote').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    console.log(quote_id)
    $.ajax({
      url: '/delete_quote/' + quote_id,
      type: 'POST',
      dataType: 'json',
      data: {
        'quote_id': quote_id,
        'csrfmiddlewaretoken': token
      },
      success: function (response) {
        if (response.success) {
          // Update HTML content on success
          $('#quote_id_' + quote_id).remove();
        } else {
          console.log('Item removal failed.');
        }
      },
      error: function (xhr, status, error) {
        console.log('Error:', error);
      }
    });
  });

});

// #######################################
// Jquery tools
$(document).ready(function () {
  // Hover states on the static widgets
  $("#dialog-link, #icons li").hover(
    function () {
      $(this).addClass("ui-state-hover");
    },
    function () {
      $(this).removeClass("ui-state-hover");
    }
  );

  $("#dialog-link").click(function (event) {
    $("#dialog").dialog("open");
    event.preventDefault();
  });

  $("#dialog").dialog({
    autoOpen: false,
    width: 400,
    buttons: [
      {
        text: "Ok",
        click: function () {
          $(this).dialog("close");
        }
      },
      {
        text: "Cancel",
        click: function () {
          $(this).dialog("close");
        }
      }
    ]
  });

});



// #######################################
// Chatapp App 
$(document).ready(function () {
  // Hover states on the static widgets
  $(document).on('click', '.send_message', function (e) {
    e.preventDefault();
    var sender = $(this).closest('.body').find('.sender').val();
    var recever = $(this).closest('.body').find('.recever').val();
    var message_text = $(this).closest('.body').find('.message_text').val();
    var message_topic = $(this).closest('.body').find('.message_topic').val();
    var token = $("input[name=csrfmiddlewaretoken]").val();
    var url_message = $(this).closest('.body').find('.url_message').val();

    $.ajax({
      method: "POST",
      url: url_message,
      data: {
        'sender': sender,
        'recever': recever,
        'message_text': message_text,
        'message_topic': message_topic,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        alertify.success(response.status)
        // $('.message_text_in_user').empty();
      }
    });
    document.getElementById('message_text_in_user').value = ''
  });

});


// search App
$(document).ready(function () {
  $(document).on('click', '#searchproduct', function (e) {
    e.preventDefault();

  // $("#searchproduct").onfocus() =  $(function () {
    var availableTags = [];
    $.ajax({
      method: "GET",
      url: "book/book_list",
      success: function (response) {
        startAutocomplet(response);
        console.log(response)
      },
    });
    function startAutocomplet(availableTags) {
      $("#searchproduct").autocomplete({
        source: availableTags,
      });
    }
  });
});

// 

// Chatapp get messages 
$(document).ready(function () {
  $(document).on('click', '.reload_to_get_the_new_message', function (e) {
    e.preventDefault();


    // setInterval(function () {  
    var url_to_get_message = $('#url_to_get_message').val();
    var display_messages = $('#display_messages_in_user');

    $.ajax({
      type: "GET",
      url: url_to_get_message,
      success: function (response) {
        // console.log(response.messages)
        display_messages.empty();
        for (var key in response.messages) {
          // console.log(response.messages[key].message )
          var template = '<p class="message_text_in_display m-0">' + response.messages[key].message + '</p> <small class="left_time f-s-6 mt-2" >' + response.messages[key].create_at + '</small>'
          display_messages.append(template);
        }
      },
      error: function (response) {
        // alertify.success(response)
      }
    });
  // }, 10000);
  });
});



// Lessons App 
$(document).ready(function () {

  $('.category_id_in_frontpage_a').click(function (e){
    // var categorys_id = $("input[attr=category_id]").val();
    // var id = $(this).find("[attr=categorys_id]").val(); 
    var id = $(this).find(".category_class").val();
    // var id = $(".category_id_in_frontpage").val();
    var token = $("input[name=csrfmiddlewaretoken]").val();

    console.log(id) 
    $.ajax({
      type: "POST",
      url: "incres_the_views_to_categorey/" + id,
      data: {
        "categorys_id": id,
        'csrfmiddlewaretoken': token,
      },
      // $(selector).attr(attributeName);
      success: function (response) {
      },
    });
  });

  $('.add_to_favovert').click(function (e) {
    e.preventDefault();

    var lesson_id = $(this).find(".lesson_id").val();
    // var id = $(".category_id_in_frontpage").val();
    var token = $("input[name=csrfmiddlewaretoken]").val();

    console.log(lesson_id) 
    $.ajax({
      type: "POST",
      url: "/add_to_favforet/" + lesson_id,
      data: {
        "lesson_id": lesson_id,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        alertify.success(response.status)
      },
    });
  });


  $('.get_comments').click(function (e) {
    // e.preventDefault();
    // var lesson_id = $(this).find(".lesson_id").val();
    // var lesson = $(this).attr("lesson_id").closest();
    var lesson_id = $(this).attr("lesson_id");
    // var lesson_id = lesson.val();
    // var id = $(".category_id_in_frontpage").val();
    var token = $("input[name=csrfmiddlewaretoken]").val();

    console.log(lesson_id) 
    $.ajax({
      type: "POST",
      url: "/lesson_comments/" + lesson_id,
      data: {
        "lesson_id": lesson_id,
        'csrfmiddlewaretoken': token,
      },
      success: function (response) {
        alertify.success(response.status)
      },
    });
  });



});




// Carusel image 

$(document).ready(function () {
  const carouselItems = $(".carousel-item");
  const indicators = $(".carousel-indicators li");

  let currentIndex = 0;

  function toggleActiveClass() {
    carouselItems.eq(currentIndex).toggleClass("active");
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems.eq(currentIndex).toggleClass("active");
    indicators.removeClass("active");
    indicators.eq(currentIndex).addClass("active");
  }

  setInterval(toggleActiveClass, 3000);

  indicators.click(function () {
    const targetIndex = $(this).data("slide-to");
    if (targetIndex !== currentIndex) {
      carouselItems.eq(currentIndex).toggleClass("active");
      currentIndex = targetIndex;
      carouselItems.eq(currentIndex).toggleClass("active");
      indicators.removeClass("active");
      indicators.eq(currentIndex).addClass("active");
    }
  });

  // $('.carousel-control-next').click(function () {
  //     carouselItems.eq(currentIndex).toggleClass('active');
  //     currentIndex = (currentIndex + 3) % carouselItems.length;
  //     carouselItems.eq(currentIndex).toggleClass('active');
  //     indicators.removeClass('active');
  //     indicators.eq(currentIndex).addClass('active');
  // });

  // $('.carousel-control-prev').click(function () {
  //     carouselItems.eq(currentIndex).toggleClass('active');
  //     currentIndex = (currentIndex - 3 + carouselItems.length) % carouselItems.length;
  //     carouselItems.eq(currentIndex).toggleClass('active');
  //     indicators.removeClass('active');
  //     indicators.eq(currentIndex).addClass('active');
  // });
});
