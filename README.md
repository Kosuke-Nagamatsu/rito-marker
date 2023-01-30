## デモ
### 1. マーカーの作成
作成後の位置情報などは、マーカーを削除するまでブラウザのローカルストレージに保存されます。

https://user-images.githubusercontent.com/83779040/215513094-55afc7e5-2df6-4cdd-b4d5-ae0e673193a3.mp4

### 2. ドラッグ&ドロップ
上下左右の画面端に動かすと削除されます。投げる感覚で削除できたらと思い、そのようにしました。また、削除するとローカルストレージのデータも消去されます。

https://user-images.githubusercontent.com/83779040/215513246-543c3aa4-b621-4e36-9826-1721b1d0c29d.mp4

### 3. 画像マーカーについて
小豆島の場合だけ画像表示されます。訪れた場所のご当地写真を選び、記録すると良いかもしれません。

https://user-images.githubusercontent.com/83779040/215513658-991a8630-94f6-4aeb-80bd-24896aac34d1.mp4

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
1. package.jsonに書かれたパッケージをインストールします（node： `v18.10.0`）
```
yarn
```
2. サーバーを起動します
```
yarn start
```
