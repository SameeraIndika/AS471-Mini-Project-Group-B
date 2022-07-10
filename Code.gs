function doGet(e) {
  var htmlOutput =  HtmlService.createTemplateFromFile('SearchStu');
  htmlOutput.search='';
 return htmlOutput.evaluate();
}

function doPost(e) {
  var search =e.parameter.search;
  var htmlOutput =  HtmlService.createTemplateFromFile('SearchStu');
  htmlOutput.search= search;
  return htmlOutput.evaluate();
}

function getSheetData()  { 
 var ss    = SpreadsheetApp.openById("1UveVC8oKkxIV0EiZg0tycB_8n-7akmySRUBSARpnxgY");
 var dataSheet =  ss.getSheetByName("Trans");
 var dataRange = dataSheet.getDataRange();
 var dataValues = dataRange.getDisplayValues();  
  return dataValues;
}

function getUrl(){
  var url =ScriptApp.getService().getUrl();
  return url;
   Logger.log(url)
}