import { Notification, NotificationConstructorOptions } from 'electron';

export class SoliasNotifications {
    show(args: NotificationConstructorOptions): void {
        args.icon = 'src/icon.png';
        const notify = new Notification(args);
        notify.show();
    }
}