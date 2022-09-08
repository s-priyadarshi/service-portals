var settings = {
   "url": "https://api.github.com/repos/s-priyadarshi/service-portals/contents/images",
   "method": "GET",
   "timeout": 0,
};

$.ajax(settings).done(function (response) {
   response.forEach(function (image, index) {
      var img = document.createElement('img');
      img.src = image.path;
      var span = document.createElement("span");
      span.className = index;
      document.getElementById("images_container").appendChild(span);
      document.querySelector("#images_container span." + index).appendChild(img);
   });
   console.log(response);
});
