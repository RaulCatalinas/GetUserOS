# get-user-os

get-user-os is a lightweight, easy-to-use JavaScript library that provides a simple API to detect the operating system of a user. It's built with TypeScript and works seamlessly across different browsers.

## Installation

```bash
npm install get-user-os
yarn add get-user-os
pnpm add get-user-os
bun add get-user-os
```

## Use

```JavaScript
import { getUserOS, UserOS } from "get-user-os"

const userOS = getUserOS();

if (userOS === UserOS.Windows) {
  console.log("The user is using Windows")
} else if (userOS === UserOS.Mac) {
  console.log("The user is using Mac")
} else if (userOS === UserOS.Linux) {
  console.log("The user is using Linux")
} else {
  console.log(`The user is using ${userOS}`)
}
```

## Contribution

Contributions are welcome. Please open an issue or pull request for suggestions for improvements or bug fixes.

## License

The license information is contained in the file [LICENSE.md](LICENSE.md).

## Authors

- [Raul Catalinas Esteban](https://github.com/RaulCatalinas)
