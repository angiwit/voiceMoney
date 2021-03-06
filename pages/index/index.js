//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    houBaoStyle:1,
    userInfo:[],
    shuoming1:'小伙伴们说对口令就能获得随即打赏',
    shuoming2:'好友听完你说的话就能领取赏金',
    shuoming3:'好友念出你的答案就能领取赏金',
    kongling:'',
    Money:'',
    Number:'',
  },
  //事件处理函数
  ChangeTab:function(e){
    var that = this;
    console.log("currentTab")
    var currentTab = e.currentTarget.dataset.id;
    that.setData({
      houBaoStyle: currentTab,
    })
  },
  onLoad: function () {
    var that = this;
    wx.getUserInfo({
      success:function(user){
        console.log(user)
        that.setData({
          userInfo:user.userInfo,
        })
      }
    })
  },

  // 跳转链接

  tomyRecord:function(){
    var that = this;
    wx.navigateTo({
      url: './mRecord/myRecord',
    })

  },
  // 获取页面填入的值
  koulingInput:function(e){
    var that = this;
    console.log(e.detail.value)
    that.setData({
      kouling:e.target.value,
    })
  },
  MoneyInput:function(e){
    var that = this;
    console.log(e.detail.value)
    that.setData({
      Money: e.target.value,
    })
  },
  NumberInput: function (e) {
    var that = this;
    console.log(e.detail.value)
    that.setData({
      Number: e.target.value,
    })
  },
})
