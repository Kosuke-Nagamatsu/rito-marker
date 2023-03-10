# 離島マーカー
訪れた離島にマークをつけ記録したい。そう思い次のような動きを試作しました。

1. 離島名が書かれたマーカーを作る
1. マーカーを地図画像の上にドラッグ&ドロップさせ、位置情報を保存する（画面をリロードしても移動した場所に表示される）
1. 離島名だけでなく画像マーカーも作れる

　※レスポンシブデザインには対応していません

## デモ
### 1. マーカーの作成
作成後の位置情報などは、マーカーを削除するまでブラウザのローカルストレージに保存されます。

https://user-images.githubusercontent.com/83779040/215513094-55afc7e5-2df6-4cdd-b4d5-ae0e673193a3.mp4

### 2. ドラッグ&ドロップ
上下左右の画面端に動かすと削除されます。投げる感覚で削除できたらと思い、そのようにしました。削除するとローカルストレージのデータも消去されます。

https://user-images.githubusercontent.com/83779040/215513246-543c3aa4-b621-4e36-9826-1721b1d0c29d.mp4

### 3. 画像マーカー
小豆島だけ画像が表示されます。訪れた場所のご当地写真を表示させ、記録するのも良いかもしれません。

https://user-images.githubusercontent.com/83779040/215513658-991a8630-94f6-4aeb-80bd-24896aac34d1.mp4

## 使用ライブラリ
react 18.2.0：JavaScriptライブラリ

react-konva 18.2.3：Reactでグラフィックを描画するためのJavaScriptライブラリ（描画したテキスト, 星, 画像をマーカーのように使用）

mui 5.11.7：React UIライブラリ（マーカー作成時のテキスト入力とアイコンボタンで使用）


## 使い方
#### 事前準備
```
git clone git@github.com:Kosuke-Nagamatsu/rito-marker.git
cd rito-marker
```

#### Dockerを使用する場合
1. Docker Desktopを起動後、次のコマンドでコンテナを起動します
```
docker-compose up -d
```

2. [http://localhost:3000](http://localhost:3000)へアクセスします

#### Dockerを使用しない場合
1. yarn.lock に書かれた内容をもとにパッケージをインストールします（node： `v18.10.0`）
```
yarn
```
2. サーバーを起動します
```
yarn start
```

## 補足
[Qiita: React + MUI v5 でタグのようなUIを作る](https://qiita.com/Kosuke-Nagamatsu/items/7be059fc46d2aaf09df6)
