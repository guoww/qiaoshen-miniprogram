//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    motto: 'Hi 开发者！',
    userInfo: {},
    modalName:'gridModal',
    hasUserInfo: false,
    iconList: [{
      icon: 'icon-cangku-tianchong',
      color: 'red',
      badge: 0,
      name: '查找仓库',
      url:'/pages/search/search'
    }, {
      icon: 'icon-chazhaofangyuan',
      color: 'orange',
      badge: 1,
      name: '发布仓库',
      url:'/pages/storeEdit/storeEdit'
    }, {
      icon: 'icon-chazhaobiaodanliebiao',
      color: 'yellow',
      badge: 0,
      name: '查找需求',
      url:'/pages/need/search/search'
    }, {
      icon: 'icon-xuqiudengji',
      color: 'olive',
      badge: 22,
      name: '发布需求',
      url:'/pages/need/edit/edit'
    }, {
      icon: 'icon-cangkuchakan',
      color: 'cyan',
      badge: 0,
      name: '查找线路',
      url:'/pages/route/search/search'
    }, {
      icon: 'icon-UI_icon_xianlu',
      color: 'blue',
      badge: 0,
      name: '发布线路',
      url:'/pages/route/edit/edit'
    }, {
      icon: 'icon-cangkuchakan',
      color: 'purple',
      badge: 0,
      name: '查找货源',
      url:'/pages/goods/search/search'
    }, {
      icon: 'icon-zuixinhuoyuan',
      color: 'mauve',
      badge: 0,
      name: '发布货源',
      url:'/pages/goods/edit/edit'
    }],
    gridCol: 4,
    TabCur:0,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  tabSelect: function(e){
    this.setData({
      TabCur:e.currentTarget.dataset.id
    })
  },
  toStoreDetail:function(w){
    wx.navigateTo({
      url: '/pages/storeHouseDetail/storeHouseDetail',
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
