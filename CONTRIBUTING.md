# Contributing to express-express-cassandra

* [Submission Guidelines](#markdown-header-submission-guidelines)
    * [Branch Name Guidelines](#markdown-header-branch-name-guidelines)
* [Coding Rules](#markdown-header-coding-rules)
* [Commit Message Guidelines](#markdown-header-commit-message-guidelines)
    * [Commit Message Header](#markdown-header-commit-message-header)


# Submission Guidelines

Before you submit your Pull Request (PR) consider the following guidelines:

1. Be sure that a `Taiga` item describes the problem you're fixing or feature you are implementing.

2. Be sure your local `develop` branch is up to date.

2. Branch from the `develop` branch.

5. Make your changes in a new git branch (see [Branch Name Guidelines](#markdown-header-branch-name-guidelines)):

     ```
     git checkout -b feature/#TaigaNumber develop
     ```

6. Create your patch.

7. Follow our [Coding Rules](#markdown-header-coding-rules).

8. Run the full test suite, if applicable.

9. Commit your changes using a descriptive commit message that follows our [Commit Message Guidelines](#markdown-header-commit-message-guidelines).
   Adherence to these conventions is necessary (and compulsory) because release notes are automatically generated from these messages.

     ```
     git commit --all
     ```
   Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

10. Push your branch to BitBucket:

    ```
    git push origin feature/#TaigaNumber
    ```

11. In BitBucket, send a pull request to the `develop` branch with the default `PR Description` completed.

#### Branch Name Guidelines

A new branch name must be prepended with one of:

* `feature/` - feature development
* `bugfix/` - bug fix
* `hotfix/` - hot fix

The above must be appended with the the `Taiga` item you are working on.

Examples:

* `feature/#8507_Leaderboards_Timing_flow_of_updates`
* `bugfix/#8622_BE_config_ms_Get_events_gives_500_runtime_error`

#### Addressing review feedback

If the reviewer asks for changes via code reviews, and the reviewer added tasks for you on the review accordingly, then:

1. Make the required updates to the code.

2. Re-run the full test-suite, if applicable.

3. Create a fixup commit and push to the repository (this will update your Pull Request).

4. Mark tasks as completed on the review.

##### Updating the commit message

A reviewer might often suggest changes to a commit message (for example, to add more context for a change or adhere to our [Commit Message Guidelines](#markdown-header-commit-message-guidelines)).
In order to update the commit message of the last commit on your branch:

1. Check out your branch:

    ```
    git checkout feature/#TaigaNumber
    ```

2. Amend the last commit and modify the commit message:

    ```
    git commit --amend
    ```

3. Push to your BitBucket repository:

    ```
    git push --force-with-lease
    ```

> NOTE:
> If you need to update the commit message of an earlier commit, you can use `git rebase` in interactive mode.
> See the [git docs](https://git-scm.com/docs/git-rebase#_interactive_mode) for more details.


#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes from the main (upstream) repository:

* Delete the remote branch on BitBucket either through the BitBucket web UI or your local shell as follows:

    ```
    git push origin --delete feature/#TaigaNumber
    ```

* Check out the develop branch:

    ```
    git checkout develop -f
    ```

* Update your develop branch with the latest upstream version:

    ```
    git pull --ff upstream develop
    ```

* Delete the local branch:

    ```
    git branch -D feature/#TaigaNumber
    ```


# Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more specs (unit-tests) - where applicable.
* All public API methods **must be documented**.
* We use the `prettier` auto-formatter.


# Commit Message Guidelines

We have very precise rules over how our Git commit messages must be formatted.
This format leads to **easier to read commit history**.

Each commit message consists of only a **header**.

```
<header>
<body>
```

The `header` is mandatory and must conform to the [Commit Message Header](#markdown-header-commit-message-header) format.

The `body` is optional and only required for further details when reverting a commit (see [Revert commits](#markdown-header-revert-commits)).

#### Commit Message Header

```
<type>(<scope>): <short summary> (#TaigaNumber)
  │       │             │              │
  │       │             │              └─⫸ Taiga UserStory/Task/Issue number where applicable.
  │       │             │
  │       │             └─⫸ Summary in past tense. Start capitalized. No period at the end when providing #TaigaNumber.
  │       │
  │       └─⫸ Commit Scope: single or hyphenated word or theme of what the committed work covers
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test|config|chore|break|revert
```

The `<type>`, `(<scope>)` and `<short summary>` fields are mandatory, with the `(#TaigaNumber)` optional.

Not all commits will have an associated `Taiga` item, and the `header` will then be:

```
<type>(<scope>): <short summary>.
```


##### Type

Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **test**: Adding missing tests or correcting existing tests
* **config**: Adding missing configurations or correcting existing configurations
* **chore**: Not src code related but had to be done
* **break**: A breaking change and the `<short summary>` must include a brief description of any migration steps or mention where to find further instructions/detail
* **revert**: A previous commit is being reverted


##### Scope
The scope should be a succinct heading of what is committed.

The following is a list of examples:

* `hazendal-configs`
* `open-practice-graphs`
* `aws-keyspaces-port`


##### Short Summary

Use the short summary field to provide a succinct description of the change:

* use the past tense: "Changed" not "Change" nor "Changes"
* Capitalize the first letter
* dot (.) at the end when no `Taiga` item applicable


### Revert commits

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit.

The content of the commit message `body` should contain:

- information about the SHA of the commit being reverted in the following format: `This reverts commit <SHA>`,
- a clear description of the reason for reverting the commit message.
