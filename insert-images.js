var settings = {
   "url": "https://api.github.com/repos/s-priyadarshi/service-portals/contents/images",
   "method": "GET",
   "timeout": 0,
};

$.ajax(settings).done(function (response) {
   response.forEach(function (image) {
      var img = document.createElement('img');
      img.src = image.path;
      document.getElementById("images_container").appendChild(img);
   });
   console.log(response);
});
