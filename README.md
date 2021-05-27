# Google Form API
## 概要
- Google Form をAPI化するプロジェクト

## リポジトリ構成
- backend
  - GASにデプロイするAPI
    - srcの中に色々書いてます
- frontend
  - GASで作成したAPIを利用するフロントアプリケーション

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
としてGASをデプロイ