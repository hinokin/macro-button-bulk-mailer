function testtsksoudjlmlzsdfsz() {
 //var sheetmonth;
 var m = d2.getFullYear();
 Logger.log(m);
if(d2.getDate() == 1 && d2.getHours() < 2){
  if(d2.getMonth() == 1){
  var sheetmonth = 12;
  Logger.log(sheet.getSheetName());
  Logger.log(d2.getMonth());
  Logger.log(d2.getHours());
  }else{
    var sheetmonth = 1;
  }
}else{
  var sheetmonth = d.getMonth()+1;
}
// var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('List' + m + '/' + sheetmonth);
// Logger.log(sheet.getSheetName());
Logger.log(tody);
Logger.log(yesterday);
Logger.log(d2.getMonth());
var gy = sheet.getRange(sheet.getMaxRows(),2).getNextDataCell(SpreadsheetApp.Direction.UP).getRow();
var gyvl = sheet.getRange(gy,1).getValue();
Logger.log('gy :' + gy);
var st = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('List2021/フォーマット※編集禁止');
if(st){
  st.getRange(15,1).setValue(gyvl);
  st.getRange(15,4).setValue('`12:'+gy);
  Logger.log('シートがあります');
}else{
  Logger.log('シートがありません');
}
}

function koment(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('List2021/9');
  var range = sheet.getRange('B7831:O7831');
  sheet.setActiveRange(range);
}