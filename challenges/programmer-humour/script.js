let count = 0;

document.getElementById("next").addEventListener("click", showImage);

function showImage() {
  fetch("https://xkcd.vercel.app/?comic=latest")
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw new Error(
          `Encountered something unexpected: ${response.status} ${response.statusText}`
        );
      }
    })
    .then((jsonResponse) => {
      let display = document.getElementById("display");
      if (display.firstChild) {
        display.removeChild(display.firstChild);
      }
      count++;
      console.log(count);
      let picture = document.createElement("img");
      picture.src = jsonResponse.img;
      document.getElementById("display").appendChild(picture);
    })
    .catch((error) => {
      console.log(error);
    });
}
showImage();
