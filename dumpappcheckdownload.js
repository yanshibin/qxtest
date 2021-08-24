/*
https://app.api.versa-ai.com/pay/order/iap/check url script-response-body mkl.js
hostname=app.api.versa-ai.com
*/




let obj = JSON.parse($response.body);

obj.can_download = true
 
$done({body: JSON.stringify(obj)});

