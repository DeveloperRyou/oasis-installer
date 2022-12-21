const moduleAlias = require('module-alias');
moduleAlias.addAlias('@ipc', __dirname + '/ipc');

import { app, BrowserWindow } from "electron";
import path from "path";
import url from "url";
import updater from "./updater";

const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../react/index.html'),
    protocol: 'file:',
    slashes: true
});

let win : BrowserWindow;

app.on('ready', () => {
    win = new BrowserWindow({
        width : 600, 
        height : 600,
        resizable : false,
        show : false,
        center : true, 
        maximizable: false,
        webPreferences: {  
        nodeIntegration: true,
        contextIsolation: false
        }
    });
    win.once('ready-to-show', () => {
        win.show()
    });
    win.loadURL(startUrl+"#/update");
    updater(win, startUrl);
});

app.on('window-all-closed', () => {
    app.quit();
});
