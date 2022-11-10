本组件可用于Vue/React等开发框架（或类）中

## 使用前提：
1.Mapbox对象已初始化

2.安装或引入ant/l7。

## 使用方法：
#### 0. 安装
```
npm install mapbox-fly-line
```

#### 1.引入MapFly.js
```
import MapFly from "mapbox-fly-line";
```

#### 2.实例化MapFly
```
const mapFly = new MapFly(map, data);
```

#### 3.更新飞线
```
mapFly.setData(data);
```

#### 4.销毁
```
mapFly.destory();
mapFly = null;
```

## 个性化修改
因为使用场景不同，用户可能对飞线样式/数据结构进行调整。针对飞线样式，建议参考 [AntV/L7](https://antv-l7.gitee.io/) 官房文档的使用说明；对于数据结构，可以修改MapFly中的fixGeoJSON方法，以适应不同的业务场景。