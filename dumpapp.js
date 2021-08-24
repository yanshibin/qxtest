/*
https://app.api.versa-ai.com/pay/order/iap/check url script-response-body mkl.js
hostname=app.api.versa-ai.com
*/




let obj = JSON.parse($response.body);

obj.download_count = 99,
obj.vip.is_vip = true
 
$done({body: JSON.stringify(obj)});
