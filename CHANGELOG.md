# 0.9.0 (2021-08-16)

### Features

* feat(express-cassandra-version): Rolled back the `express-cassandra` version in order to still use `cassandra-driver v3.x.y` under the hood. (0v3rst33r) ([`c6244eb`](https://github.com/0v3rst33r/express-cassandra/commit/c6244eb71381ec5bf5c22cdb12e012d6ffb0ed7d))

# 0.8.0 (2021-08-15)

### Documentation

* docs(changelog): Updated `CHANGELOG.md` doc. (0v3rst33r) ([`51009f1`](https://github.com/0v3rst33r/express-cassandra/commit/51009f103fb1d03b67101a47bc85b085fc5f7012))
* docs(readme) Updated doc to be better suited for descriptions in other tools. (0v3rst33r) ([`1f38d46`](https://github.com/0v3rst33r/express-cassandra/commit/1f38d465e1459b17258518062548284ea70c7365))

### Chore

* chore(version) Bumped version. (0v3rst33r) ([`6a51555`](https://github.com/0v3rst33r/express-cassandra/commit/6a51555d227969d7d03b716782e42c880b14b323))

### Misc (pre semantic commit messages)

* Merge pull request #5 from 0v3rst33r/feature/readme-update (0v3rst33r) ([`ca02bc6`](https://github.com/0v3rst33r/express-cassandra/commit/ca02bc6182134ba60de8ff2a307e940d005401bb))

# 0.7.0 (2021-08-15)

### Refactor

* refactor(npm-scripts): Refactored `npm scripts`. (0v3rst33r) ([`1aeed15`](https://github.com/0v3rst33r/express-cassandra/commit/1aeed150b2b7b42ca2377fb5dafbfabdee722cf6))

### Documentation

* docs(changelog): Updated `CHANGELOG.md` doc. (0v3rst33r) ([`ca2aa4f`](https://github.com/0v3rst33r/express-cassandra/commit/ca2aa4ff45452e409b8942317b8d532d747b6aba))
* docs(changelog): Updated `CHANGELOG.md` doc. (0v3rst33r) ([`cefbdea`](https://github.com/0v3rst33r/express-cassandra/commit/cefbdeaa5fbeeba240d0dc063b8cad6bbb17e49d))
* docs(readme) Updated the `README` doc. (0v3rst33r) ([`f261d60`](https://github.com/0v3rst33r/express-cassandra/commit/f261d603d855a1f5eff75f28ecdf5d53ae34563e))
* docs(changelog): Updated `CHANGELOG.md` doc. (0v3rst33r) ([`dd6f756`](https://github.com/0v3rst33r/express-cassandra/commit/dd6f756b3c62d389056a80a34ff3fa9913fdf475))
* docs(readme) Updated the `README` doc. (0v3rst33r) ([`7ba5629`](https://github.com/0v3rst33r/express-cassandra/commit/7ba56296e00ed329d109e4eb4a55765d23ef4c56))

### Chore

* chore(inrange-org): Changed name of project to be published under organisation name instead. (0v3rst33r) ([`bae43a6`](https://github.com/0v3rst33r/express-cassandra/commit/bae43a6d063d260f858e564f3803526c3b34defa))
* chore(contrib): Removed the `CONTRIBUTIN` file again. (0v3rst33r) ([`24544ce`](https://github.com/0v3rst33r/express-cassandra/commit/24544ce096e51d377b1a0557db931628492936b2))

### Misc (pre semantic commit messages)

* Merge pull request #4 from 0v3rst33r/feature/inrange-organisation (0v3rst33r) ([`ad0e6f8`](https://github.com/0v3rst33r/express-cassandra/commit/ad0e6f8952d720c2ac49b774bb2040d668edac6c))

# 0.6.0 (2021-08-15)

### Features

* feat(aws-keyspaces-proto):  Introduced types on keyspaces object (Nicholas Robinson) ([`1cf0b21`](https://github.com/0v3rst33r/express-cassandra/commit/1cf0b214f2f73f83c35469d085454c18cb176333))

### Chore

* chore(changelog): Updated `CHANGELOG.md` doc. (0v3rst33r) ([`34cc84d`](https://github.com/0v3rst33r/express-cassandra/commit/34cc84dae1973288c8724a0aa383df2734890db1))

### Misc (pre semantic commit messages)

* Merge pull request #3 from 0v3rst33r/feature/keyspaces-types (0v3rst33r) ([`849312f`](https://github.com/0v3rst33r/express-cassandra/commit/849312fa2ab7539d6e6147d2bf4d84eaa30c97bf))

# 0.5.1 (2021-05-25)

### Features

* feat(aws-keyspaces-proto): Moved keyspaces helpers to different file, implemented express-cassandra multiton (Nicholas Robinson) ([`f8d4224`](https://github.com/0v3rst33r/express-cassandra/commit/f8d4224d8583e99db2363e5dc1d4280144b56353))
* feat(aws-keyspaces-proto): Initial Prototype commit (Nicholas Robinson) ([`f540d3c`](https://github.com/0v3rst33r/express-cassandra/commit/f540d3c19c1c6d65141e8cde600c21e06ecc0ed5))
* feat(aws-keyspaces-proto): Added export for keyspace helpers (Nicholas Robinson) ([`252d3cd`](https://github.com/0v3rst33r/express-cassandra/commit/252d3cd3e19b9d4336afee5f518e1d2a0c3775ed))

### Fixes

* fix(aws-keyspaces-proto): Reverted export changes (Nicholas Robinson) ([`5859530`](https://github.com/0v3rst33r/express-cassandra/commit/58595303174ff30fc61bf0606e163e9ae5fb58df))
* fix(aws-keyspaces-proto): Changed exports (Nicholas Robinson) ([`5b7b8ae`](https://github.com/0v3rst33r/express-cassandra/commit/5b7b8aee87ab3aa667b2591de43d34bf32cf0800))

### Chore

* chore(aws-keyspaces-proto): Added Changelog (Nicholas Robinson) ([`4dea188`](https://github.com/0v3rst33r/express-cassandra/commit/4dea1882e2a6fdd796098d55dcb44e2e2bec52b0))
* chore(aws-keyspaces-proto): Added Prettier (Nicholas Robinson) ([`ff226d7`](https://github.com/0v3rst33r/express-cassandra/commit/ff226d7f4fe920adb864337647526a21b99748f7))

### Misc (pre semantic commit messages)

* Merge pull request #2 from 0v3rst33r/develop (0v3rst33r) ([`47d0d2f`](https://github.com/0v3rst33r/express-cassandra/commit/47d0d2f4b78c3a462eafe2a39b4399b8ccfaf002))
* Merge pull request #1 from 0v3rst33r/feature/initial-prototype (Nicholas William Robinson) ([`7ad0a10`](https://github.com/0v3rst33r/express-cassandra/commit/7ad0a105e9665fe8b4f8e66ff5e33c5607d59768))
* Initial commit (0v3rst33r) ([`2f5fdf3`](https://github.com/0v3rst33r/express-cassandra/commit/2f5fdf391ca90b9360d2a738759b3ff2d19910c8))
