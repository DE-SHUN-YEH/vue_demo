# vue_demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


我有把大部分的頁面元件化，在維護的方面會清楚許多，如果網頁要再更加擴大的話，也會再細分更多元件。
我也有建一個all.scss的檔案，如果之後需要更多每頁都需要的樣式，新建的scss檔也可以直接匯入，因為目前元件需要的樣式大部分已經用bootstrap處理好了，需要另外寫的不多，所以沒有多建新的scss檔，如果網頁需要再擴大的話，每頁的scss也會再拉出來另外寫。