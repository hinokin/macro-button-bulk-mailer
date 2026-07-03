/* 送信完了の合図 */
function sendCompleteInsert(cou) {
  if(!cou){
    cou = 0;
  }
  var rdq = MailApp.getRemainingDailyQuota();

  //G列の最終行+1セルに送信完了の合図
  var lastrow = sheet.getRange(sheet.getMaxRows(),7).getNextDataCell(SpreadsheetApp.Direction.UP).getRow()+1;
  if(!(rdq === 1500)){
    sheet.getRange(lastrow,7).setValue(todyins + ':' + acount + ' : 送信完了' + '  ' + cou + '件');
  }else{
    sheet.getRange(lastrow,7).setValue(todyins + ':' + acount + ' : 送信先なし');
  }
}
