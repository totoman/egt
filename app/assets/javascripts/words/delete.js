$(function(){
  $( "#deletewordSuccess" ).dialog({
    autoOpen: false,
    show: "clip",
    hide: "fade",
    height: 50,
    closeOnEscape: true,
    draggable: false,
    position: {
      my: "center",
      at: "center",
      of: window
    },
    open: function(event, ui){
      setTimeout("$('#deletewordSuccess').dialog('close')",2500);
    }
  });
  $(".ui-dialog-titlebar").hide();

  $('body').on('click', '.deleteWord', function(){
    var word_id = $(this).parent('.menuWord').attr('data-word_id');

    $.ajax({
      url: '/words/' + word_id,
      type: 'DELETE',
      data: 'JSON',
      success: function(data){
        $( "#deletewordSuccess" ).parent().css({position:"fixed"}).end().dialog( "open" );
        $('body').find('ul#'+word_id).fadeOut('slow');
        var str_count = $('body').find('#newWordCount').text();
        var count = Number(str_count);
        $('#newWordCount').text(count-1);
      }
    })
  })
});
