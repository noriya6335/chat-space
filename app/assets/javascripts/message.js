$(function(){
  function buildHTML(message){
    if (message.image){
      var html = 
      `<div class="message">
        <div class="messages__user">
          <div class="messages__user--name">
            ${message.user_name}
          </div>
          <div class="messages__user--time">
            ${message.created_at}
          </div>
        </div>
        <div class="messages__text">
        <p>
            ${message.body}
        </p>
        </div>
        <img src=${message.image}>
      </div>`
      return html;
    } else {
      var html = 
      `<div class="message">
        <div class="messages__user">
          <div class="messages__user--name">
            ${message.user_name}
          </div>
          <div class="messages__user--time">
            ${message.created_at}
          </div>
        </div>
        <div class="messages__text">
          <p>
            ${message.body}
          </p>
        </div>
      </div>`
      return html;
    };
  }
  $("#new_message").on("submit", function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr("action");
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $(".messages").append(html);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $("form")[0].reset();
      $(".submit-btn").prop("disabled",false)
    })
    .fail(function(){
      $(".submit-btn").prop("disabled",false)
      alert("メッセージ送信に失敗しました。");
    });
  });
});
