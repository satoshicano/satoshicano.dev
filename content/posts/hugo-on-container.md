+++
date = '2026-01-03T08:25:52Z'
draft = false
title = 'using Container for Hugo site'
tags = ['hugo', 'container', 'macOS', 'development']
+++

Apple公式のコンテナランタイム「Container」を使って、Hugoの執筆環境をコンテナ化してみました。Containerの基本的な使い方を学びながら、実用的な開発環境を構築する過程を紹介します。

## Containerとは

Containerは、Mac上で軽量な仮想マシンとしてLinuxコンテナを作成・実行できるツールです。Swiftで開発され、Apple Silicon向けに最適化されています。

公式リポジトリ: https://github.com/apple/container

## 環境構築手順

### 1. Containerのインストール

```bash
brew install container
```

```bash
container --version
```

### 2. システムの起動とカーネルの設定

初回はコンテナサービスの起動とLinuxカーネルのインストールが必要です:

```bash
# start container service
brew services start container

# install recommended kernel
container system kernel set --recommended
```

システムが正常に起動したか確認:

```bash
container system status
```

### 3. Hugoイメージの取得

HugomModsプロジェクトが提供する公式イメージを使用します:

```bash
# 基本イメージのpull
container image pull hugomods/hugo:latest

# または、Git/Node.js含む拡張版
container image pull hugomods/hugo:git-nodejs
```

イメージの確認:

```bash
container image list
```

## Hugo開発サーバーの起動

ブログのルートディレクトリに移動して、以下のコマンドで開発サーバーを起動します:

```bash
container run \
  --name hugo-dev \
  --rm \
  -p 1313:1313 \
  -v "$PWD:/src" \
  -w /src \
  -it \
  hugomods/hugo:latest \
  hugo server --bind 0.0.0.0 --poll 700ms
```

### オプションの解説

Containerコマンドの各オプション:
- `--name hugo-dev`: コンテナに名前を付ける
- `--rm`: コンテナ停止後に自動削除
- `-p 1313:1313`: ポート1313をホストにマッピング
- `-v "$PWD:/src"`: 現在のディレクトリをコンテナの/srcにマウント
- `-w /src`: 作業ディレクトリを/srcに設定
- `-it`: インタラクティブモード + TTY

Hugoサーバーのオプション:
- `--bind 0.0.0.0`: すべてのネットワークインターフェースでリッスン
- `--poll 700ms`: ファイル変更を700msごとにポーリング

`http://localhost:1313` でサイトにアクセスできます。

### ファイル変更の自動反映について

**重要**: `--poll` オプションは必須です。Containerでは、現時点ではmacOSのファイルシステムイベントがコンテナに伝わらないため、このオプションがないとファイルを編集してもサイトが更新されません。

下書きも含めて表示する場合:

```bash
container run \
  --name hugo-dev \
  --rm \
  -p 1313:1313 \
  -v "$PWD:/src" \
  -w /src \
  -it \
  hugomods/hugo:latest \
  hugo server --bind 0.0.0.0 --poll 700ms --buildDrafts
```

## その他のHugoコマンド

### 新規記事の作成

```bash
container run --rm \
  -v "$PWD:/src" \
  -w /src \
  hugomods/hugo:latest \
  hugo new posts/new-article.md
```

### サイトのビルド

```bash
container run --rm \
  -v "$PWD:/src" \
  -w /src \
  hugomods/hugo:latest \
  hugo
```

ビルド結果は `public/` ディレクトリに出力されます。

## まとめ

Containerを使ってHugoの執筆環境をコンテナ化してみました。ファイル変更の自動反映は将来的に改善されると思うので期待しています。

## 参考リンク

- [Apple Container - GitHub](https://github.com/apple/container)
- [Container Tutorial](https://github.com/apple/container/blob/main/docs/tutorial.md)
- [Container Command Reference](https://github.com/apple/container/blob/main/docs/command-reference.md)
- [HugoMods Docker Images](https://hub.docker.com/r/hugomods/hugo)
- [Hugo Documentation](https://gohugo.io/documentation/)
