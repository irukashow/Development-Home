/* 
 *  D&Dによるファイルアップロード
 */
$(function(){
  /*================================================
    ファイルをドロップした時の処理
  =================================================*/
  $('#drag-area').bind('drop', function(e){
    // デフォルトの挙動を停止
    e.preventDefault();
 
    // ファイル情報を取得
    var files = e.originalEvent.dataTransfer.files;
 
    uploadFiles(files);
 
  }).bind('dragenter', function(){
    // デフォルトの挙動を停止
    return false;
  }).bind('dragover', function(){
    // デフォルトの挙動を停止
    return false;
  });
 
  /*================================================
    ダミーボタンを押した時の処理
  =================================================*/
  $('#btn').click(function() {
    // ダミーボタンとinput[type="file"]を連動
    $('input[type="file"]').click();
  });
 
  $('input[type="file"]').change(function(){
    // ファイル情報を取得
    var files = this.files;
 
    uploadFiles(files);
  });
 
});
 
/*================================================
  アップロード処理
=================================================*/
function uploadFiles(files) {
  // FormDataオブジェクトを用意
  var fd = new FormData();
 
  // ファイルの個数を取得
  var filesLength = files.length;
 
  // ファイル情報を追加
  for (var i = 0; i < filesLength; i++) {
    fd.append("files[]", files[i]);
  }
 
  // Ajaxでアップロード処理をするファイルへ内容渡す
  $.ajax({
    url: 'アップロード処理をするファイルのパス',
    type: 'POST',
    data: fd,
    processData: false,
    contentType: false,
    success: function(data) {
      console.log('ファイルがアップロードされました。');
    }
  });
}

/*
 *  拡張子チェック
 */
function fileCheck(element, after){
	var fileTypes = new Array();
	fileTypes = element.value.split(".");
	var fileType = fileTypes[fileTypes.length - 1].toLowerCase();
	if(fileType != ""){
            if (fileType != after) {
                alert(after + "ファイルを選択して下さい。");
                element.value = '';
            }
	}
	else{
		alert("ファイルを選択して下さい。");
	}
	return false;
}