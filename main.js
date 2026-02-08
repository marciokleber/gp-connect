const { app, Tray, Menu, dialog } = require('electron');
const path = require('path');

let tray = null;

function createTray() {
  tray = new Tray(path.join(__dirname, 'assets', 'tray-icon.png'));

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Connect',
      click: () => {
        // TODO: implementar conexão
      }
    },
    {
      label: 'Logout',
      click: () => {
        // TODO: implementar logout
      }
    },
    { type: 'separator' },
    {
      label: 'About',
      click: () => {
        dialog.showMessageBox({
          type: 'info',
          title: 'Sobre',
          message: 'GP Connect',
          detail: 'Versão 1.0.0'
        });
      }
    },
    { type: 'separator' },
    {
      label: 'Sair',
      click: () => {
        app.quit();
      }
    }
  ]);

  tray.setToolTip('GP Connect');
  tray.setContextMenu(contextMenu);
}

app.whenReady().then(() => {
  createTray();
});

app.on('window-all-closed', (e) => {
  e.preventDefault();
});
