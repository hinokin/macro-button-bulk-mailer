/* 
  ・取得する業界を追加した場合の変更箇所 
　　メール送信.gs、送信確認.gs、メール自動送信.gsの3つを確認。各ファイルに変更箇所記載。

  ・送信許可するメールアドレスを追加した場合の変更箇所
  　オープン.gsの（実行ユーザー取得・アカウント指定）に許可するアドレスを追加
  　メール送信.gsのacceptedUsers配列にアカウント変数を追加
*/

//1回の送信数
const sendmaxval = 200;
//当日の日付を取得
var d = new Date();
const d2 = new Date();//正確な当日の日付（※操作しない）
var tody = Utilities.formatDate(d,'Asia/Tokyo','yyyy/MM/dd');
var todyins = Utilities.formatDate(d,'Asia/Tokyo','MM/dd-H:mm');
var day = d.getDate()-1;//日にちを取得して-1で昨日の日にちになる
d.setDate(day);
var yesterday = Utilities.formatDate(d,'Asia/Tokyo','yyyy/MM/dd');//昨日の日付
var day_y = 0;
var day_t = 0;

//スプレッドシートとシート名を指定
var no_sheet = true;//シートがない場合は”false”
var month;
var year = d2.getFullYear();
if(d2.getDate() === 1 && d2.getHours() < 10){
  month = d2.getMonth();
}else{
  month = d2.getMonth()+1;
}
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('List' + year + '/' + month);
//Logger.log(sheet.getSheetName());

function test123(){
//範囲を指定して値を取得
var fastrow_yest = 0;//前日の開始行
var fastrow_tody = 0;//当日の開始行
if(sheet){
  var b_retu = sheet.getRange('B:B').getDisplayValues();//B列の日付の値を取得
  for(var i=0; i<b_retu.length; i++){
    if(yesterday === b_retu[i][0]){
      day_y++;
      fastrow_yest = i+1;
      
    }else if(tody === b_retu[i][0]){
      day_t++;
      fastrow_tody = i+1;
      break;
    }
  }

//前日日付の範囲を取得
  if(day_y === 1){
    var gyousu_y = sheet.getRange(sheet.getMaxRows(),6).getNextDataCell(SpreadsheetApp.Direction.UP).getRow()-(fastrow_yest-1);//行数を取得
    var rangeValues_y = sheet.getRange(sheet.getRange(fastrow_yest,4,gyousu_y,10).getA1Notation()).getValues();//送信可能範囲の値を取得 (何行目row↓、何列目culumn→、行数、列数)
    var listnum_y = sheet.getRange('A'+fastrow_yest).getValue();//先頭のリストNo.
    //Logger.log(sheet.getRange(fastrow_yest,4,gyousu_y,10).getA1Notation());
  }
//当日日付の範囲を取得
  if(day_t === 1){
    var gyousu_t = sheet.getRange(sheet.getMaxRows(),6).getNextDataCell(SpreadsheetApp.Direction.UP).getRow()-(fastrow_tody-1);//行数を取得
    var rangeValues_t = sheet.getRange(sheet.getRange(fastrow_tody,4,gyousu_t,10).getA1Notation()).getValues();//送信可能範囲の値を取得 (何行目、何列目から、行数、列数）社名(D列)からDM(M列)まで
    Logger.log(sheet.getRange(sheet.getRange(fastrow_tody,4,gyousu_t,10).getA1Notation()));
    var listnum_t = sheet.getRange('A'+fastrow_tody).getValue();//先頭のリストNo.
  }
}else{
  Browser.msgBox('警告','リストアップするには、' + '[シート名：' + 'List' + year + '/' + month + ']のシートを作成してください',Browser.Buttons.OK);
  Logger.log('List' + year + '/' + month + 'のシートがないので作成してください オープン01');
  no_sheet = false;
}
}

