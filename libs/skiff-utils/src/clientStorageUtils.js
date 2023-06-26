"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStorageKey = exports.StorageTypes = void 0;
// Local storage keys
var StorageTypes;
(function (StorageTypes) {
    StorageTypes["SESSION_CACHE"] = "sessionCache";
    StorageTypes["SAVED_ACCOUNT"] = "savedAccount";
    StorageTypes["FILE_TABLE_SORT_MODE"] = "fileTableSort:mode";
    StorageTypes["FILE_TABLE_SORT_ORDER"] = "fileTableSort:order";
    StorageTypes["SIDEPANEL_OPEN"] = "sidepanelOpen";
    StorageTypes["ORGANIZATION_EVERYONE_TEAM"] = "organizationEveryoneTeam";
    StorageTypes["DEFAULT_ALIAS"] = "DefaultAlias";
    StorageTypes["DRAFT_MESSAGE"] = "DraftMessage";
    StorageTypes["SEARCH_INDEX"] = "MailSearchIndex";
    StorageTypes["NOTIFICATION_BANNER_KEY"] = "notificationBannerState";
    StorageTypes["THREAD_FORMAT"] = "threadFormat";
    StorageTypes["TOGGLE_ITEM"] = "toggleNodes";
    StorageTypes["LATEST_USER_ID"] = "latestUserID";
    StorageTypes["REDIRECT_TO_CALENDAR"] = "isRedirectToCalendar";
    StorageTypes["HOUR_FORMAT"] = "hourFormat";
    StorageTypes["DATE_FORMAT"] = "dateFormat";
    StorageTypes["THEME"] = "theme";
    StorageTypes["START_DAY_OF_THE_WEEK"] = "startDayOfTheWeek";
    StorageTypes["TIME_ZONE"] = "timeZone";
    StorageTypes["DEFAULT_CALENDAR_COLOR"] = "defaultCalendarColor";
    StorageTypes["HAS_SEEN_CUSTOM_DOMAIN"] = "hasSeenCustomDomainPage";
    StorageTypes["HAS_SEEN_CUSTOM_DOMAIN_TRIAL_OFFER"] = "hasSeenCustomDomainTrialOffer";
    StorageTypes["GMAIL_IMPORT_ENABLED"] = "gmailImportEnabled";
    StorageTypes["HAS_SEEN_CALENDAR"] = "hasSeenCalendar";
    StorageTypes["CAL_MOBILE_BANNER_APPEARANCES"] = "calMobileBannerAppearances";
    StorageTypes["SHOW_ALIAS_INBOXES"] = "showAliasInboxes";
    StorageTypes["HAS_SEEN_ESSENTIAL"] = "hasSeenEssential";
    StorageTypes["HAS_SEEN_ALIAS_INBOXES"] = "hasSeenAliasInboxes";
    StorageTypes["BLOCK_REMOTE_CONTENT"] = "blockRemoteContent";
    StorageTypes["LEFT_SWIPE_GESTURE"] = "leftSwipeGesture";
    StorageTypes["RIGHT_SWIPE_GESTURE"] = "rightSwipeGesture";
    StorageTypes["SECURED_BY_SKIFF_SIG_DISABLED"] = "securedBySkiffSigDisabled";
    StorageTypes["SHOW_PAGE_ICON"] = "showPageIcon";
    StorageTypes["SKEMAIL_MOBILE_BANNER_APPEARANCES"] = "skemailMobileBannerAppearances";
    StorageTypes["HAS_SEEN_ACTIVATION_CHECKLIST"] = "hasSeenActivationChecklist";
})(StorageTypes || (exports.StorageTypes = StorageTypes = {}));
const getStorageKey = (type) => `skiff:${type}`;
exports.getStorageKey = getStorageKey;
//# sourceMappingURL=clientStorageUtils.js.map