var settings = {
  "url": "https://api.github.com/repos/s-priyadarshi/service-portals/contents/images",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
