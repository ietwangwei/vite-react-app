# <p align=center>Vite2 + React + React-Router+ Recoil + Scss</p>

<div align=center><img src="https://vitejs.dev/logo.svg"/></div>

A simple React Application boilerplate be created by vite2.

# Directory Organization

The following is the main code directory arrangement.

```
.
├── config          // 配置相关的文件(https等)
├── fiddler         // REST Client 用到的文件
├── mock            // 模拟数据
├── public          // favicon 等静态资源文件
├── src
│   ├── apis        // 调用 api 接口方法
│   ├── assets      // svg 图标和 iconfont 文件
│   │── components  // 公共组件
│   ├── constants   // 常量
│   ├── hooks       // react hooks 函数
│   ├── layout      // 布局组件
│   ├── locales     // 国际化
│   ├── pages       // 业务组件
│   ├── routes      // 路由
│   ├── stores      // 状态管理
│   ├── styles      // 公共样式
│   └── utils       // 工具相关的方法
└──tests            // 单元测试
```

# Format Utils

Good formatting tools can standardize code specifications.

## Vite2

Next Generation Frontend Tooling

## ESLint

Find and fix problems in your JavaScript code

## Stylelint

A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.

## Cspell

cspell is a command line tool and library for spell checking code.

## react-dev-inspector

This package allows users to jump to local IDE code directly from browser React component by just a simple click, which is similar to Chrome inspector but more advanced.detail see [react-dev-inspector](https://github.com/zthxxx/react-dev-inspector#readme)

## REST Client

REST Client allows you to send HTTP request and view the response in Visual Studio Code directly.

vscode installed [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension firstly.

```sh
mkdir fiddler

cd fiddler

touch index.http
```

The content in index.http is as follows：

```js
@base_url = https://localhost:8000

GET {{base_url}}/api/getRoleById HTTP/1.1
User-Agent: rest-client
Accept-Language: en-GB,en-US;q=0.8,en;q=0.6,zh-CN;q=0.4
Content-Type: application/json

```

click Send Request, you will see:

```json

HTTP/1.1 200 OK
Content-Type: application/json
Date: Thu, 01 Apr 2021 03:03:02 GMT
Connection: close
Content-Length: 74

{
  "code": 0,
  "message": "ok",
  "data": {
    "roleName": "admin2",
    "roleValue": "admin"
  }
}

```

# Example Project Code

code - [https://github.com/qinghuanI/vite-react-app.git](https://github.com/qinghuanI/vite-react-app.git)

preview - [https://qinghuani.github.io/vite-react-app/](https://qinghuani.github.io/vite-react-app/)

# How to use

1. Clone the boilerplate repo.

```sh
git clone https://github.com/qinghuanI/vite-react-app.git
```

2. `npm i` to install npm packages.
3. Convert svg picture to font icon with `npm run build:icon`.
4. Start dev server using `npm run dev`.
5. Build and bundling your resources for production `npm run build`.
