/* 自動送信 */

/* 
  ・業界追加時フォーマット（//丸数字とリンク）

  ①下記の業界名を変更する
  var doc_業界名(変更箇所) = DocumentApp.openById('追加するドキュメントID');//数字.★使用するドキュメントシートのIDを記入（新規業界名(変更箇所)）
  var subject_業界名(変更箇所) = doc_業界名(変更箇所).getName();
  var text_業界名(変更箇所) = doc_業界名(変更箇所).getBody().getText();

  ②業界名の頭文字を付ける
  var 新規業界名(変更箇所)kensu = 0;//新規業界件数

  ③
  case /(?:^業界名$)/.test(gyoukai)://(変更箇所)
              Logger.log('No'+`${i+listnum}`+'　⑤（上の丸数字+1）(変更箇所)：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"新規業界(変更箇所)"のリスト
              subject = subject_業界名(変更箇所);
              replacedText = text_業界名(変更箇所).replace('{kaisyaname}', kaisyaname);
              kensu++;
              新規業界名(変更箇所)kensu++;
              count1++;
              break;
  
  ④送信アドレス要確認　※変更時のみ、管理者に必ず確認※
  sendEmail()のオプションfrom:''
  
  ⑤
  + '  新規業界名（変更箇所）  :   ' + 新規業界名(変更箇所)kensu + '   件'


*/
function mailauto(listnum) {
  //ドキュメントから件名と本文を取得　//①
{
  var doc_video = DocumentApp.openById('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');//1.★使用するドキュメントシートのIDを記入（動画・映像）
  var subject_video = doc_video.getName();
  var text_video = doc_video.getBody().getText();

  var doc_eat = DocumentApp.openById('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');//2.★使用するドキュメントシートのIDを記入（飲食）
  var subject_eat = doc_eat.getName();
  var text_eat = doc_eat.getBody().getText();

  var doc_teachi = DocumentApp.openById('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');//3.★使用するドキュメントシートのIDを記入（教育）
  var subject_teachi = doc_teachi.getName();
  var text_teachi = doc_teachi.getBody().getText();

  var doc_ad = DocumentApp.openById('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');//4.★使用するドキュメントシートのIDを記入（広告）
  var subject_ad = doc_ad.getName();
  var text_ad = doc_ad.getBody().getText();

  var doc_ent = DocumentApp.openById('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');//5.★使用するドキュメントシートのIDを記入（エンタメ）
  var subject_ent = doc_ent.getName();
  var text_ent = doc_ent.getBody().getText();

  var doc_consul = DocumentApp.openById('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');//6.★使用するドキュメントシートのIDを記入（コンサル）コンサルティング・動画制作の協力ご相談
  var subject_consul = doc_consul.getName();
  var text_consul = doc_consul.getBody().getText();

  var doc_fitness = DocumentApp.openById('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');//7.★使用するドキュメントシートのIDを記入（フィットネス）フィットネス系動画制作の協力の相談
  var subject_fitness = doc_fitness.getName();
  var text_fitness = doc_fitness.getBody().getText();

  var doc_adflyer = DocumentApp.openById('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');//8.★使用するドキュメントシートのIDを記入（広告チラシ）広告チラシ動画化サービスの協力のご相談
  var subject_adflyer = doc_adflyer.getName();
  var text_adflyer = doc_adflyer.getBody().getText();

  var doc_event = DocumentApp.openById('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');//9.★使用するドキュメントシートのIDを記入（イベント）イベント系動画制作の協力の相談
  var subject_event = doc_event.getName();
  var text_evetn = doc_event.getBody().getText();

  var doc_medical = DocumentApp.openById('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');//10.★使用するドキュメントシートのIDを記入（医療）医療系動画制作の協力の相談
  var subject_medical = doc_medical.getName();
  var text_medical = doc_medical.getBody().getText();

  var doc_humanre = DocumentApp.openById('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');//11.★使用するドキュメントシートのIDを記入（人材）人材系動画制作の協力のご相談
  var subject_humanre = doc_humanre.getName();
  var text_humanre = doc_humanre.getBody().getText();

  var doc_realestate = DocumentApp.openById('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');//12.★使用するドキュメントシートのIDを記入（不動産）
  var subject_realestate = doc_realestate.getName();
  var text_realestate = doc_realestate.getBody().getText();

  var doc_it = DocumentApp.openById('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');//13.★使用するドキュメントシートのIDを記入（IT）IT系動画制作の提案のご相談
  var subject_it = doc_it.getName();
  var text_it = doc_it.getBody().getText();

  var doc_video2022 = DocumentApp.openById('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');//数字.★使用するドキュメントシートのIDを記入（新・動画）2022年は【15秒のCM動画】を制作しませんか？
  var subject_video2022 = doc_video2022.getName();
  var text_video2022 = doc_video2022.getBody().getText();

  var doc_YTso = DocumentApp.openById('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');//16.★使用するドキュメントシートのIDを記入（YT_so）YouTubeチャンネル診断のご相談
  var subject_YTso = doc_YTso.getName();
  var text_YTso = doc_YTso.getBody().getText();

  var doc_interv = DocumentApp.openById('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');//17.★使用するドキュメントシートのIDを記入（インタビュー取材）
  var subject_interv = doc_interv.getName();
  var text_interv = doc_interv.getBody().getText();

  var doc_ChatGPT = DocumentApp.openById('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');//数字.★使用するドキュメントシートのIDを記入（新規業界名(変更箇所)）
  var subject_ChatGPT = doc_ChatGPT.getName();
  var text_ChatGPT = doc_ChatGPT.getBody().getText();
}

  //各種類の件数の変数を宣言  //②
{
  var count1 = 0;//件数100件まで
  var kensu = 0;//合計件数
  var dkensu = 0;//動画・映像件数
  var ekensu = 0;//飲食件数
  var tkensu = 0;//教育件数
  var adkensu = 0;//広告件数
  var entkensu = 0;//エンタメ件数
  var consulkensu = 0;//コンサル件数
  var fitnesskensu = 0;//フィットネス件数
  var adflyerkensu = 0;//広告チラシ件数
  var eventkensu = 0;//イベント件数
  var medicalkensu = 0;//医療件数
  var humanrekensu = 0;//人材件数
  var realestatekensu = 0;//不動産件数
  var itkensu = 0;//IT件数
  var video2022kensu = 0;//新規業界件数
  var ytsokensu = 0;//YouTube_stageon件数
  var intervkensu = 0;//インタビュー取材件数
  var ChatGPTkensu = 0;//新規業界件数

}

  for(var i = 0; i < rangeValues_y.length; i++){
    var kaisyaname = rangeValues_y[i][0].toString();//会社名
    var gyoukai = rangeValues_y[i][2];//業界名
    var address = String(rangeValues_y[i][7]).toLowerCase().trim();//メールアドレス
    var dmmark = rangeValues_y[i][9];//"DM"マーク
    var duplicate1 = rangeValues_y[i][1];//社名の重複数
    var duplicate2 = rangeValues_y[i][8];//アドレス・URLの重複数
    var subject,replacedText;//件名、本文

    if(count1 < sendmaxval){
      if(check.test(address) || check1.test(address)){
        //Logger.log('No'+`${i+1}`+' ①：'+rangeValues[i]);//アドレスがあるリスト
        var ad0 = address.replace(/＠/,"@");//全角の＠を半角の@に変換
        var ad1 = ad0.replace(/ /g,"").replace(/　/g,"");//アドレスの空白を削除
        if(!(dmmark)　&& duplicate1 === 1 && duplicate2 === 1){
          //Logger.log('No'+`${i+1}`+' ②：'+rangeValues[i]);//DMマークが空のリスト
          switch(true){//③            
            case /(?:^動画・映像$)/.test(gyoukai):
              Logger.log('No'+`${i+listnum}`+'　③：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"動画・映像"のリスト
              subject = subject_video;
              replacedText = text_video.replace('{kaisyaname}', kaisyaname);
              kensu++;
              dkensu++;
              count1++;
              break;
            case /(?:^飲食$)/.test(gyoukai):
              Logger.log('No'+`${i+listnum}`+'　④：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"飲食"のリスト
              subject = subject_eat;
              replacedText = text_eat.replace('{kaisyaname}', kaisyaname);
              kensu++;
              ekensu++;
              count1++;
              break;
            case /(?:^教育$)/.test(gyoukai):
              Logger.log('No'+`${i+listnum}`+'　⑤：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"教育"のリスト
              subject = subject_teachi;
              replacedText = text_teachi.replace('{kaisyaname}', kaisyaname);
              kensu++;
              tkensu++;
              count1++;
              break;
            case /(?:^広告$)/.test(gyoukai):
              Logger.log('No'+`${i+listnum}`+'　⑥：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"新規業界(変更箇所)"のリスト
              subject = subject_ad;
              replacedText = text_ad.replace('{kaisyaname}', kaisyaname);
              kensu++;
              adkensu++;
              count1++;
              break;
            case /(?:^エンタメ$)/.test(gyoukai):
              Logger.log('No'+`${i+listnum}`+'　⑦：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"エンタメ"のリスト
              subject = subject_ent;
              replacedText = text_ent.replace('{kaisyaname}', kaisyaname);
              kensu++;
              entkensu++;
              count1++;
              break;
            case /(?:^コンサル$)/.test(gyoukai):
              Logger.log('No'+`${i+listnum}`+'　⑧：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"コンサルティング"のリスト
              subject = subject_consul;
              replacedText = text_consul.replace('{kaisyaname}', kaisyaname);
              kensu++;
              consulkensu++;
              count1++;
              break;
            case /(?:^フィットネス$)/.test(gyoukai):
              Logger.log('No'+`${i+listnum}`+'　⑨：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"フィットネス"のリスト
              subject = subject_fitness;
              replacedText = text_fitness.replace('{kaisyaname}', kaisyaname);
              kensu++;
              fitnesskensu++;
              count1++;
              break;
            case /(?:^広告チラシ$)/.test(gyoukai):
              Logger.log('No'+`${i+listnum}`+'　⑩：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"広告チラシ"のリスト
              subject = subject_adflyer;
              replacedText = text_adflyer.replace('{kaisyaname}', kaisyaname);
              kensu++;
              adflyerkensu++;
              count1++;
              break;
            case /(?:^イベント$)/.test(gyoukai):
              Logger.log('No'+`${i+listnum}`+'　⑪：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"イベント"のリスト
              subject = subject_event;
              replacedText = text_evetn.replace('{kaisyaname}', kaisyaname);
              kensu++;
              eventkensu++;
              count1++;
              break;
            case /(?:^医療$)/.test(gyoukai):
              Logger.log('No'+`${i+listnum}`+'　⑫：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"医療"のリスト
              subject = subject_medical;
              replacedText = text_medical.replace('{kaisyaname}', kaisyaname);
              kensu++;
              medicalkensu++;
              count1++;
              break;
            case /(?:^人材$)/.test(gyoukai):
              Logger.log('No'+`${i+listnum}`+'　⑬：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"人材"のリスト
              subject = subject_humanre;
              replacedText = text_humanre.replace('{kaisyaname}', kaisyaname);
              kensu++;
              humanrekensu++;
              count1++;
              break;
            case /(?:^不動産$)/.test(gyoukai):
              Logger.log('No'+`${i+listnum}`+'　⑭：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"不動産"のリスト
              subject = subject_realestate;
              replacedText = text_realestate.replace('{kaisyaname}', kaisyaname);
              kensu++;
              realestatekensu++;
              count1++;
              break;
            case /(?:^IT$)/i.test(gyoukai)://
              Logger.log('No'+`${i+listnum}`+'　⑮：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"IT"のリスト
              subject = subject_it;
              replacedText = text_it.replace('{kaisyaname}', kaisyaname);
              kensu++;
              itkensu++;
              count1++;
              break;
            case /(?:^新・動画$)/.test(gyoukai)://
              Logger.log('No'+`${i+listnum}`+'　⑯：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"新・動画"のリスト
              subject = subject_video2022;
              replacedText = text_video2022.replace('{kaisyaname}', kaisyaname);
              kensu++;
              video2022kensu++;
              count1++;
              break;
            case /(?:^YT_so$)/.test(gyoukai)://
              Logger.log('No'+`${i+listnum}`+'　⑰：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"StageOn_YouTube"のリスト
              subject = subject_YTso;
              replacedText = text_YTso.replace('{kaisyaname}', kaisyaname);
              kensu++;
              ytsokensu++;
              count1++;
              break;
            case /(?:^取材$)/.test(gyoukai)://
              Logger.log('No'+`${i+listnum}`+'　⑱：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"インタービュー取材"のリスト
              subject = subject_interv;
              replacedText = text_interv.replace('{kaisyaname}', kaisyaname);
              kensu++;
              intervkensu++;
              count1++;
              break;
            case /(?:^ChatGPT$)/.test(gyoukai)://
              Logger.log('No'+`${i+listnum}`+'　⑲：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"ChatGPT"のリスト
              subject = subject_ChatGPT;
              replacedText = text_ChatGPT.replace('{kaisyaname}', kaisyaname);
              kensu++;
              ChatGPTkensu++;
              count1++;
              break;
          }
          GmailApp.sendEmail(ad1, subject, replacedText,{from:hsj4,name:'HINOKI STYLE JAPAN株式会社'});//④ ,from:
          sheet.getRange(i+fastrow_yest,13).setValue('DM').setBackground(null);
        }else if(!(dmmark === 'DM')){
          sheet.getRange(i+fastrow_yest,13).setValue('既に送信済み');
        }
      }
    }
  }

  //G列の最終行+1行取得
  var lastrow = sheet.getRange(sheet.getMaxRows(),7).getNextDataCell(SpreadsheetApp.Direction.UP).getRow()+1;

  if(!(kensu === 0)){
    //各種類の件数と合計数  //⑤
    var msg1 = '動画・映像  :   ' + dkensu + '   件'
             + '  飲食  :   ' + ekensu + '   件'
             + '  教育  :   ' + tkensu + '   件'
             + '  広告  :   ' + adkensu + '   件'
             + '  エンタメ  :   ' + entkensu + '   件'
             + '  コンサル  :   ' + consulkensu + '   件'
             + '  フィットネス  :   ' + fitnesskensu + '   件'
             + '  広告チラシ  :   ' + adflyerkensu + '   件'
             + '  イベント  :   ' + eventkensu + '   件'
             + '  医療  :   ' + medicalkensu + '   件'
             + '  人材  :   ' + humanrekensu + '   件'
             + '  不動産  :   ' + realestatekensu + '   件'
             + '  IT  :   ' + itkensu + '   件'
             + '  新・動画  :   ' + video2022kensu + '   件'
             + '  YouTube_so  :   ' + ytsokensu + '   件'
             + '  取材  :   ' + intervkensu + '   件'
             + '  ChatGPT  :   ' + ChatGPTkensu + '   件'
             ;
    Logger.log(msg1);
    Logger.log('合計  ：   ' + kensu + '   件');
    //当日のトリガーを削除,送信完了挿入
    delTrigger();
    sheet.getRange(lastrow,7).setValue(todyins + ':' + acount + ' : 送信完了');
  }else{
    //当日のトリガーを削除,送信なし挿入
    delTrigger();
    sheet.getRange(lastrow,7).setValue(todyins + ':' + acount + ' : 送信先なし');
    Logger.log('送信先がありませんでした。　　　　メール自動送信:エラー9');
  }
}  

