const express = require('express');
const app = express();
const port = 3000;

const buildLocation = process.env.PROJECT === 'NG' ? 'ng' : 'vue';
app.use(express.static(buildLocation));

// bird you can try to disabled
app.use((req, res, next) => {
  if (!req.originalUrl.includes(buildLocation)) {
    res.sendFile(`${__dirname}/${buildLocation}/index.html`);
  } else {
    next();
  }
});

app.listen(port, () => console.info(`Server running on port ${port}`));