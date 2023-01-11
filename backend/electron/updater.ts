import { BrowserWindow } from 'electron';
import { autoUpdater } from 'electron-updater';
import channel from '@ipc/channel';

export default (win: BrowserWindow) =>
{
	const webContents = win.webContents;

	autoUpdater.on('checking-for-update', () => {
		webContents.send(channel.update.log, "업데이트 확인중입니다...");
	});
	autoUpdater.on('update-available', () => {
		webContents.send(channel.update.log, "업데이트가 있습니다!");
	});
	autoUpdater.on('update-not-available', () => {
		webContents.send(channel.update.log, "최신버전입니다.");
	});
	autoUpdater.on('error', (err) => {
		//console.log(err);
		const message = "업데이트에 실패했습니다.</br>" + err.message.split('\n')[0];
		webContents.send(channel.update.log, message);
	});
	autoUpdater.on('download-progress', (progressObj) => {
		let message = "다운로드 속도 : " + (progressObj.bytesPerSecond / (1024)).toFixed(2) + " KB/s";
		message = message + '</br>' + progressObj.percent.toFixed(2) + '%';
		message = message + ' ( ' + (progressObj.transferred / 1024).toFixed(2) +
			"KB / " + (progressObj.total / 1024).toFixed(2) + 'KB )';
		webContents.send(channel.update.log, message);
		webContents.send(channel.update.progress, progressObj.transferred / progressObj.total);
	});
	autoUpdater.on('update-downloaded', () => {
		webContents.send(channel.update.log, "업데이트가 완료되었습니다.");
	});
    autoUpdater.checkForUpdates();
}
