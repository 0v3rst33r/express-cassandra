# express-express-cassandra

A wrapper for using `express-cassandra`, with `AWS Keyspaces` support.

[![0v3rst33r - express-cassandra](https://img.shields.io/static/v1?label=0v3rst33r&message=express-cassandra&color=blue&logo=github)](https://github.com/0v3rst33r/express-cassandra)
[![stars - express-cassandra](https://img.shields.io/github/stars/0v3rst33r/express-cassandra?style=social)](https://github.com/0v3rst33r/express-cassandra)
[![forks - express-cassandra](https://img.shields.io/github/forks/0v3rst33r/express-cassandra?style=social)](https://github.com/0v3rst33r/express-cassandra)

[![GitHub tag](https://img.shields.io/github/tag/0v3rst33r/express-cassandra?include_prereleases=&sort=semver)](https://github.com/0v3rst33r/express-cassandra/releases/) ![Contributors](https://img.shields.io/github/contributors/0v3rst33r/express-cassandra?color=dark-green) ![Issues](https://img.shields.io/github/issues/0v3rst33r/express-cassandra) [![License](https://img.shields.io/github/license/0v3rst33r/express-cassandra)](#license)


## Table Of Contents

* [Setup](#setup)
* [Build](#build)
* [Publish](#publish)
* [Contributing](#contributing)
* [License](#license)

## Setup

Install `nvm` if you have not done so yet, then:

```sh
nvm use
```

## Build

```sh
npm run build
```

## Publish

You need to be an `@inrange` organisation team member in order to publish.

Use the `--dry-run` flag if you first want to test/confirm what will be published.

```sh
npm publish --access public
```

## Usage examples

### Create instances

To create 2 independent instances:

```
import modelzzz = require('@inrange/express-express-cassandra');

export const keyspacesOrm = modelzzz.get('keyspaces');
export const cassandraOrm = modelzzz.get('cassandra');
```

Under the hood this just makes 2 separate non-cached calls to:

```
require('express-cassandra')
```

### AWS Keyspaces

Using the `AWS Keyspaces` compatible methods:

```
import { keyspaces } from '@inrange/express-express-cassandra';

keyspaces.saveAsync(model).then(...)
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/0v3rst33r/express-cassandra/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.

## License

See [LICENSE](https://github.com/0v3rst33r/express-cassandra/blob/develop/LICENSE) for more information.

## Acknowledgements

The creators of the `express-cassandra` project.
