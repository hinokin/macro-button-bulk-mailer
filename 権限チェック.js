//実行権限 許可1 未許可0（外部公開用マスク版）
function authoritycheck() {
  // 外部公開用に社内アドレスをマスク
  var acceptedUsers = [
    "admin1@example.com",
    "sales@example.com",
    "info@example.com"
  ];

  var activeUser = Session.getActiveUser().getEmail();

  if(acceptedUsers.indexOf(activeUser) == -1) {
    Logger.log('許可されていないアカウントのため、終了しました。');
    return 0;
  } else {
    return 1;
  }
}