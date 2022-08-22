/*function sendmail() {}
function showHelp() {}
function showCredits() {}
function onOpen() {}
function doGet() {}
(() => {
  var e = {
      173: (e, t, r) => {
        r.g.sendmail = () => {
          const e = Session.getActiveUser().getEmail(),
            t =
              '\n    <p>This email was sent using the <a href="https://www.labnol.org/internet/google-apps-script-developers/32305/">Google Apps Script Starter kit</a>.</p>\n    <p> The starter kit is used by <a href="https://digitalinspiration.com/">Digital Inspiration</a> for building popular Google Workspace add-on including <a href="https://workspace.google.com/marketplace/app/mail_merge_with_attachments/223404411203">Gmail Mail Merge</a> and <a href="https://workspace.google.com/marketplace/app/document_studio/429444628321">Document Studio</a>. </p>\n    <p>For assistance, please contact <a href="https://twitter.com/labnol">@labnol</a></p>',
            r = t.replace(/<[^>]+>/g, " ");
          GmailApp.sendEmail(e, "Hello from Google Apps Script", r, {
            htmlBody: t,
          }),
            Logger.log(`Email message sent to${e}`);
        };
      },
      933: (e, t, r) => {
        (r.g.showHelp = () => {
          Browser.msgBox(
            "Develop Google Apps Script project locally inside VS Code"
          );
        }),
          (r.g.showCredits = () => {
            SpreadsheetApp.getActiveSpreadsheet().toast(
              "Developed by Amit Agarwal @labnol"
            );
          }),
          (r.g.onOpen = () => {
            try {
              SpreadsheetApp.getUi()
                .createMenu("Apps Script Starter")
                .addItem("Help", "showHelp")
                .addSeparator()
                .addItem("Credits", "showCredits")
                .addToUi();
            } catch (e) {
              Logger.log(e.message);
            }
          });
      },
      540: (e, t, r) => {
        r.g.doGet = () =>
          HtmlService.createHtmlOutputFromFile("index.html")
            .setTitle("Google Apps Script")
            .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
      },
    },
    t = {};
  function __webpack_require__(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, __webpack_require__), a.exports;
  }
  (__webpack_require__.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return __webpack_require__.d(t, { a: t }), t;
  }),
    (__webpack_require__.d = (e, t) => {
      for (var r in t)
        __webpack_require__.o(t, r) &&
          !__webpack_require__.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (__webpack_require__.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (__webpack_require__.o = (e, t) =>
      Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      __webpack_require__(173),
        __webpack_require__(933),
        __webpack_require__(540);
    })();

     

})();*/

 function doGet(e){

  Logger.log(e);
    return HtmlService.createHtmlOutputFromFile("Navigation Bar");
    
  }


