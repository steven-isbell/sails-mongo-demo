const loadChars = () => {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = () => {
    const charCard = document.getElementById("character_card");
    if (xhttp.status === 200) {
      charCard.innerHTML = xhttp.responseText;
    } else {
      charCard.innerHTML = "Failure";
    }
  };
  xhttp.open("GET", "https://www.swapi.co/api/people/1", true);
  xhttp.send();
};

loadChars();
