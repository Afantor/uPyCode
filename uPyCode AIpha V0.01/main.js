// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const electron = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
const path = require('path')
const url = require('url')
let mainWindow
const Menu = electron.Menu

function createWindow () {
  // 隐藏菜单栏
  Menu.setApplicationMenu(null)

  // Create the browser window.设置窗口宽高，最小宽高，图标等
  mainWindow = new BrowserWindow({width: 800, height: 600, icon: './icon/afantor.ico'})

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
  //mainWindow.loadURL('https://www.afantor.cc');
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
