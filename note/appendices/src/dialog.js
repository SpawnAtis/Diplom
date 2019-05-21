// dialog.js
import moment from "moment";
import User from "../user";
import "moment/locale/ru";

export function getDialogTitle(dialog) {
  return (
    (dialog && dialog.title) ||
    (dialog.users.length > 1
      ? dialog.users.filter(cur => cur._id !== User.account._id)
      : dialog.users
    )
      .map(cur => `${cur.firstName} ${cur.lastName}`)
      .join(", ")
  );
}

export function getDateRelative(date) {
  return moment(Math.min(+moment(date), Date.now())).fromNow();
}

export function getDialogUser(dialog) {
  return (
    dialog &&
    (dialog.users.length === 1
      ? dialog.users[0]
      : dialog.users.find(x => x._id !== User.account._id))
  );
}

export function getDialogAvatar(dialog) {
  const user = getDialogUser(dialog);
  return user && user.avatarSrc
    ? { uri: user.avatarSrc }
    : require("../../assets/img/noavatar.png");
}

export function getUnreadCount(dialog) {
  return (dialog.beacons || 0) + getUnreadCountOnlyMessages(dialog);
}

export function getUnreadCountOnlyMessages(dialog) {
  const unread =
    dialog && dialog.unreadCounts.find(x => x.user === User.account._id);
  return (unread && unread.count) || 0;
}

export function makeRead(dialog) {
  const unread =
    dialog && dialog.unreadCounts.find(x => x.user === User.account._id);
  if (unread) unread.count = 0;
}
