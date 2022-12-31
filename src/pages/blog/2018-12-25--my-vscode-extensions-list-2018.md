---
layout: "../../layouts/BlogPost.astro"
title: VSCodeのオススメ拡張機能2018
pubDate: "2018-12-25"
description: こんな感じ
heroImage: "/assets/2018-12-25/my-vscode-screenshot.png"
---

この記事は [インターネット蟹工船 Advent Calendar 2018](https://adventar.org/calendars/3024) 2 日目の記事です。

2018 年、自分が Visual Studio Code で使って来た Extension の中でオススメできるもの を挙げていきます。  
(特定の言語やフレームワークのサポート系の Extension は、使わない人にとっては意味がないので挙げません)

## Extensions

### [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

括弧などの記号をペア毎に対していい感じに色分けしてくれる拡張です。括弧がネストしまくる系のコードを読まなきゃいけない時にオススメです。

![](https://github.com/CoenraadS/Bracket-Pair-Colorizer-2/raw/master/images/example.png)

### [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

一言で言うと,VSCode 上で Git の情報をいい感じに可視化する拡張です。こいつは機能が多すぎて全てを紹介するのはアレなんですが、僕は常に`git blame`の結果を表示する設定を適用して使っています。

![](https://raw.githubusercontent.com/eamodio/vscode-gitlens/master/images/docs/gitlens-preview.gif)

### [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

[Prettier](https://prettier.io)という Facebook 製のコードフォーマッターを VSCode でも使える拡張です。主に JavaScript や Markdown を書くのに使ってます。

### [GitLab Workflow](https://marketplace.visualstudio.com/items?itemName=fatihacet.gitlab-workflow)

GitLab 連携ができる拡張です。project の open になっている issue や MR の数をステータスバーに表示したり、MR や pipeline に飛んだりできます。もちろん self hosting してる GitLab でも使えます(GitLab 使う人向けですね)

### [Output Colorizer](https://marketplace.visualstudio.com/items?itemName=IBM.output-colorizer)

`*.log`ファイルや VSCode の output/debug/extensions パネルのテキストに色をつけてくれる拡張です。（どうでもいいですが、IBM 製だというのを初めて知りました）

![](https://raw.githubusercontent.com/IBM-Bluemix/vscode-log-output-colorizer/master/github-assets/screenshot-4.jpg)

### [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)

名前の通り path を補完してくれる拡張です。

![](https://raw.githubusercontent.com/ionutvmi/path-autocomplete/master/demo/path-autocomplete.gif)

### [PlantUML](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml)

UML 書く人向けです。

![](https://github.com/qjebbs/vscode-plantuml/raw/master/images/auto_update_demo.gif)

### [VS Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)

workspace を共有しながら同時編集できる拡張です。主に仕事でペアプロする時に使います。まだ preview 版ということもあり、たまに変な挙動をするときがありますが、キーボードとかで気まずくなるよりはずっとマシです。

### [Docker](https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker)

VSCode から Docker の操作をしたり、`Dockerfile`や`docker-compose.yml`のテンプレを生成できる拡張です。両方の機能はぶっちゃけ使ったこと無いんですが、docker 関連のファイルに色が付くのでそれで使ってます。

![](https://github.com/microsoft/vscode-docker/raw/master/images/generateFiles.gif)

### [Sort JSON objects](https://marketplace.visualstudio.com/items?itemName=richie5um2.vscode-sort-json)

これも名前のまんまで JSON をソートしてくれます。

![](https://github.com/richie5um/vscode-sort-json/raw/master/resources/usage.gif)

### [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

Visual Studio Code の設定をバックアップし、複数デバイス間で同期できる拡張です。僕は必須なんじゃないかと思ってます。

バックアップされるのは下記です。

```
All extensions and complete User Folder that Contains
1. Settings File
2. Keybinding File
3. Launch File
4. Snippets Folder
5. VSCode Extensions & Extensions Configurations
6. Workspaces Folder
```

ちなみにバックアップ場所は Gist ですね。

### [WakaTime](https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime)

[WakaTime](https://wakatime.com)を VSCode でも使えるようにする拡張です。
WakaTime 自体は、プログラミング活動を自動で計測してくれるやつですね。

### おわりに

まあ実はこの記事を書きながら、「これ使ってねえじゃんいらねえ」ってなってそこそこ拡張消しました。まあ大掃除みたいになったので良いのかな。

それでは。
