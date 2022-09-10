var settings = {
   "url": "https://api.github.com/repos/s-priyadarshi/service-portals/contents/images",
   "method": "GET",
   "timeout": 0,
};

$.ajax(settings).done(function (response) {
   response.forEach(function (image, index) {
      var img = document.createElement('img');
      img.src = image.path;
      img.alt = image.name;
      var span = document.createElement("span");
      var className = "image-container" + index;
      span.className = className;
      document.getElementById("images_container").appendChild(span);
      document.querySelector("#images_container span." + className).appendChild(img);
   });
   console.log(response);
});
