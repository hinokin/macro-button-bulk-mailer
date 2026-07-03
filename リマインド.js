/* メール送信確認のリマインド（外部公開用リファクタリング版） */
function remind() {
  // --- 外部公開用マスク（実運用時はPropertiesService等の利用を推奨） ---
  const ADMIN_EMAIL = "admin-user@example.com";
  const CC_EMAIL = "sub-admin@example.com";
  // -----------------------------------------------------------

  var dmc = 0;//dm件数
  if(day_y === 1){
    var rangeValues_dm = sheet.getRange(sheet.getRange(fastrow_yest,13,gyousu_y,1).getA1Notation()).getValues();
    for(var i = 0 ; i < rangeValues_dm.length ; i++){
      var vdm = rangeValues_dm[i][0];
      if(vdm === 'DM'){
        dmc++;
      }
    }
  }

  var sheet_re = SpreadsheetApp.getActiveSpreadsheet();
  var sheetname = sheet_re.getName();
  var sheet_url = "https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID_HERE/edit"; // URLもマスク
  var daat = new Date();
  var hiduke = Utilities.formatDate(daat,'Asia/Tokyo','MM/dd');

  var lr4 = sheet.getRange(sheet.getMaxRows(),7).getNextDataCell(SpreadsheetApp.Direction.UP).getRow();
  var lr_val4 = sheet.getRange(lr4,7).getValue().toString();
  var lr_val_slid4 = lr_val4.substr(0,5);
  
  if(hiduke === lr_val_slid4){
    var lr3 = sheet.getRange(sheet.getMaxRows(),7).getNextDataCell(SpreadsheetApp.Direction.UP).getRow()-1;
    var lr2 = sheet.getRange(sheet.getMaxRows(),7).getNextDataCell(SpreadsheetApp.Direction.UP).getRow()-2;
    var lr1 = sheet.getRange(sheet.getMaxRows(),7).getNextDataCell(SpreadsheetApp.Direction.UP).getRow()-3;
    var lr_val3 = sheet.getRange(lr3,7).getValue().toString();
    var lr_val2 = sheet.getRange(lr2,7).getValue().toString();
    var lr_val1 = sheet.getRange(lr1,7).getValue().toString();
    
    var mailText1 = lr_val1 + '\n' + lr_val2 + '\n' + lr_val3 + '\n' + lr_val4
                 + '\n' + '合計 :' + dmc + ' 件'
                 + '\n\n' + sheetname
                 + '\n' + sheet_url;
                 
    // マスクした変数を使用して送信
    GmailApp.sendEmail(ADMIN_EMAIL, '送信確認', mailText1, {cc: CC_EMAIL, name: 'メール送信リマインド'});
  }
}