async function renderDadJoke() {
  const joke = document.getElementById("joke");
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await res.json();
  joke.innerText = data.joke;
}

window.onload = renderDadJoke;
