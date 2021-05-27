# Google Form API
## 概要
- Google Form をAPI化するための技術検証
- 以下記事を参考にさせていただきました
  - https://qiita.com/hand-dot/items/c288d8b32b6243c6cd36

## リポジトリ構成
- backend
  - GASにデプロイするAPI
- frontend
  - GASで作成したAPIを利用するフロントアプリケーション(そのうち作成予定)

## backend 開発
```
$ cd backend
$ yarn
```
開発が進んだら、
```
$ clasp login
$ clasp push
```
としてGAS側にソースを配置

## デプロイ
GASコンソール上で、ウェブアプリケーションとしてデプロイする