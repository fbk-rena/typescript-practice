interface EmailNotification {
    kind: "email";
    to: string;
    subject: string;
  }
  
  interface SMSNotification {
    kind: "sms";
    phoneNumber: string;
    message: string;
  }
  
interface PushNotification {
    kind: "push";
    deviceId: string;
    title: string;
  }
  
  type NotificationExtended = EmailNotification | SMSNotification | PushNotification;
  
  function sendNotificationExtended(notification: NotificationExtended) {
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
