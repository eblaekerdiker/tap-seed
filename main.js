const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  // Oyun penceresini oluştur
  const win = new BrowserWindow({
    width: 450, // Mobil hissi vermek için dar pencere
    height: 800,
    title: "Tap Seed",
    icon: path.join(__dirname, "assets/level3.png"), // İkon olarak ağaç resmini kullanır
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    autoHideMenuBar: true, // Üstteki dosya/düzen menüsünü gizle
    resizable: false, // Pencere boyutu sabit kalsın (isteğe bağlı)
  });

  // index.html dosyasını yükle
  win.loadFile("index.html");
}

// Electron hazır olduğunda pencereyi aç
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Tüm pencereler kapandığında uygulamadan çık
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
