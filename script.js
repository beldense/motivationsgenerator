const quote = document.getElementById("quote");
const button = document.querySelector("button");
const advice = document.getElementById("advice");

function fetchData() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Något gick fel vid hämtning av data");
      }
      return response.json();
    })
    .then((data) => {
      advice.innerText = `ADVICE #${data.slip.id}`;
      quote.innerText = `"${data.slip.advice}"`;
    })
    .catch((error) => {
      console.error("Fel vid hämtning av data: ", error);
    });
}

button.addEventListener("click", fetchData);

// fetchData();
