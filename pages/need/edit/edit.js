const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    needType: ['租赁', '托管', '租赁/托管'],
    storeType: ['普通', '恒温', '冷藏', '冷冻', '气调', '暖库', '危化', '保税', '海关监管', '医疗', '露天', '简易'],
    goodsType: ['快消产品', '通讯/电子', '家用电器', '办公/文娱', '医疗器械', '药品/疫苗', '家具', '危险品', '五金/配件', '服饰/鞋帽', '体育户外', '家具日用', '农副/粮油', '护肤/化妆', '食品/保健', '酒水/饮料', '原材料', '汽配/轮胎', '生鲜/蔬菜', '家装建材', '钢材', '化工原料及制品','其他'],
    imgList: [],
    unitArray: [
      ['元', '美金', '港币', '台币'],
      ['平米', '立方', '吨', '公斤', '托', '箱'],
      ['日', '月']
    ],
    startTimeArray: ['3个月内','3~6个月','6个月后'],
    useRegionArray: ['小于1年', '1～3年', '长期', '一个月内'],
    needTypeVal:'',
    startTimeVal:'3个月内',
    startMonthVal:'',
    userRegionVal:'小于1年'
  }, 
  needTypeChange:function(e){
    this.setData({
      needTypeVal: this.data.needType[parseInt(e.detail.value)]
    })
  }, 
  startTimeChange: function (e) {
    this.setData({
      startTimeVal: this.data.startTimeArray[parseInt(e.detail.value)]
    })
  },
  startMonthChange: function (e) {
    console.log(e)
    this.setData({
      startMonthVal: e.detail.value
    })
  },
  useRegionChange: function (e) {
    console.log(e)
    this.setData({
      userRegionVal: this.data.useRegionArray[parseInt(e.detail.value)]
    })
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