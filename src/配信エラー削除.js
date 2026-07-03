function label_unread(sheet_name,range,row) {
  //シート名を指定して社名～アドレス範囲の値を取得
  var sheettest = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet_name);
  var r = sheettest.getRange(range);
  var r2 =r.getValues();
  var unreadcount = 0;//合計削除件数

  //メール検索　未読の送信確認ラベルがついたものを検索
  var threads = GmailApp.search('is:unread label:"配信エラー"');//件数を指定する場合は引数の末尾にstart,max
  //上記の条件で検索したスレッド
  var messagesForThreads = GmailApp.getMessagesForThreads(threads);

  Logger.log("スレッド数"+threads.length);//未読合計数
  
  for(var i of messagesForThreads){
    var mto = i[0].getTo();//取得したスレッドの宛先
    var mto2 = i[0].getThread();//スレッド
    for(var k = 0 ; k < r2.length ; k++){
      if(mto == r2[k][7]){
        Logger.log("送信先   :" + mto + '\n' + 
                   "アドレス ：" + r2[k][7] + '\n' +
                   "社名　   :" + r2[k][0]
                   );
        sheettest.getRange(row + k,4).setFontLine('line-through');//社名 4列目
        sheettest.getRange(row + k,11).setFontLine('line-through');//アドレス 11列目
        sheettest.getRange(row + k,12).setValue('99');//アドレス重複数 12列目
        sheettest.getRange(row + k,17).setValue('アドレス無し');//ステータス 17列目
        unreadcount++;
        mto2.markRead();//既読
      }
    }
  }
  // if(sheet_name == "List2021/4"){
  //   GmailApp.markThreadsRead(threads);//検索したスレッド全てを既読
  // }
  Logger.log('合計：' + unreadcount + '件');
  Browser.msgBox("シート名　　　　：" + sheet_name + '\\n' +
                 "未読スレッド件数：" + threads.length + '\\n' +
                 "削除リスト数　　：" + unreadcount);
}
