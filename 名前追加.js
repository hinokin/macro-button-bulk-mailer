function hnameadd() {
  var sheet =SpreadsheetApp.getActiveSpreadsheet();
  var sheet_old = sheet.getSheetByName('フォーマット※編集禁止');//コピー元シート名
  var datena = new Date().getMonth()+1;
  var sheet_new = sheet.getSheetByName('List' + year + '/' + datena);//コピー先シート名

  //var lastlow = sheet.getRange(sheet_old.getMaxRows(),3).getNextDataCell(SpreadsheetApp.Direction.UP).getRow();
  var hname = sheet_old.getRange('C12');
  var r = Browser.inputBox('何行追加しますか？');
  if(!(r == 'cancel')){
    var lastlow_new = sheet_new.getRange(sheet_new.getMaxRows(),3).getNextDataCell(SpreadsheetApp.Direction.UP).getRow();
    var newhname = sheet_new.getRange((lastlow_new+1),3,r,1);
    hname.copyTo(newhname);
  }else{
    return;
  }
}
function tnameadd() {
  var sheet =SpreadsheetApp.getActiveSpreadsheet();
  var sheet_old = sheet.getSheetByName('フォーマット※編集禁止');
  var datena = new Date().getMonth()+1;
  var sheet_new = sheet.getSheetByName('List' + year + '/' + datena);

  //var lastlow = sheet_old.getRange(sheet_old.getMaxRows(),3).getNextDataCell(SpreadsheetApp.Direction.UP).getRow();
  var tname = sheet_old.getRange('C13');
  var r = Browser.inputBox('何行追加しますか？');
  if(!(r == 'cancel')){
    var lastlow_new = sheet_new.getRange(sheet_new.getMaxRows(),3).getNextDataCell(SpreadsheetApp.Direction.UP).getRow();
    var newtname = sheet_new.getRange((lastlow_new+1),3,r,1);
    tname.copyTo(newtname);
  }else{
    return;
  }
}