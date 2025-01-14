---
title: "How to become a Cookbook editor?"
order: 2
headerDepth: 0
contributors: true
editLink: true
---

Anyone with a GitHub account can participate.

The cookbook is built from Markdown files (.md) and served directly from [GitHub](https://github.com/chainmovers/suibase/tree/main/docs/website).

## Editing on GitHub (for easy/quick changes)

Open the editor with the "Edit this pages on GitHub" link at the bottom.

When ready to propose your changes just select "Create a **new branch**" and give it a name:<br>
<img :src="$withBase('/assets/propose-change.png')" alt="Propose Changes"><br>

Your proposed changes will be merged after review.

## Editing the Cookbook on your machine
If you prefer to preview exactly your change, then you need to run vuepress on your machine and modify the Markdown files with an editor (e.g. VSCode).

Prerequisites:
   * Node.js (>= 16.4) ( https://nodejs.dev/en/learn/how-to-install-nodejs/ )
   * pnpm ( https://pnpm.io/installation )

For the one-time vuepress installation do:
```shell
$ cd ~/suibase/docs
$ pnpm install
```

To start vuepress (the server) do:
```shell
$ cd ~/suibase/docs
$ pnpm start
...
Open your browser at http://localhost:8080
```

The browser updates as you change files under ~/suibase/docs/src

See [https://theme-hope.vuejs.press/guide/](https://theme-hope.vuejs.press/guide/) for advanced Markdown features.

Submit your changes as a pull request, just ask as needed (not as hard as it seems once you do it once).
