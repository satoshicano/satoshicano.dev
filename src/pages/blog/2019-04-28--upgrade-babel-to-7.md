---
layout: "../../layouts/BlogPost.astro"
title: Babel v7 Upgrade Guide
description: "Babelを上げたのでまとめてみた"
pubDate: "2019-04-28"
heroImage: "https://gyazo.com/79dc4520073497a5cfdb1a64dcc081cb.png"
---

## 2020/07/21 追記

※この記事の内容は 2019 年 4 月に書かれたものであり、内容が古くなっています。

なので、もし babel のアップグレードについて調べたい場合は、[公式の記事](https://babeljs.io/docs/en/v7-migration)か、[Babel 7 の主な変更点まとめ](https://qiita.com/soarflat/items/21b8955f992bf7d38581)を読んでいただいたほうがよいです。

---

お久しぶりです。

みんな大好き babel のバージョンを上げる機会があったので備忘録的にまとめていきます。

## TL;DR

- Babel6 を使っていた SPA を Babel7 に上げました
- Polyfill をどうするかのポリシー次第で設定の書き方が違いました

## upgrade 6 to 7

[公式](https://babeljs.io/docs/en/v7-migration)を見ればすんなりいくのかなと思ったらそうでもなかったです。

具体的には `babel-upgrade` ツールを実行しても一部の plugin(`babel-plugin-rewire` )などはうまく `dependencies` を書き換えてくれなかったです。

なので、上記ツールを実行した後、更新漏れになっていた plugin を手で上げていきまいした。

```shell
$ npx babel-upgrade --write
```

僕の場合はなぜか `.babelrc` も書き換えてくれなかったので下記のように中身を編集して変えました。

```diff
{
-  "plugins": ["transform-object-rest-spread"],
-  "presets": ["react", "es2015"]
+  "plugins": ["@babel/proposal-object-rest-spread"]
+  "presets": ["@babel/react", "@babel/env"]
}
```

- package 名が `@babel/preset-react` のようになっていても preset の部分を省略できるみたいです。

ちなみに[公式ドキュメント](https://babeljs.io/docs/en/configuration) を見ていくと。

```md
- You want to programmatically create the configuration?
- You want to compile node_modules?

> babel.config.js is for you!

- You have a static configuration that only applies to your simple single package?

> .babelrc is for you!

- The Guy Fieri is your hero?

> We recommend to use the babel.config.js format. Babel itself is using it.
```

動的に設定ファイルを使ったりしたい場合は `babel.config.js` をシンプルに使いたいだけなら `.babelrc` を推奨しているそうです（Guy Fieri 氏のくだりがよくわからない）

### ESLint

- ESLint を使用している場合は注意が必要です
- 今回は eslint も古かったので一緒に上げたのですが babel-eslint を追加しつつ設定ファイルを更新しないといけないです。

## Polyfill

今回ちょっと考えさせられたのが `polyfill`でした。

`babel-polyfill`を`@babel/polyfill`に変更するのはもちろんなのですが、`@babel/preset-env` の `useBuiltIns` オプションと併用するのが便利です。
(というか、`useBuiltIns` オプションを使わないなら個別の polyfill を追加することを公式も推奨しています。)

useBuiltIns オプションの使い方としては下記のようになります。

| 目的                               | 使い方                                                      |
| :--------------------------------- | :---------------------------------------------------------- |
| すべての Polyfill を入れたい       | `useBuiltIns: entry` && `import "@babel/polyfill"`          |
| 必要な Polyfill だけを入れたい     | `useBuiltIns: usage`                                        |
| 勝手に Polyfill を入れないでほしい | `useBuiltIns: false` && 必要な個別の polyfill を都度 import |

ホントは usage を使いたいところですが、`experimental`ということもあり今回は見送りました。（レガシーブラウザをサポートしているプロジェクトかつ元々すべての polyfill を入れていたのでそのままにしたというのもありますが）

## 最終的にどうだったか

最初は楽勝かなと思っていたのですが、意外と調べないと安心できない部分が多かったです。
(次こそは楽勝のはず)

ちなみにバージョンを上げたところ、トランスパイルにかかる時間が半分になったり、`npm install` 時間が早くなったりなど、いいことが多かったので余裕があればやったほうがいいと思いました。

この先これを読み返すであろう自分も含めて、役に立つといいな。
