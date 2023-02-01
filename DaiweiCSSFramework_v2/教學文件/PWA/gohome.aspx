<%@ page language="VBscript" Debug="true" aspcompat="true"%>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>網頁名稱</title>

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon_io/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon_io/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon_io/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicon_io/site.webmanifest" />
    <script>
      if ("serviceWorker" in navigator) {
        // 檢查browser有無支援serviceWorker
        navigator.serviceWorker.register("/sw.js").then(function () {
          // register會回傳一個Promise
        });
      }
    </script>
  </head>
  <body>
    <button type="button" onclick="addToHomeScreen();">Click</button>
    <span id="text">Hello World !</span>
  </body>
</html>
<script>
  // 把 event 存起來
  var installPromptEvent;
  // 要顯示 prompt 的延遲
  var showTime = 30 * 1000;
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    installPromptEvent = e;
    var data = navigator.userAgent.match(/Chrom(e|ium)\\([0-9]+)\\./);

    var version = data && data.length >= 2 ? parseInt(data[2], 10) : null;
    if (version && installPromptEvent.prompt) {
      // 延遲一段時間才顯示 prompt
      setTimeout(function () {
        // 如果 Chrome 版本是 67（含）以下，可以直接呼叫
        if (version <= 67) {
          installPromptEvent.prompt();
          return;
        }
      }, showTime);
    }
  });
  function addToHomeScreen() {
    if (installPromptEvent) {
      installPromptEvent.prompt();
      installPromptEvent = null;
    }
  }
  async function GetInstalledRelatedApp() {
    const relatedApps = await navigator.getInstalledRelatedApps();
    relatedApps.forEach((app) => {
      //if your PWA exists in the array it is installed
      console.log(app.platform, app.url);
    });
    document.getElementById("text").innerHTML = relatedApps.length;
  }
  window.addEventListener("load",async () => {
    await GetInstalledRelatedApp();
  });
</script>