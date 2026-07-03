/* 送信確認　*/

/*
  ・業界追加時フォーマット （//丸数字とリンク）
  ①
  var 業界名(変更箇所)_ken = 0;//新規業界(変更箇所)件数
  var 業界名(変更箇所)_list = [];//新規業界(変更箇所)の社名リスト

  ②
  case /(?:^業界名$)/.test(gyoukai)://(変更箇所)
              業界名(変更箇所)_list.push([kaisyaname]);
              ken++;
              業界名(変更箇所)_ken++; 
              count3++
              break;
  
  ③
  + '\\n\\n'+'業界名(変更箇所)  :   ' + 業界名(変更箇所)_ken + '   件'+'\\n'+ 業界名(変更箇所)_list.toString()

 */
function kakunin(listnum){
  var count3 = 0;//1回の送信数で決定（オープン.gs）参照
  var ken = 0;//合計件数
  var rm2 = MailApp.getRemainingDailyQuota();//送信可能件数

  //各種類の件数とリストの配列を宣言  //①
{
  var all_ken = 0;//オール件数
  var all_list = [];//オールの社名リスト
  var douga_ken = 0;//動画・映像件数
  var eat_ken = 0;//飲食件数
  var douga_list = [];//動画・映像の社名リスト
  var eat_list = [];//飲食の社名リスト
  var teachi_ken = 0;//教育件数
  var teachi_list = [];//教育の社名リスト
  var ad_ken = 0;//広告件数
  var ad_list = [];//広告の社名リスト
  var ent_ken = 0;//エンタメ件数
  var ent_list = [];//エンタメの社名リスト
  var consul_ken = 0;//コンサル件数
  var consul_list = [];//コンサルの社名リスト
  var fitness_ken = 0;//フィットネス件数
  var fitness_list = [];//フィットネスの社名リスト
  var adflyer_ken = 0;//広告チラシ件数
  var adflyer_list = [];//広告チラシの社名リスト
  var event_ken = 0;//イベント件数
  var event_list = [];//イベントの社名リスト
  var medical_ken = 0;//医療件数
  var medical_list = [];//医療の社名リスト
  var humanre_ken = 0;//人材件数
  var humanre_list = [];//人材の社名リスト
  var realestate_ken = 0;//不動産件数
  var realestate_list = [];//不動産の社名リスト
  var it_ken = 0;//IT件数
  var it_list = [];//ITの社名リスト
  var video2022_ken = 0;//新・動画件数
  var video2022_list = [];//新・動画の社名リスト
  var ytso_ken = 0;//YouTube_so件数
  var ytso_list = [];//YouTube_soの社名リスト
  var interv_ken = 0;//インタビュー取材件数
  var interv_list = [];//インタビュー取材の社名リスト
  var ChatGPT_ken = 0;//ChatGPT件数
  var ChatGPT_list = [];//ChatGPTの社名リスト
}

  //各種類を選別
  if((rm2 - 50) > sendmaxval){//（送信可能件数-50）が1回の送信数より多ければ送信可能
    for(var j = 0; j < rangeValues_t.length; j++){
      var kaisyaname = rangeValues_t[j][0].toString();//会社名
      var gyoukai = rangeValues_t[j][2];//業界名
      var address = String(rangeValues_t[j][7]).toLowerCase().trim();//メールアドレス
      var dmmark = rangeValues_t[j][9];//"DM"マーク
      var duplicate1 = rangeValues_t[j][1];//社名の重複数
      var duplicate2 = rangeValues_t[j][8];//アドレス・URLの重複数

      if(count3 < sendmaxval){
        if(check.test(address) || check1.test(address)){
          // var ad0 = address.replace(/＠/,"@");
          // var ad1 = ad0.replace(/ /g,"").replace(/　/g,"");
          if(!(dmmark) && duplicate1 === 1 && duplicate2 === 1){
            switch(true){//②              
              case /(?:^オール$)/.test(gyoukai):
                all_list.push([kaisyaname]);
                ken++;
                all_ken++; 
                count3++
                break;
              case /(?:^動画・映像$)/.test(gyoukai):
                douga_list.push([kaisyaname]);
                ken++;
                douga_ken++;
                count3++
                break;
              case /(?:^飲食$)/.test(gyoukai):
                eat_list.push([kaisyaname]);
                ken++;
                eat_ken++; 
                count3++
                break;
              case /(?:^教育$)/.test(gyoukai):
                teachi_list.push([kaisyaname]);
                ken++;
                teachi_ken++; 
                count3++
                break;
              case /(?:^広告$)/.test(gyoukai):
                ad_list.push([kaisyaname]);
                ken++;
                ad_ken++; 
                count3++
                break;
              case /(?:^エンタメ$)/.test(gyoukai):
                ent_list.push([kaisyaname]);
                ken++;
                ent_ken++; 
                count3++
                break;
              case /(?:^コンサル$)/.test(gyoukai):
                consul_list.push([kaisyaname]);
                ken++;
                consul_ken++; 
                count3++
                break;
              case /(?:^フィットネス$)/.test(gyoukai):
                fitness_list.push([kaisyaname]);
                ken++;
                fitness_ken++; 
                count3++
                break;
              case /(?:^広告チラシ$)/.test(gyoukai):
                adflyer_list.push([kaisyaname]);
                ken++;
                adflyer_ken++; 
                count3++
                break;
              case /(?:^イベント$)/.test(gyoukai):
                event_list.push([kaisyaname]);
                ken++;
                event_ken++; 
                count3++
                break;
              case /(?:^医療$)/.test(gyoukai):
                medical_list.push([kaisyaname]);
                ken++;
                medical_ken++; 
                count3++
                break;
              case /(?:^人材$)/.test(gyoukai):
                humanre_list.push([kaisyaname]);
                ken++;
                humanre_ken++; 
                count3++
                break;
              case /(?:^不動産$)/.test(gyoukai):
                realestate_list.push([kaisyaname]);
                ken++;
                realestate_ken++; 
                count3++
                break;
              case /(?:^IT$)/i.test(gyoukai):
                it_list.push([kaisyaname]);
                ken++;
                it_ken++; 
                count3++
                break;
              case /(?:^新・動画$)/.test(gyoukai):
                video2022_list.push([kaisyaname]);
                ken++;
                video2022_ken++; 
                count3++
                break;
              case /(?:^YT_so$)/.test(gyoukai)://
                ytso_list.push([kaisyaname]);
                ken++;
                ytso_ken++; 
                count3++
                break;
              case /(?:^取材$)/.test(gyoukai)://
                interv_list.push([kaisyaname]);
                ken++;
                interv_ken++; 
                count3++
                break;
              case /(?:^ChatGPT$)/.test(gyoukai)://
                ChatGPT_list.push([kaisyaname]);
                ken++;
                ChatGPT_ken++; 
                count3++
                break;  
            }
          }
        }
      }
    }
  }else{
    Browser.msgBox("送信残数が少ないので送信キャンセルしました。"+ "\\n" + "送信残数：" + rm2 + "  件");
  }

  //合計数が0じゃなければOKを押すと送信
  if(!((ken) === 0)){
      //  各種類の合計数とリストを表示  //③
      var msg = '動画・映像  :   '+ douga_ken + '   件' + '\\n' + douga_list.toString()
              + '\\n\\n'+'飲食  :   ' + eat_ken + '   件'+'\\n'+ eat_list.toString()
              + '\\n\\n'+'教育  :   ' + teachi_ken + '   件'+'\\n'+ teachi_list.toString()
              + '\\n\\n'+'広告  :   ' + ad_ken + '   件'+'\\n'+ ad_list.toString()
              + '\\n\\n'+'エンタメ  :   ' + ent_ken + '   件'+'\\n'+ ent_list.toString()
              + '\\n\\n'+'コンサル  :   ' + consul_ken + '   件'+'\\n'+ consul_list.toString()
              + '\\n\\n'+'フィットネス  :   ' + fitness_ken + '   件'+'\\n'+ fitness_list.toString()
              + '\\n\\n'+'広告チラシ  :   ' + adflyer_ken + '   件'+'\\n'+ adflyer_list.toString()
              + '\\n\\n'+'イベント  :   ' + event_ken + '   件'+'\\n'+ event_list.toString()
              + '\\n\\n'+'医療  :   ' + medical_ken + '   件'+'\\n'+ medical_list.toString()
              + '\\n\\n'+'人材  :   ' + humanre_ken + '   件'+'\\n'+ humanre_list.toString()
              + '\\n\\n'+'不動産  :   ' + realestate_ken + '   件'+'\\n'+ realestate_list.toString()
              + '\\n\\n'+'IT  :   ' + it_ken + '   件'+'\\n'+ it_list.toString()
              + '\\n\\n'+'オール:   ' + all_ken + '   件'+'\\n'+ all_list.toString()
              + '\\n\\n'+'新・動画  :   ' + video2022_ken + '   件'+'\\n'+ video2022_list.toString()
              + '\\n\\n'+'YouTube_so  :   ' + ytso_ken + '   件'+'\\n'+ ytso_list.toString()
              + '\\n\\n'+'取材  :   ' + interv_ken + '   件'+'\\n'+ interv_list.toString()
              + '\\n\\n'+'ChatGPT  :   ' + ChatGPT_ken + '   件'+'\\n'+ ChatGPT_list.toString()
              ;
      var msg1 = '\\n\\n'+'合計  :   ' + (ken) + '   件に送信しますがよろしいでしょうか？';

      var ok_can = Browser.msgBox(msg + msg1,Browser.Buttons.OK_CANCEL);

      if(ok_can === 'ok'){
        mail(listnum);
      }else{
        Browser.msgBox('送信をキャンセルしました。');
        Logger.log('送信をキャンセルしました。       送信確認1');
      }
  }else{
    Browser.msgBox('送信先がありません。');
    Logger.log('送信をキャンセルしました。       送信確認2');
  }
}