const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('gpConnect', {
  version: '1.0.0'
});
