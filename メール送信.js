/* メールを送信する関数 */

/*
  ・業界追加時フォーマット （//丸数字とリンク）

  ①下記の業界名を変更する
  var doc_業界名(変更箇所) = DocumentApp.openById('追加するドキュメントID');//数字.★使用するドキュメントシートのIDを記入（業界名）
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

  ⑤ //追記する
  + '  新規業界名（変更箇所）  :   ' + 新規業界名(変更箇所)kensu + '   件'

 */
function mail(listnum){
  //実行許可
  var acceptedUsers = [hsj1,hsj2,hsj3,hsj4,hsj6];//★

  var activeUser = Session.getActiveUser().getEmail();

  if(acceptedUsers.indexOf(activeUser) == -1) {
    Logger.log('HSJまたはサブHSJアカウトでログインしていない為、終了しました。　　　メール送信3')
    Browser.msgBox('あなたには実行権限がありません。'+'\\n'+'実行できるのはHSJまたはサブHSJのみです。'+'\\n\\n'+'エラー3');
    return;
  }

  //ドキュメントから件名と本文を取得　//①
{
  var doc_video = DocumentApp.openById('1JYwOK_rNEhx0rAI7YF2CooVSJBSbBk-UcKk54PrDkgs');//1.★使用するドキュメントシートのIDを記入（動画・映像）動画制作の協力の相談
  var subject_video = doc_video.getName();
  var text_video = doc_video.getBody().getText();

  var doc_eat = DocumentApp.openById('1_gcWpnFBwktNnvfw5Vbmw_Uiw3FLFQT7gSAfDJBSjrE');//2.★使用するドキュメントシートのIDを記入（飲食）飲食系の動画制作のご相談
  var subject_eat = doc_eat.getName();
  var text_eat = doc_eat.getBody().getText();

  var doc_teachi = DocumentApp.openById('1530UeYoV603lHAXEfpfczKZwMDOFBZC0j_PMqQ9WiPc');//3.★使用するドキュメントシートのIDを記入（教育）教育系動画制作のご相談
  var subject_teachi = doc_teachi.getName();
  var text_teachi = doc_teachi.getBody().getText();

  var doc_ad = DocumentApp.openById('1wxxysbZ2KT0FKqgq7Xz5yJJveeeWrbPBnx8vmBR3Am0');//4.★使用するドキュメントシートのIDを記入（広告）広告系の動画制作のご相談
  var subject_ad = doc_ad.getName();
  var text_ad = doc_ad.getBody().getText();

  var doc_ent = DocumentApp.openById('1GiwwoCaNBYmMMjo_KLjVr0Pgjb2v5ObnFt1_SuOF_Fs');//5.★使用するドキュメントシートのIDを記入（エンタメ）エンタメ系の動画制作のご相談
  var subject_ent = doc_ent.getName();
  var text_ent = doc_ent.getBody().getText();

  var doc_consul = DocumentApp.openById('1If1kBcI83L8al1PHGAy2mQGMUsUQzhn8FPx0sNRx6ig');//6.★使用するドキュメントシートのIDを記入（コンサル）コンサルティング・動画制作の協力ご相談
  var subject_consul = doc_consul.getName();
  var text_consul = doc_consul.getBody().getText();

  var doc_fitness = DocumentApp.openById('1wbXtQJjYqC-Y2NQg8mJ0mXN_1c_cpv2O-jDuGSZkgtg');//7.★使用するドキュメントシートのIDを記入（フィットネス）フィットネス系動画制作の協力の相談
  var subject_fitness = doc_fitness.getName();
  var text_fitness = doc_fitness.getBody().getText();

  var doc_adflyer = DocumentApp.openById('189IHMWSlnRCBnTk8ttnkAyImcbNuWRMPMpT0QuS28DM');//8.★使用するドキュメントシートのIDを記入（広告チラシ）広告チラシ動画化サービスの協力のご相談
  var subject_adflyer = doc_adflyer.getName();
  var text_adflyer = doc_adflyer.getBody().getText();

  var doc_event = DocumentApp.openById('1OjmEGX8-mK762ohu9Bc9p0GBnD1Jrj74cgxs541AlJc');//9.★使用するドキュメントシートのIDを記入（イベント）イベント系動画制作の協力の相談
  var subject_event = doc_event.getName();
  var text_evetn = doc_event.getBody().getText();

  var doc_medical = DocumentApp.openById('189We5POiTsb-62lYx4D_24I6vNlrcoztjFnykloLqkg');//10.★使用するドキュメントシートのIDを記入（医療）医療系動画制作の協力の相談
  var subject_medical = doc_medical.getName();
  var text_medical = doc_medical.getBody().getText();  

  var doc_humanre = DocumentApp.openById('1L5PoWdO4PvKWmh1uSK4KZPxUDxaBuZ5qxK0enueqN6E');//11.★使用するドキュメントシートのIDを記入（人材）人材系動画制作の協力のご相談
  var subject_humanre = doc_humanre.getName();
  var text_humanre = doc_humanre.getBody().getText();

  var doc_realestate = DocumentApp.openById('1-lVjo3dmuL0VuKnrGpFpdamM7sgP2WOsjhq3giAhhFw');//12.★使用するドキュメントシートのIDを記入（不動産）
  var subject_realestate = doc_realestate.getName();
  var text_realestate = doc_realestate.getBody().getText();

  var doc_it = DocumentApp.openById('1gkHCDutiFw_gSLSUFK_j7pH4UFRVqePp2c6asAeKd98');//13.★使用するドキュメントシートのIDを記入（IT）IT系動画制作の提案のご相談
  var subject_it = doc_it.getName();
  var text_it = doc_it.getBody().getText();

  var doc_all = DocumentApp.openById('1JYwOK_rNEhx0rAI7YF2CooVSJBSbBk-UcKk54PrDkgs');//14.★使用するドキュメントシートのIDを記入（オール）動画制作の協力の相談
  var subject_all = doc_all.getName();
  var text_all = doc_all.getBody().getText();

  var doc_video2022 = DocumentApp.openById('1rbA3euh-3bIvt9NAZUmLqqLDVO-LbLNU3al-U6o--oM');//15.★使用するドキュメントシートのIDを記入（新・動画）2022年は【15秒のCM動画】を制作しませんか？
  var subject_video2022 = doc_video2022.getName();
  var text_video2022 = doc_video2022.getBody().getText();

  var doc_YTso = DocumentApp.openById('1RpdmW0MOl0UQk3surxGnVXSLk6D9O5npeAOksJR6vaw');//16.★使用するドキュメントシートのIDを記入（YouTubeチャンネル診断のご相談）
  var subject_YTso = doc_YTso.getName();
  var text_YTso = doc_YTso.getBody().getText();
  
  var doc_interv = DocumentApp.openById('1fdpBqLobbLmjj361seswq1PGp22m_VXSC3U2cuRgxK8');//17.★使用するドキュメントシートのIDを記入（インタビュー取材のご相談）
  var subject_interv = doc_interv.getName();
  var text_interv = doc_interv.getBody().getText();

  var doc_ChatGPT = DocumentApp.openById('1Xk4LA6Qfg2HULU97-RqEunkOL5R9CgVMwRW8SNACCkw');//数字.★使用するドキュメントシートのIDを記入（ChatGPT）
  var subject_ChatGPT = doc_ChatGPT.getName();
  var text_ChatGPT = doc_ChatGPT.getBody().getText();  
}

  //各種類の件数の変数を宣言  //②
{
  var count1 = 0;//1回の送信数で決定（オープン.gs）参照
  var kensu = 0;//合計件数
  var video2022kensu = 0;//新規業界件数
  var allkensu = 0;//オール件数
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
  var ytsokensu = 0;//YouTube_stageon件数
  var intervkensu = 0;//インタビュー取材件数
  var ChatGPTkensu = 0;//ChatGPT件数
}

  for(var j = 0; j < rangeValues_t.length; j++){
    var kaisyaname = rangeValues_t[j][0].toString();//会社名
    var gyoukai = rangeValues_t[j][2];//業界名
    var address = String(rangeValues_t[j][7]).toLowerCase().trim();//メールアドレス
    var dmmark = rangeValues_t[j][9];//"DM"マーク
    var duplicate1 = rangeValues_t[j][1];//社名の重複数
    var duplicate2 = rangeValues_t[j][8];//アドレス・URLの重複数
    var subject,replacedText;//件名、本文

    if(count1 < sendmaxval){
      if(check.test(address) || check1.test(address)){
        //Logger.log('No'+`${j+1}`+' ①：'+rangeValues_t[j]);//アドレスがあるリスト
        var ad0 = address.replace(/＠/,"@");//全角の＠を半角の@に変換
        var ad1 = ad0.replace(/ /g,"").replace(/　/g,"");//アドレスの空白を削除
        if(!(dmmark)　&& duplicate1 === 1 && duplicate2 === 1){
          //Logger.log('No'+`${j+1}`+' ②：'+rangeValues_t[j]);//DMマークが空のリスト
          switch(true){//③  
            case /(?:^新・動画$)/.test(gyoukai)://
              Logger.log('No'+`${i+listnum}`+'　⑯：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"新・動画"のリスト
              subject = subject_video2022;
              replacedText = text_video2022.replace('{kaisyaname}', kaisyaname);
              kensu++;
              video2022kensu++;
              count1++;
              break;          
            case /(?:^オール$)/.test(gyoukai)://
              Logger.log('No'+`${j+listnum}`+'　⓪：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"オール"のリスト
              subject = subject_all;
              replacedText = text_all.replace('{kaisyaname}', kaisyaname);
              kensu++;
              allkensu++;
              count1++;
              break;
            case /(?:^動画・映像$)/.test(gyoukai):
              Logger.log('No'+`${j+listnum}`+'　③：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"動画・映像"のリスト
              subject = subject_video;
              replacedText = text_video.replace('{kaisyaname}', kaisyaname);
              kensu++;
              dkensu++;
              count1++;
              break;
            case /(?:^飲食$)/.test(gyoukai):
              Logger.log('No'+`${j+listnum}`+'　④：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"飲食"のリスト
              subject = subject_eat;
              replacedText = text_eat.replace('{kaisyaname}', kaisyaname);
              kensu++;
              ekensu++;
              count1++;
              break;
            case /(?:^教育$)/.test(gyoukai):
              Logger.log('No'+`${j+listnum}`+'　⑤：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"教育"のリスト
              subject = subject_teachi;
              replacedText = text_teachi.replace('{kaisyaname}', kaisyaname);
              kensu++;
              tkensu++;
              count1++;
              break;
            case /(?:^広告$)/.test(gyoukai):
              Logger.log('No'+`${j+listnum}`+'　⑥：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"広告"のリスト
              subject = subject_ad;
              replacedText = text_ad.replace('{kaisyaname}', kaisyaname);
              kensu++;
              adkensu++;
              count1++;
              break;
            case /(?:^エンタメ$)/.test(gyoukai):
              Logger.log('No'+`${j+listnum}`+'　⑦：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"エンタメ"のリスト
              subject = subject_ent;
              replacedText = text_ent.replace('{kaisyaname}', kaisyaname);
              kensu++;
              entkensu++;
              count1++;
              break;
            case /(?:^コンサル$)/.test(gyoukai):
              Logger.log('No'+`${j+listnum}`+'　⑧：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"コンサルティング"のリスト
              subject = subject_consul;
              replacedText = text_consul.replace('{kaisyaname}', kaisyaname);
              kensu++;
              consulkensu++;
              count1++;
              break;
            case /(?:^フィットネス$)/.test(gyoukai):
              Logger.log('No'+`${j+listnum}`+'　⑨：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"フィットネス"のリスト
              subject = subject_fitness;
              replacedText = text_fitness.replace('{kaisyaname}', kaisyaname);
              kensu++;
              fitnesskensu++;
              count1++;
              break;
            case /(?:^広告チラシ$)/.test(gyoukai):
              Logger.log('No'+`${j+listnum}`+'　⑩：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"広告チラシ"のリスト
              subject = subject_adflyer;
              replacedText = text_adflyer.replace('{kaisyaname}', kaisyaname);
              kensu++;
              adflyerkensu++;
              count1++;
              break;
            case /(?:^イベント$)/.test(gyoukai):
              Logger.log('No'+`${j+listnum}`+'　⑪：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"イベント"のリスト
              subject = subject_event;
              replacedText = text_evetn.replace('{kaisyaname}', kaisyaname);
              kensu++;
              eventkensu++;
              count1++;
              break;
            case /(?:^医療$)/.test(gyoukai):
              Logger.log('No'+`${j+listnum}`+'　⑫：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"医療"のリスト
              subject = subject_medical;
              replacedText = text_medical.replace('{kaisyaname}', kaisyaname);
              kensu++;
              medicalkensu++;
              count1++;
              break;
            case /(?:^人材$)/.test(gyoukai):
              Logger.log('No'+`${j+listnum}`+'　⑬：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"人材"のリスト
              subject = subject_humanre;
              replacedText = text_humanre.replace('{kaisyaname}', kaisyaname);
              kensu++;
              humanrekensu++;
              count1++;
              break;
            case /(?:^不動産$)/.test(gyoukai):
              Logger.log('No'+`${j+listnum}`+'　⑭：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"不動産"のリスト
              subject = subject_realestate;
              replacedText = text_realestate.replace('{kaisyaname}', kaisyaname);
              kensu++;
              realestatekensu++;
              count1++;
              break;
            case /(?:^IT$)/i.test(gyoukai):
              Logger.log('No'+`${j+listnum}`+'　⑮：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"IT"のリスト
              subject = subject_it;
              replacedText = text_it.replace('{kaisyaname}', kaisyaname);
              kensu++;
              itkensu++;
              count1++;
              break;
            case /(?:^YT_so$)/.test(gyoukai):
              Logger.log('No'+`${i+listnum}`+'　⑰：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"StageOn_YouTube"のリスト
              subject = subject_YTso;
              replacedText = text_YTso.replace('{kaisyaname}', kaisyaname);
              kensu++;
              ytsokensu++;
              count1++;
              break;
            case /(?:^取材$)/.test(gyoukai):
              Logger.log('No'+`${i+listnum}`+'　⑱：'+ gyoukai + ' - ' + kaisyaname + ' - ' + ad1);//業界が"取材"のリスト
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
          if(actUser == hsj6){
            GmailApp.sendEmail(ad1, subject, replacedText,{from:hsj6,name:'檜原 大河'});//6号機
          }else{
            GmailApp.sendEmail(ad1, subject, replacedText,{from:hsj4,name:'檜原 大河'});//④from:　4号機
          }
          sheet.getRange(j+fastrow_tody,5).setValue(duplicate1);                   //社名重複数を値のみ貼り付け
          sheet.getRange(j+fastrow_tody,12).setValue(duplicate2);                  //アドレス重複数を値のみ貼り付け
          sheet.getRange(j+fastrow_tody,13).setValue('DM');//.setBackground(null); //架電(M列)にDM入力
        }else if(!(dmmark === 'DM')){
          sheet.getRange(j+fastrow_tody,13).setValue('既に送信済み');
          sheet.getRange(j+fastrow_tody,5).setValue(duplicate1);  //社名重複数を値のみ貼り付け
          sheet.getRange(j+fastrow_tody,12).setValue(duplicate2); //アドレス重複数を値のみ貼り付け
        }
      }
    }
  }
  sendCompleteInsert(kensu);
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
           + '  オール  :   ' + allkensu + '   件'
           + '  新・動画  :   ' + video2022kensu + '   件'
           + '  YouTube_so  :   ' + ytsokensu + '   件'
           + '  取材  :   ' + intervkensu + '   件'
           + '  ChatGPT  :   ' + ChatGPTkensu + '   件'
           ;

  Logger.log(msg1);
  Logger.log('合計  ：   ' + kensu + '   件');
  Browser.msgBox('メール送信完了','\\n'+'合計:' + kensu + '件に送信',Browser.Buttons.OK);  

}