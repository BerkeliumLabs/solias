import { Notification, NotificationConstructorOptions } from 'electron';

export class SoliasNotifications {
    show(args: NotificationConstructorOptions): void {
        const notify = new Notification({
            title: args.title,
            subtitle: args.subtitle,
            body: args.body,
        });
        notify.show();
    }
}