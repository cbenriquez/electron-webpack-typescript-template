// Creates the main window.

import { app, BrowserWindow } from 'electron'
import { join } from 'path'

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 960,
        height: 640,
        webPreferences: {
            preload: join(__dirname, 'renderer.js'),
            nodeIntegration: true,
            contextIsolation: false
        },
        autoHideMenuBar: true
    })
    mainWindow.loadFile('public/index.html')
}

(async () => {
    await app.whenReady()
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})()

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
