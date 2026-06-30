# static-edge-runtime

本仓库包含一个示例 Express 应用（app.js），演示如何使用 `static-edge-runtime` 连接到运行时并启动服务。

安装

在项目根目录执行：

```bash
# 初始化（如果还没有 package.json）
npm init -y

# 安装运行时依赖
npm install express static-edge-runtime@1.4.3
```

使用

仓库已包含示例文件 app.js，演示最小用法（路径：https://github.com/linzengxin07/static-edge-runtime/blob/main/app.js）：

```js
const express = require('express');
const app = express();
const port = 3002;
const edge = require('static-edge-runtime');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

edge.connect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

启动/运行

可以在 package.json 中添加一个 start 脚本：

```json
{
  "scripts": {
    "start": "node app.js"
  }
}
```

然后运行：

```bash
npm start
```

在浏览器或使用 curl 测试：

```bash
curl http://localhost:3002
# 应返回 "Hello World!"
```

部署与生产建议

- 使用进程管理工具（如 pm2）或容器（Docker）来管理进程重启。
- 添加更完善的错误处理与日志记录中间件。
- 若需要保密密钥或凭据，使用 secrets 管理（CI/CD secrets、Kubernetes secrets、云厂商 KMS 等）。

如果你愿意，我可以：

- 把 app.js 修改为读取环境变量（例如 PORT）并提交（替换硬编码端口）。
- 添加 .gitignore、Dockerfile、PM2 配置模板。
- 把 package.json 中的 express 也固定为具体版本。

告诉我需要哪些更改，我会直接提交到仓库。