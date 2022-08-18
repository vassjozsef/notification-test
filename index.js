const {getNotificationState, getSessionState, getDoNotDisturb} = require('macos-notification-state');

console.log(getDoNotDisturb());
console.log(getNotificationState());
console.log(getSessionState());
