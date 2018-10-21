// pages/home/list.js
import ults from "../../ults/ults.js";
const appid = 77480,
  appsign ="024873455d3549b5b8486b5e9a8fb3dc",
appUrl ="http://route.showapi.com/909-1";
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData(options);
    this.request(options)
      .then(this.codeData.bind(this))
  },
  request(o){
   return new Promise((resolve)=>{
      wx.request({
        url: appUrl,
        mothed: "post",
        header: {
          "content-type": "application/json"
        },
        data: Object.assign({
          "showapi_timestamp": ults.formatterDateTime(),
          "showapi_appid": appid, //这里需要改成自己的appid
          "showapi_sign": appsign,
        }, o),
        success:resolve
      })
    })
  },
  codeData(res) {
    console.log(res);
    const resBody = res.data.showapi_res_body;
    const trains =[];
    resBody.trains.forEach(item=>{
      const ticketInfo = Object.values(item.ticketInfo),
        price = Math.min.apply(null,ticketInfo.map(item=>item.price));
      if(ticketInfo.length){
        trains.push({
          ticketInfo,
          price,
          fromTime:item.fromTime,
          num: item.num,
          toTime: item.toTime,
          usedTime: ults.hour(item.usedTime),
          toCity:item.toCity,
          fromeCity: item.fromCity
        })
      }
    });
    this.setData({ trains})
  }

})