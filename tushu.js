//https://alipay.jieshu.me/cloudils//api/usersAppointMent/accessOpen/checkTimeSelect
var obj = JSON.parse($response.body);
obj={"usersCount":[{"totalCount":1000,"appointCount":1,"index":0},{"totalCount":1000,"appointCount":1,"index":1},{"totalCount":1000,"appointCount":1,"index":2},{"totalCount":1000,"appointCount":1,"index":3}],"result":1,"message":"当前时间可选"};

$done({body: JSON.stringify(obj)});
