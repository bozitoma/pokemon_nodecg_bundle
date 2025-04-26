# Pokemon NodeCG Bundle

このリポジトリは、Pokemon関連のNodeCGバンドルです。

## 開発環境構築

### 前提条件
- Node.js (バージョン14以上)
- npm (バージョン6以上)
- NodeCG CLI (`npm install -g nodecg-cli`)

### インストール

1. リポジトリをクローン
   ```bash
   git clone <リポジトリURL>
   cd nodecg/bundles/pokemon
   ```

2. 依存関係のインストール
   ```bash
   npm install
   ```

3. Prismaクライアントの生成
   ```bash
   npm run prisma:generate
   ```

   注意: Windowsでこのバンドルを使用する場合は、まず`prisma/pokedex.schema.prisma`と`prisma/tournament.schema.prisma`の`binaryTargets`に`"windows"`を追加してください:

   ```prisma
   generator client {
     provider = "prisma-client-js"
     output   = "./generated/pokedex"
     binaryTargets = ["native", "debian-openssl-1.1.x", "windows"]
   }
   ```

4. ビルド
   ```bash
   npm run build
   ```

5. 開発モードでの実行
   ```bash
   npm run dev
   ```

## NodeCGの起動

1. NodeCGのルートディレクトリに移動
   ```bash
   cd ../../
   ```

2. NodeCGの起動
   ```bash
   nodecg start
   ```

## ngrokによる公開

1. ローカル開発環境をインターネットに公開する場合（通常のドメインを使用）
   ```bash
   ngrok http 9090
   ```

2. カスタムドメインを使用する場合
   ```bash
   ngrok http --domain=your-custom-domain.ngrok-free.app 9090
   ```

## データベース

### Prisma Studio
データベースを閲覧・編集するには、Prisma Studioを使用できます：

- Pokedexデータベース
  ```bash
  npm run prisma:studio:pokedex
  ```

- Tournamentデータベース
  ```bash
  npm run prisma:studio:tournament
  ```

## トラブルシューティング

### Prismaクエリエンジンエラー
「PrismaClientInitializationError: Prisma Client could not locate the Query Engine」というエラーが発生した場合は、以下の手順を試してください：

1. スキーマファイルに適切なバイナリターゲットが含まれていることを確認
2. Prismaクライアントを再生成
   ```bash
   npm run prisma:generate
   ```

## ライセンス
ISC
