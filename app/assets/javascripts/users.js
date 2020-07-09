$(function(){

  function appendUser(user) {
    var html = `
                <div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>`
    $("#user-search-result").append(html);
  }

  function appendErrMsgToHTML() {
    var html = `
               <div class="chat-group-user clearfix">
                <p class="chat-group-user__name">ユーザーが見つかりません</p>
               </div>`
    $("#user-search-result").append(html);
  }
  function addUserDelete(userId,userName) {
    var html = `
              <div class="chat-group-user clearfix" id="${userId}">
                <p class="chat-group-user__name">${userName}</p>
                <div class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn" data-user-id="${userId}" data-user-name="${userName}">削除</div>
              </div>`;
    $(".js-add-user").append(html);
  }
  function addMember(userId) {
    let html = `<input value="${userId}" name="group[user_ids][]" type="hidden" id="group_user_ids_${userId}" />`;
    $(`#${userId}`).append(html);
  }
  $("#user-search-field").on("keyup", function(){
    var input = $("#user-search-field").val();
    $.ajax({
      type: "GET",
      url: "/users",
      data: { keyword: input },
      dataType: "json"
    })
    .done(function(users){
      $("#user-search-result").empty();
      if(users.length !== 0 ){
        users.forEach(function(user){
          appendUser(user);
        });
      } else if (input.length == 0) {
        return false ;
      } else { 
        appendErrMsgToHTML("ユーザーが見つかりません");
      }
    })

    .fail(function(){
      alert("ユーザーの検索に失敗しました");
    });
  });
  $(".chat-group-form__field--right").on("click", ".chat-group-user__btn--add", function(){
    $(this)
      .parent()
      .remove();
    var userId = $(this).attr("data-user-id");

    var userName = $(this).attr("data-user-name");
    addUserDelete(userId, userName);
    addMember(userId);

  });
  $(".chat-group-form__field--right").on("click", ".js-remove-btn", function(){
    $(this)
      .parent()
      .remove();
  })
});

