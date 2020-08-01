// pages/index/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    restaurants: [],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const Restaurants = new wx.BaaS.TableObject('restaurants');

    Restaurants.find().then((res) => {
      this.setData({
        restaurants: res.data.objects,
      })
    })
  },
  toRestaurant: function(e) {
    const id = e.currentTarget.dataset.id;

    wx.navigateTo({
      url: `/pages/index/detail?id=${id}`,
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})