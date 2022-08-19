const {getSessionState, getDoNotDisturb} = require('macos-notification-state');
const {getNotificationState} = require('windows-notification-state');

if (process.platform === 'win32') {
  console.log(getNotificationState());
}
if (process.platform === 'darwin') {
  console.log(getDoNotDisturb());
  console.log(getSessionState());
}
