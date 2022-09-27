document.getElementById("addButton").addEventListener("click", getImage);
document.getElementById("removeButton").addEventListener("click", removeImage);

function getImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw new Error(
          `Encountered something unexpected: ${response.status} ${response.statusText}`
        );
      }
    })
    .then((apiResponse) => {
      const dogList = document.createElement("li");
      const dogImage = document.createElement("img");
      dogImage.src = apiResponse.message;
      dogImage.alt = "Dog Image";
      dogList.appendChild(dogImage);
      document
        .getElementById("photoDisplay")
        .insertBefore(dogList, photoDisplay.firstChild);
    })
    .catch((error) => {
      console.log(error);
    });
}

function removeImage() {
  const dogList = document.getElementById("photoDisplay");
  dogList.removeChild(photoDisplay.firstChild);
}
