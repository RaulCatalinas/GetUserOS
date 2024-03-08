# get-user-os

get-user-os is a lightweight, easy-to-use JavaScript library that provides a simple API to detect the operating system of a user. It's built with TypeScript and works seamlessly across different browsers.

## Installation

```bash
npm install get-user-os
```

## Use

```JavaScript
import { getUserOS, UserOS } from "get-user-os"

const userOS = getUserOS();

if (userOS === UserOS.Windows) {
  console.log("User is using Mac Windows")
} else if (userOS === UserOS.Mac) {
  console.log("User is using Mac Mac")
} else if (userOS === UserOS.Linux) {
  console.log("User is using Mac Linux")
} else {
  console.log(`User is using Mac ${userOS}`)
}
```

## Contribution

Contributions are welcome. Please open an issue or pull request for suggestions for improvements or bug fixes.

## License

The license information is contained in the file [LICENSE.md](LICENSE.md).

## Authors

- [Raul Catalinas Esteban](https://github.com/RaulCatalinas)
