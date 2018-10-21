const fillZero = n=>n>9?n:"0"+n;
const toDate = date=>{
  const DateArg =[
    date.getFullYear(),
    fillZero(date.getMonth()+1),
    fillZero(date.getDate())
  ];
  return DateArg.join("-");
}

//showapi 请求
const formatterDateTime= ()=> {
  var date = new Date()
  var month = date.getMonth() + 1
  var datetime = date.getFullYear()
    + ""// "年"
    + (month >= 10 ? month : "0" + month)
    + ""// "月"
    + (date.getDate() < 10 ? "0" + date.getDate() : date
      .getDate())
    + ""
    + (date.getHours() < 10 ? "0" + date.getHours() : date
      .getHours())
    + ""
    + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
      .getMinutes())
    + ""
    + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
      .getSeconds());
  return datetime;
}
//分钟转小时
const hour = mimus => Math.floor(mimus / 60) + "时" + mimus%60;
export default{
  toDate, fillZero, formatterDateTime,hour
}