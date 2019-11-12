jQuery(function($) {
   $('#main-form').on('submit', function(event) {
      if ( validateForm() ) { // если есть ошибки возвращает true
        event.preventDefault();
      }
    });
    
    function validateForm() {
      $(".text-error").remove();
      
      var name    = $("#name");
      var rv_name = /^[a-zA-Zа-яА-Я]+$/;
      if ( name.val().length < 4 || !rv_name.test(val)) {
        var v_name = true;
        name.after('<span class="text-error for-name">Имя должно быть больше 3 символов</span>');
        $(".for-name").css({top: name.position().top + name.outerHeight() + 2});
      } 
      $("#name").toggleClass('error', v_name );
      
      var reg     = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
      var phone    = $("#phone");
      var v_phone = phone.val()?false:true;
    
      if ( v_phone ) {
        phone.after('<span class="text-error for-phone">Введите свой номер телефона</span>');
        $(".for-phone").css({top: phone.position().top + phone.outerHeight() + 2});
      } else if ( !reg.test( phone.val() ) ) {
        v_phone = true;
        phone.after('<span class="text-error for-phone">Вы указали недопустимый номер телефона</span>');
        $(".for-phone").css({top: phone.position().top + phone.outerHeight() + 2});
      }
      $("#phone").toggleClass('error', v_phone );
      
      var project    = $("#project");
      if ( project.val().length < 50 ) {
        var v_project = true;
        project.after('<span class="text-error for-project" style="position: absolute; top: 440px; right: 70px;">Описание должно быть больше 50 символов</span>');
      } 
      $("#project").toggleClass('error', v_project );
      
      return ( v_name || v_phone || v_project );
    }
     
   });