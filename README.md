1. 使用 npm 指令, 安裝建立 local TS 環境

```
npm install typescript --save-dev
```

2. 透過 tsc 指令, 將單一支 ts 編譯成 JS file

```
npx tsc index.ts
```

3. 透過 --watch 指令, 監測程式有異動會重新編譯

```
npx tsc index.ts --watch
```

4. 透過 --init 指令, 建立 tsconfig.json 檔案

```
npx tsc --init
```

5. 有了 tsconfig.json 使用 tsc 指令不需要指定 JS file, 會直接 compile 資料夾下所有 TS file

```
npx tsc --watch
```

npm 和 npx 差異
npx 和 npm 一樣是套件管理工具，可以更簡單的下載管理套件
npm 會安裝在全域或專案下, npx 使用完即刪除
tsc 是 typescript 編譯器
