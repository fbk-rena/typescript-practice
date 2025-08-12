"use strict";
function sendNotificationExtended(notification) {
    switch (notification.kind) {
        case "email":
            console.log(`Email → ${notification.to} | ${notification.subject}`);
            break;
        case "sms":
            console.log(`SMS → ${notification.phoneNumber} | ${notification.message}`);
            break;
        case "push":
            console.log(`Push to device ${notification.deviceId}: ${notification.title}`);
            break;
    }
}
