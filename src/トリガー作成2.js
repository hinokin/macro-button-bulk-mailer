/* トリガー作成2 */
function setTrigger2() {
  //現時刻+2分して残数確認（sendCheck()）を実行するトリガーを作成
  var time = new Date();
  var timeplus = time.getMinutes() + 2;
  time.setMinutes(timeplus);

  ScriptApp.newTrigger('sendCheck').timeBased().at(time).create();
}
