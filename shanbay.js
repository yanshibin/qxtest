const path1 = "/abc/applets/user_applets";
const vip = '/wordsapp/vip/user_item/status';
const adold = 'getGlobalData';
let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
      obj.objects.forEach(function(item,index){
      item.due_date="2023-06-15"
});
}

if ($request.url.indexOf(vip) != -1) {
      obj["status"] = "WITHIN_PERIOD";
}

if ($request.url.indexOf(adold) != -1) {
delete obj.data.adrows
delete obj.data.adgroups
delete obj.data.iOS_adgroups
}

$done({body: JSON.stringify(obj)});
