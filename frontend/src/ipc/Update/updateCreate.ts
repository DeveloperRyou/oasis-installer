import channel from '@ipc/channel';

const updateCreate = (
	setLog : Function,
	setProgress : Function) => {

	const { ipcRenderer } = window.require("electron");
	ipcRenderer.on(channel.update.log, (event, res) => {
		setLog(res);
	});
	ipcRenderer.on(channel.update.progress, (event, res) => {
		setProgress(res)
	});
}

export default updateCreate;
