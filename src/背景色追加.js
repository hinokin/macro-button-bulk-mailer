/* アドレスがある行のM列(DM)に背景色を追加する関数 */
function bgc() {
  //var count2 = 0;//件数100件まで
  for(var i = 0; i < rangeValues_t.length; i++){
    var address = String(rangeValues_t[i][7]).toLowerCase().trim();//メールアドレス
    var dmmark = rangeValues_t[i][9];//"DM"マーク
    var duplicate1 = rangeValues_t[i][1];//社名の重複数
    var duplicate2 = rangeValues_t[i][8];//アドレス・URLの重複数

      if(check.test(address) || check1.test(address)){
        var ad0 = address.replace(/＠/,"@");
        var ad1 = ad0.replace(/ /g,"");
        if(!(dmmark) && duplicate1 === 1 && duplicate2 === 1){
          Logger.log(dmmark);
          //count2++;
          sheet.getRange(i+fastrow_tody,13).setBackground('#4dd0e1');
          Logger.log(rangeValues_t[i][7]);
          //Logger.log(count2+'回目');
        }else if(!(dmmark === 'DM')){
          sheet.getRange(i+fastrow_tody,13).setValue('既に送信済み');
        }
      }
  }
}
