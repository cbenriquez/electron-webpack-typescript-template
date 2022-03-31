// Create handlers to allow inter-process communication with the main process.

import { app, ipcMain } from "electron";

ipcMain.handle('log', (_event, ...message) => {
    console.log(...message)
})

ipcMain.handle('error', (_event, ...messages) => {
    console.error(...messages)
})

ipcMain.handle('warn', (_event, ...messages) => {
    console.warn(...messages)
})

ipcMain.handle('info', (_event, ...messages) => {
    console.info(...messages)
})

ipcMain.on('quit', () => {
    app.quit()
})