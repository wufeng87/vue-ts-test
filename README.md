# YN P1 Sample Project

## 安装依赖

```
npm install yn-p1

or

cnpm install yn-p1
```

### 本地开发启动

```
npm run serve
```

### 部署打包

```
npm run build
```

### Lints 检查 js

```
npm run lint
```

### 运行 UT

```
npm run test:unit
```

### 文件结构说明

- .vscode
	--- vSCode IDE设置
- node_modules
	--- npm module使用的目录
- public
	--- index.html 和 网站favorite icon.
- src
	--- 源文件目录
	- components
	--- 元年组件
	- config
	--- 配置文件夹。配置后端地址
	- modules
	--- 元年通用模块文件夹。配置Menu
	- store
	--- Vuex store应用文件夹（需要可自行创建）
	- themes
	--- 元年css主题文件夹
	- views
	--- 视图文件夹。建议所有应用代码都放在views/applications下新建一个文件夹。
	- App.vue
	--- 最外层vue文件
	- main.js
	--- main.js文件
- tests
	--- 测试目录 
- .gitignore
	--- git ignore 文件
- babel.config.js
	--- babel 配置文件
- LICENSE
	--- 版本说明文档
- package-lock.json
	--- npm module 具体依赖关系和版本文件
- package.json
	--- npm moudle列表文件
- README.md
	--- 工程使用说明文档
- vue.config.js
	--- vue配置文件

