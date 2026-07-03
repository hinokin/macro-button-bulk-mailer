/* 現時刻の送信残数確認 */
function sendCheck() {
  //実行アカウントの当日の残送信数
  var rdq = MailApp.getRemainingDailyQuota();
  Logger.log(actUser + 'の送信可能件数　:' + rdq);

  //前日のリストがあれば送信。なければ送信なし
  if(day_y === 1){
    /*
    //残数が100であればメール送信。100より少なければ、トリガーを削除して新しいトリガーを作成
    if(rdq >= 50){
      sendmailauto();
    }else{
      delTrigger();
      setTrigger2();    
    }
    */
    sendmailauto();
  }else{
    //G列の最終行+1セルに送信先なしの合図
    var lastrow = sheet.getRange(sheet.getMaxRows(),7).getNextDataCell(SpreadsheetApp.Direction.UP).getRow()+1;
    sheet.getRange(lastrow,7).setValue(todyins + ':' + acount + ' : 送信先なし');
    Logger.log('前日の日付'+yesterday+'がないか、日付が"書式なしテキスト"になっていません　　　　エラー10');
    delTrigger();
  }
}
