//app.js
App({
  onLaunch: function () {
    wx.BaaS = requirePlugin('sdkPlugin')
    //让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login, wx.getUserInfo, wx.requestPayment)

    let clientID = '86e9cea993a138b9109a';  // 应用名称: testerino1' first MiniApp
    wx.BaaS.init(clientID);

    wx.BaaS.auth.loginWithWechat().then(user => {
      // save user data to globalData
      this.globalData.userInfo = user;
      // save user data to Phone Storage,
      // two params: (key, data)
      wx.setStorageSync('userInfo', user);
      console.log('logged in from app.js', user);
    }, err => {
      console.log('fail login');
    })
  },
  globalData: {
    // retrieve userinfo from storage, one param:
    // (key)
    userInfo: wx.getStorageSync('userInfo') || null,
  }
})