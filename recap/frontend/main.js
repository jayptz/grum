const { app, BrowserWindow } = require("electron");
const path = require("path");
const { spawn } = require("child_process");

const NEXT_URL = "http://localhost:3000";
const PORT = 3000;

let nextProcess = null;

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  mainWindow.loadURL(NEXT_URL);

  if (process.env.ELECTRON_DEV === "true") {
    mainWindow.webContents.openDevTools();
  }
}

function waitForServer(url, maxAttempts = 60) {
  return new Promise((resolve, reject) => {
    const { net } = require("electron");
    let attempts = 0;

    const tryConnect = () => {
      const request = net.request(url);
      request.on("response", () => {
        request.destroy();
        resolve();
      });
      request.on("error", () => {
        attempts++;
        if (attempts >= maxAttempts) {
          reject(new Error("Next.js server did not start in time"));
        } else {
          setTimeout(tryConnect, 500);
        }
      });
      request.end();
    };

    tryConnect();
  });
}

function startNextServer() {
  return new Promise((resolve, reject) => {
    const appPath = app.isPackaged ? path.join(process.resourcesPath, "app") : app.getAppPath();
    const isWindows = process.platform === "win32";
    const nextBin = path.join(appPath, "node_modules", ".bin", "next" + (isWindows ? ".cmd" : ""));

    nextProcess = spawn(nextBin, ["start"], {
      cwd: appPath,
      env: { ...process.env, PORT: String(PORT) },
      stdio: "ignore",
    });

    nextProcess.on("error", reject);
    waitForServer(NEXT_URL).then(resolve).catch(reject);
  });
}

app.whenReady().then(async () => {
  const isDev = process.env.ELECTRON_DEV === "true" || (!app.isPackaged && process.env.NODE_ENV !== "production");

  if (!isDev && app.isPackaged) {
    try {
      await startNextServer();
    } catch (err) {
      console.error("Failed to start Next.js server:", err);
      app.quit();
      return;
    }
  }

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (nextProcess) {
    nextProcess.kill();
    nextProcess = null;
  }
  if (process.platform !== "darwin") {
    app.quit();
  }
});
