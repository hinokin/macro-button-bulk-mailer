/* リストの一番下に行を追加する */
function lastrowadd() {
  var lastrow = sheet.getRange(sheet.getMaxRows(),5).getNextDataCell(SpreadsheetApp.Direction.UP).getRow();
  var lastcolumn = sheet.getMaxColumns();
  var original = sheet.getRange(lastrow,1,1,lastcolumn);//コピー元
  sheet.insertRows((lastrow+1),300);//行を挿入　(開始行,何行)
  var cpto = sheet.getRange((lastrow+1),1,300,lastcolumn);//コピー先
  original.copyTo(cpto);
}