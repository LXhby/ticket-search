// pages/home/list.js
import ults from "../../ults/ults.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    trainDate:"",
    start:"",
    end:"",
    to:"",
    from:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.initDate();
   
  },
  query(e){
    const data = e.detail.value,
          values = Object.values(data);
    if (/.+&.+&.+/.test(values.join("&"))){
      const urlData = Object.keys(data).map(item => item + "=" + data[item]).join("&");
      wx.navigateTo({
        url: '/pages/home/list?'+urlData,
      })
    }else{
      wx.showToast({
        title:"请填完整",
        icon:"none"
      })
    }
  },
  setTrainDate(e){
    this.setData({
      trainDate:e.detail.value
    })
  },
  //初始化当前时间
  initDate(){
    wx.request({
      url: 'https://www.baidu.com',
      method:"HEAD",
      success:(res)=>{
        const date = new Date(res.header.Date);
        this.setData({
         start: ults.toDate(date),
          trainDate: ults.toDate(date),
          end:ults.toDate(new Date(date.getTime()+30*24*60*60*1000))
        }
          );
      }
    })
  }
})