const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    TabCur:100,
    storeTypeArray: ['不限', '普通', '恒温', '冷藏', '冷冻', '气调', '暖库', '危化', '保税', '海关监管', '医疗', '露天', '简易', '其他'],
    storeTypeValue:'类别',
    regionVal:'地区',
    areaArray: ['不限', '≤2000m²', '2001-8000m²', '8001-20000m²', '>2000m²'],
    areaVal:'面积',
    modalName: null
  },
  tabSelect:function(e){
    var index = e.currentTarget.dataset.id;
    this.setData({
      TabCur: index
    })

    if(index == 3) {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    }
  },
  storeTypeChange:function(e){
    console.log(e)
    this.setData({
      storeTypeValue: this.data.storeTypeArray[parseInt(e.detail.value)]
    })
  },
  regionChange:function(e) {
    console.log(e);
    var values = e.detail.value;
    var regionVal = '全部';
    if(values[2] === '全部'){
      regionVal = values[1]
    } else if (values[1] === '全部') {
      regionVal = values[0]
    }
    this.setData({
      regionVal : regionVal
    })
  },
  areaChange:function(e){
    this.setData({
      areaVal:this.data.areaArray[parseInt(e.detail.value)]
    })
  },
  hideModal: function(e){
    this.setData({
      modalName: null
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  back:function(e){

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