$(function (){
  var url = location.href;
  params = url.split("?");
  if( params.length === 1 ){
    $('#normalSort').css('color', 'red');
    $('#englishSort').css('color', 'red');
  }else{
    paramms = params[1].split("&");

    var paramArray = [];
    for ( i = 0; i < paramms.length; i++ ) {
      neet = paramms[i].split("=");
      paramArray.push(neet[0]);
      paramArray[neet[0]] = neet[1];
    }

    if(paramArray[0] === ""){
      $('#normalSort').css('color', 'red');
      $('#englishSort').css('color', 'red');
    }

    if(paramArray["sort_type"] === ""){
      $('#normalSort').css('color', 'red');
    }else
    if(paramArray["sort_type"] === "updated_at"){
      $('#reverseSort').css('color', 'red');
    }else
    if(paramArray["sort_type"] === "english"){
      if(paramArray["word_type"] === "ja"){
        $('#normalSort').css('color', 'red');
      }else{
        $('#alphabetSort').css('color', 'red');
      }
    };

    if(paramArray["word_type"] === "ja"){
      $('#japaneseSort').css('color', 'red');
    }else
    if(paramArray["word_type"] === "en"){
      $('#englishSort').css('color', 'red');
    }else
    if(paramArray["word_type"] === ""){
      $('#englishSort').css('color', 'red');
    };

    if(paramArray["complete_type"] === "complete"){
      $('#completeSort').css('color', 'red');
      $('li.word').css('color', 'white');
    };
  };

  $("body").on('click', 'button.sortButton', function(){
    var sortType = $(this).attr('data-sort-type');
    var wordType = $(this).attr('data-word-type');
    var completeType = $(this).attr('data-complete-type');
    window.location = "/?sort_type="+sortType+"&word_type="+wordType+"&complete_type="+completeType;

    if(sortType === ""){
      $('#normalSort').css('color', 'red');
      $('#alphabetSort').css('color', '');
      $('#reverseSort').css('color', '');
    }else
    if(sortType === "updated_at"){
      $('#reverseSort').css('color', 'red');
      $('#normalSort').css('color', '');
      $('#alphabetSort').css('color', '');
    }else
    if(sortType === "english"){
      $('#alphabetSort').css('color', 'red');
      $('#englishSort').css('color', 'red');
      $('#reverseSort').css('color', '');
      $('#normalSort').css('color', '');
      $('#japaneseSort').css('color', '');
    };

    if(wordType === "ja"){
      $('#japaneseSort').css('color', 'red');
      $('#englishSort').css('color', '');
      $('#alphabetSort').css('color', '');
    }else
    if(wordType === "en"){
      $('#englishSort').css('color', 'red');
      $('#japaneseSort').css('color', '');
    }else
    if(wordType === ""){
      $('#englishSort').css('color', 'red');
      $('#japaneseSort').css('color', '');
    };

    if(completeType === "complete"){
      $('#completeSort').css('color', 'red');
    }else
    if(completeType === ""){
      $('#completeSort').css('color', '');
    };
  });
})
