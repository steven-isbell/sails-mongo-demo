// const loadChars = () => {
//   const xhttp = new XMLHttpRequest();

//   xhttp.onreadystatechange = () => {
//     const charCard = document.getElementById("character_card");
//     charCard.innerHTML = "Loading";
//     if (xhttp.status === 200) {
//       charCard.innerHTML = xhttp.responseText;
//     }
//   };
//   xhttp.open("GET", "http://localhost:1337/api/characters", true);
//   xhttp.send();
// };

// loadChars();

const login = () => {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = () => {
    xhttp.open("POST", "http://localhost:1337/api/characters", true);
    xhttp.send();
  };
};
