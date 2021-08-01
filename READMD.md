# Cls-Snippet-Gen

## 概述

为引入 [WeComponents](https://github.com/Tencent/WeComponents) 的项目，提供[项目 Snippet](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-scope) 支持。

## 使用

在项目根目录下运行：

```bash
# 外网
npx cls-snippet-gen --add --prod

# 内网
npx cls-snippet-gen --add
```

**注意**

1. 生成的 snippet 在根目录 `.vscode` 文件夹下；
2. snippet 生成成功，即可在 `vue`, `javascript` 文件中使用。

**效果图**

<img src="https://i.loli.net/2021/08/01/gizAXZmlfdbeFWI.png" width="60%">

## 开源协议

[MIT](https://opensource.org/licenses/MIT)
