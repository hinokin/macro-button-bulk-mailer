/* テスト送信（外部公開用マスク版） */
function sendtest() {
  const TEST_DOC_ID = 'YOUR_TEST_DOCUMENT_ID_HERE'; // マスク処理
  const TEST_EMAIL = 'test-address@example.com';   // マスク処理
  
  try {
    var doc_test = DocumentApp.openById(TEST_DOC_ID);
    var subject_test = doc_test.getName();
    var text_test = doc_test.getBody().getText();
    var replacedText = text_test.replace('{kaisyaname}', '本文テスト');

    // GmailApp.sendEmail(TEST_EMAIL, subject_test + '  テスト', replacedText,{name:'株式会社サンプル'});

    var testrm = MailApp.getRemainingDailyQuota();
    if(!(testrm < 200)){
      Logger.log("start:" + testrm + "  end:" + (testrm -10));
    }else{
      Logger.log("testrmは200より小さい");
    }
  } catch(e) {
    Logger.log("エラー: " + e.message);
  }
}