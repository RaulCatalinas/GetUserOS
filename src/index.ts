// Imports
import { UserOS } from './types/user-os'

// Exports
export { UserOS } from './types/user-os'

export function getUserOS(): UserOS {
  if (navigator.userAgent.includes('Win')) return UserOS.Windows
  if (navigator.userAgent.includes('iPhone OS')) return UserOS.iOS
  if (navigator.userAgent.includes('X11')) return UserOS.Unix
  if (navigator.userAgent.includes('Android')) return UserOS.Android
  if (navigator.userAgent.includes('Linux')) return UserOS.Linux

  return UserOS.Mac
}