//Logger.log(fastrow_tody);
var check = /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;//正規表現
var check1 = /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*＠([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;//正規表現

//実行ユーザー取得・アカウント指定
var actUser = Session.getActiveUser().getEmail();
var hsj1 = 'hinokistylejapan@gmail.com';
var hsj2 = 'sales.hinokistylejapan@gmail.com';
var hsj3 = 'info.hinokistylejapan@gmail.com';
var hsj4 = 'info@hinokistylejapan.com';
var hsj6 = 'customer@hinokistylejapan.com';
var acount = '';
switch(actUser){
  case hsj1:
    acount = 'hsj1'; 
    break;
  case hsj2:
    acount = 'hsj2';
    break;
  case hsj3:
    acount = 'hsj3';
    break;
  case hsj4:
    acount = 'hsj4';
    break;
  case hsj6:
    acount = 'hsj6';
    break;
}

    
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  
  //メニュー名を決定
  var menu = ui.createMenu('メール関連');
  var menu2 = ui.createMenu('表関連');
  
  //メニューに実行ボタン名と関数を割り当て
  menu.addItem('リストにメール送信','sendMail');
  menu.addItem('背景色追加','bgcolor');
  menu.addItem('残り送信数','remaining');
  menu.addSeparator();
  menu.addSubMenu(ui.createMenu("配信エラー削除")
                    .addSubMenu(ui.createMenu("シート選択")
                      .addSubMenu(ui.createMenu('2021年')
                        .addItem("List2020/7-11(old)","rist_del711")
                        .addItem("List2021/1","rist_del1")
                        .addItem("List2021/2","rist_del2")
                        .addItem("List2021/3","rist_del3")
                        .addItem("List2021/4","rist_del4")
                        .addItem("List2021/5","rist_del5")
                        .addItem("List2021/7","rist_del7")
                        .addItem("List2021/8","rist_del8")
                        .addItem("List2021/9","rist_del9")
                        .addItem("List2021/10","rist_del10")
                        .addItem("List2021/11","rist_del11")
                      )
                      .addSubMenu(ui.createMenu('2022年')
                        .addItem("List2022/1","rist_del22_1")
                        .addItem("List2022/2","rist_del22_2")
                        .addItem("List2022/3","rist_del22_3") //.addItem("表示名","関数名")
                      )
                    )
                  );

  // menu2.addItem('300行挿入','lastrowadd');
  // menu2.addSubMenu(ui.createMenu('名前50行追加')
  //                    .addItem('檜原','hnameadd')
  //                    .addItem('塚本','tnameadd'));
  
  //スプレッドシートに反映
  menu.addToUi();
  //menu2.addToUi();
}

//メール送信
function sendMail(){
  if(day_t === 1){
    //実行許可
    var acceptedUsers = [hsj1,hsj2,hsj3,hsj4,hsj6];//★
    var activeUser = Session.getActiveUser().getEmail();

    if(acceptedUsers.indexOf(activeUser) == -1) {
      Logger.log('HSJまたはサブHSJアカウトでログインしていない為、終了しました。　　　メール送信3')
      Browser.msgBox('あなたには実行権限がありません。'+'\\n'+'実行できるのはHSJまたはサブHSJのみです。'+'\\n\\n'+'エラー3');
      return;
    }else{
      //Logger.log(rangeValues_t);
      kakunin(listnum_t);
    }
  }else{
    Browser.msgBox('当日の日付'+tody+'がないか、日付が"書式なしテキスト"になっていません'+'\\n\\n'+'エラー1');
    Logger.log('当日の日付'+tody+'がないか、日付が"書式なしテキスト"になっていません。　オープン01');
  }
}

//背景色追加
function bgcolor(){
  if(day_t === 1){
    bgc();
  }else{
    Browser.msgBox('当日の日付'+tody+'がないか、日付が"書式なしテキスト"になっていません'+'\\n\\n'+'エラー2');
    Logger.log('当日の日付'+tody+'がないか、日付が"書式なしテキスト"になっていません。　オープン02');

  }
}

//当日送信残数
function remaining() {
  var rm = MailApp.getRemainingDailyQuota();
  Browser.msgBox(tody + 'の' + Session.getActiveUser() + 'の残送信件数' + rm + '件');
}

//メール自動送信
function sendmailauto(){
  if(day_y === 1){
    mailauto(listnum_y);
  }else{
    sendCompleteInsert();
    delTrigger();
    Logger.log('前日の日付'+yesterday+'がないか、日付が"書式なしテキスト"になっていません　　　　エラー8');
  }
}

//以下、配信エラー削除
var sheet_name,range,row;
var error_msg = 'あなたには実行権限がありません。'+'\\n'+'管理者に確認してください。'+'\\n\\n'+'エラー3';
if(no_sheet){
  var lasrow = sheet.getRange(sheet.getMaxRows(),11).getNextDataCell(SpreadsheetApp.Direction.UP).getRow();
}
function rist_del711(){
  sheet_name = "List2020/7-11(old)";
  range = "D13:K7732";
  row = 13;
  if(authoritycheck() == 1){
    label_unread(sheet_name,range,row);
  }else{
    Browser.msgBox(error_msg);
  }
}
function rist_del1(){
  sheet_name = "List2021/1";
  range = "D12:K6790";
  row =12;
  if(authoritycheck() == 1){
    label_unread(sheet_name,range,row);
  }else{
    Browser.msgBox(error_msg);
  }
}
function rist_del2(){
  sheet_name = "List2021/2";
  range = "D12:K4972";
  row =12;
  if(authoritycheck() == 1){
    label_unread(sheet_name,range,row);
  }else{
    Browser.msgBox(error_msg);
  }
}
function rist_del3(){
  sheet_name = "List2021/3";
  range = "D12:K3833";
  row =12;
  if(authoritycheck() == 1){
    label_unread(sheet_name,range,row);
  }else{
    Browser.msgBox(error_msg);
  }
}
function rist_del4(){
  sheet_name = "List2021/4";
  range = "D12:K4329";
  row =12;
  if(authoritycheck() == 1){
    label_unread(sheet_name,range,row);
  }else{
    Browser.msgBox(error_msg);
  }
}
function rist_del5(){
  sheet_name = "List2021/5";
  range = "D12:K1429";
  row =12;
  if(authoritycheck() == 1){
    label_unread(sheet_name,range,row);
  }else{
    Browser.msgBox(error_msg);
  }
}
function rist_del7(){
  sheet_name = "List2021/7";
  range = "D12:K2397";
  row =12;
  if(authoritycheck() == 1){
    label_unread(sheet_name,range,row);
  }else{
    Browser.msgBox(error_msg);
  }
}
function rist_del8(){
  sheet_name = "List2021/8";
  range = "D12:K2147";
  row =12;
  if(authoritycheck() == 1){
    label_unread(sheet_name,range,row);
  }else{
    Browser.msgBox(error_msg);
  }
}
function rist_del9(){
  sheet_name = "List2021/9";
  range = "D12:K7826";
  row =12;
  if(authoritycheck() == 1){
    label_unread(sheet_name,range,row);
  }else{
    Browser.msgBox(error_msg);
  }
}
function rist_del10(){
  sheet_name = "List2021/10";
  range = "D12:K294";
  row =12;
  if(authoritycheck() == 1){
    label_unread(sheet_name,range,row);
  }else{
    Browser.msgBox(error_msg);
  }
}
function rist_del11(){
  sheet_name = "List2021/11";
  range = "D12:K115";
  row =12;
  if(authoritycheck() == 1){
    label_unread(sheet_name,range,row);
  }else{
    Browser.msgBox(error_msg);
  }
}
function rist_del22_1(){
  sheet_name = "List2022/1";
  range = "D12:K2018";
  row =12;
  if(authoritycheck() == 1){
    label_unread(sheet_name,range,row);
  }else{
    Browser.msgBox(error_msg);
  }
}
function rist_del22_2(){
  sheet_name = "List2022/2";
  range = "D12:K2176";
  row =12;
  if(authoritycheck() == 1){
    label_unread(sheet_name,range,row);
  }else{
    Browser.msgBox(error_msg);
  }
}
function rist_del22_3(){ //yy_mをdelの後ろに記入
  sheet_name = "List2022/3";
  range = "D12:K"+lasrow;//関数の月が終わればその月の最終行を記入
  row =12;
  if(authoritycheck() == 1){
    label_unread(sheet_name,range,row);
  }else{
    Browser.msgBox(error_msg);
  }
}

// function rist_del(){ //yy_mをdelの後ろに記入
//   sheet_name = "List2021/9";
//   range = "D12:K"+lasrow;//関数の月が終わればその月の最終行を記入
//   row =12;
//   if(authoritycheck() == 1){
//     label_unread(sheet_name,range,row);
//   }else{
//     Browser.msgBox(error_msg);
//   }
// }
Logger.log('オープン.gs 実行完了');
