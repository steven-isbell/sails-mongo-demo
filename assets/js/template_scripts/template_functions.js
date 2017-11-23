function addToList(obj) {
  console.log(obj);
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("modal").style.display = "block";
    }
  };
  xhttp.open("POST", "http://localhost:1337/api/addToList", true);
  xhttp.send(JSON.stringify({ obj }));
}
