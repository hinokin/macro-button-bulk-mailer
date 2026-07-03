/* トリガー削除 */
function delTrigger() {
  //実行ユーザーのすべてのトリガーを取得
  const triggers = ScriptApp.getProjectTriggers();
  //特定の関数名のトリガーのみ削除する
  for(const trigger of triggers){
    if(trigger.getHandlerFunction() === 'sendCheck'){
      ScriptApp.deleteTrigger(trigger);
    }else if(trigger.getHandlerFunction() === 'remind'){
      ScriptApp.deleteTrigger(trigger);
    }
  }
}
