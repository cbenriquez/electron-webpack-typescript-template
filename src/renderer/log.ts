// Replicates console API messages in the main process.

import { ipcRenderer } from 'electron'

const oldConsole = console
const newConsole = Object.assign({}, console)

const filteredKeywords = [
    'Electron Security Warning'
]

function isMessageAllowed(message: any[]) {
    for (const section of message) {
        if (typeof section == 'string') {
            for (const keyword of filteredKeywords) {
                if (section.includes(keyword)) {
                    return false
                }
            }
        }
    }
    return true
}

newConsole.log = (...message: any[]) => {
    oldConsole.log(...message)
    if (isMessageAllowed(message) === true) {
        ipcRenderer.invoke('log', ...message)
    }
}

newConsole.error = (...message: any[]) => {
    oldConsole.error(...message)
    if (isMessageAllowed(message) === true) {
        ipcRenderer.invoke('error', ...message)
    }
}

newConsole.warn = (...message: any[]) => {
    oldConsole.warn(...message)
    if (isMessageAllowed(message) === true) {
        ipcRenderer.invoke('warn', ...message)
    }
}

newConsole.info = (...message: any[]) => {
    oldConsole.info(...message)
    if (isMessageAllowed(message) === true) {
        ipcRenderer.invoke('info', ...message)
    }
}

window.console = newConsole
