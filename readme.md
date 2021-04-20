# Custom server with Vue cdn and Angular build files

### dev
1. 跑 Miaoli NG build files
```
npm run start:ng
```


2. 跑 bird 's vue with cdn file
```
npm run start
```


### NOTE
1. 提起 browser history 與 hash history 與他對 server 特色
2. 提起 angular 預設路由規則與 base html
  - https://github.com/buddalee/miaoli_dist/commit/da13c389f0b227e50a1a7842b066485588b7ef03
3. 試著 disable
```
app.use((req, res, next) => {
  if (!req.originalUrl.includes(buildLocation)) {
    res.sendFile(`${__dirname}/${buildLocation}/index.html`);
  } else {
    next();
  }
});
```