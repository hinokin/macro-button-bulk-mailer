/* トリガー作成 */
function setTrigger() {
  var time = new Date();
  var hour = 0;//時
  var min = 0;//分
  var sec = 0;//秒
  var millsec = 0;//ミリ秒
  //var acount = '';//アカウント名
  
  //実行アカウントごとに時間指定 ★要時間確認
  switch(actUser){
    /*
    case hsj1:
      hour = 8;
      min = 30;
      break;
    case hsj2:
      hour = 8;
      min = 45;
      break;
    case hsj3:
      hour = 9;
      min = 0;
      break;
    */
    case hsj4:
      hour = 8;
      min = 0;
      break;
    default:
      Logger.log('hsj4以外で実行されたため終了します。　　　エラー12');
      return;
  }

  time.setHours(hour);
  time.setMinutes(min);
  time.setSeconds(sec);
  time.setMilliseconds(millsec);
  //上記の時間になったら残数確認（sendCheck()）を実行する
  ScriptApp.newTrigger('sendCheck').timeBased().at(time).create();
  var timeformat = Utilities.formatDate(time,'Asia/Tokyo','M/d-H:mm');
  Logger.log(acount + 'を' + timeformat + 'に'　+ '残数確認をします');
}
