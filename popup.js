var Lich = {
  endpoint: function() {
    var d = new Date();
    return "http://vietpho.com/lich-ngay.php?ngay=" + d.getDate() + "&thang=" + (d.getMonth() + 1) + "&nam=" + d.getFullYear();
  },

  requestData: function() {
    var req = new XMLHttpRequest();
    req.open("GET", this.endpoint(), true);
    req.onload = this.render.bind(this);
    req.send(null);
  },

  render: function (e) {
    console.log(e.target.responseText);
    document.body.innerHTML = e.target.responseText;
  },
};

document.addEventListener('DOMContentLoaded', function () {
  Lich.requestData();
});
