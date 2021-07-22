var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = t;
  var hour = d.getHours();
  var minute = d.getMinutes();
  var second = d.getSeconds();

  if (minute == 0 && (second == 0 || second == 1)) {
    notifyMe("Hãy đứng dậy vận động nào");
  }
  if (minute == 15 && (second == 0 || second == 1)) {
    notifyMe("Đến giờ quay lại bàn rồi");
  }
}

function notifyMe(mes) {
    if (!window.Notification) {
        console.log('Browser does not support notifications.');
    } else {
        if (Notification.permission === 'granted') {
            var notify = new Notification('Anh Dũng đây!', {
                body: mes,
                icon: 'https://scontent-hkg4-2.xx.fbcdn.net/v/t31.18172-8/26758295_1051581548357931_7003779812369033477_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=jt7qCESYLCwAX_16mkB&_nc_ht=scontent-hkg4-2.xx&oh=7dacc7b987fc21c2647afe2788f7da97&oe=611CC952',
            });
        } else {
            Notification.requestPermission().then(function (p) {
                if (p === 'granted') {
                    var notify = new Notification('Anh Dũng đây!', {
                        body: mes,
                        icon: 'https://scontent-hkg4-2.xx.fbcdn.net/v/t31.18172-8/26758295_1051581548357931_7003779812369033477_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=jt7qCESYLCwAX_16mkB&_nc_ht=scontent-hkg4-2.xx&oh=7dacc7b987fc21c2647afe2788f7da97&oe=611CC952',
                    });
                } else {
                    console.log('User blocked notifications.');
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }
}