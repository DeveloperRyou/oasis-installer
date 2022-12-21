import channel from '@ipc/channel';

const updateDestroy = () => {
	const { ipcRenderer } = window.require("electron"); 
	ipcRenderer.removeAllListeners(channel.update.log);
	ipcRenderer.removeAllListeners(channel.update.progress);
}

export default updateDestroy;
