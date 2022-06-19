const path1 = "/abc/applets/user_applets";
const ad = 'ssp-svr/ssp/list3';
const adold = 'getGlobalData';
let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
      obj.objects[0]["due_date"] = "2029-06-14";
      obj.objects[1]["due_date"] = "2029-06-14";
      obj.objects[2]["due_date"] = "2029-06-14";
      obj.objects[3]["due_date"] = "2029-06-14";
      obj.objects[4]["due_date"] = "2029-06-14";
      obj.objects[0]["status"] = "IN_USE";
      obj.objects[1]["status"] = "IN_USE";
      obj.objects[2]["status"] = "IN_USE";
      obj.objects[3]["status"] = "IN_USE";
      obj.objects[4]["status"] = "IN_USE";
}

if ($request.url.indexOf(ad) != -1) {
delete obj.data.pmap
}

if ($request.url.indexOf(adold) != -1) {
delete obj.data.adrows
delete obj.data.adgroups
delete obj.data.iOS_adgroups
}

$done({body: JSON.stringify(obj)});
