function doGet(e) {
  var htmlOutput =  HtmlService.createTemplateFromFile('searchStu');
  htmlOutput.search='';
 return htmlOutput.evaluate();
}

function doPost(e) {
  var search =e.parameter.search;
  var htmlOutput =  HtmlService.createTemplateFromFile('searchStu');
  htmlOutput.search= search;
  return htmlOutput.evaluate();
}

function getSheetData()  { 
  var ss    = SpreadsheetApp.openById("1hmhCX7oSCHfzD1_K9P9wWRcDRz4MKtL4j0OvneL6c1g");
  var dataSheet = ss.getSheetByName('Sheet1'); 
 var dataRange = dataSheet.getDataRange();
 var dataValues = dataRange.getDisplayValues();  
  return dataValues;
}

function getUrl(){
  var url =ScriptApp.getService().getUrl();
  return url;
   Logger.log(url)
}