const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    supplyType: ['出租', '托管', '出租/托管'],
    storeType: ['普通', '恒温', '冷藏', '冷冻', '气调', '暖库', '危化', '保税', '海关监管', '医疗', '露天', '简易'],
    buildType: ['平台', '高台', '平房', '楼房', '地下', '立体', '其他'],
    imgList: [],
    unitArray: [
      ['元', '美金', '港币', '台币'],
      ['平米', '立方', '吨', '公斤', '托', '箱'],
      ['日', '月']
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})