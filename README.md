# sheet_google_calendar

スプレッドシートに予定を書き込むと、自動で Google カレンダーに反映される GAS スクリプト

# 注意

！本プログラムは自己責任でご利用をお願いします

# 開発資料

## 環境構築

本プログラムでは yarn 及び clasp を利用して開発を行っています。

必要なパッケージをインストールし、clasp に Google アカウントでログインしてください。

```
$ npm install -g @google/clasp
$ clasp login
$ yarn
$ yarn generate
```

## 使用方法

Google スプレッドシートの Apps Script を選択し、dist/app.gs の中身を貼り付けてください

## 開発後の注意

公開用に dist/app.gs ファイルも合わせて更新するようにしてください
