// Exports
export { UserOS } from "./types/user-os"

// Imports
import { UserOS } from "./types/user-os"

export function getUserOS(): UserOS {
	if (navigator.userAgent.indexOf("Win") !== -1) return UserOS.Windows
	if (navigator.userAgent.indexOf("iPhone OS") !== -1) return UserOS.iOS
	if (navigator.userAgent.indexOf("X11") !== -1) return UserOS.Unix
	if (navigator.userAgent.indexOf("Android") !== -1) return UserOS.Android
	if (navigator.userAgent.indexOf("Linux") !== -1) return UserOS.Linux

	return UserOS.Mac
}
