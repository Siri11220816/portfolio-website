const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const message = document.querySelector("input").value;

  const res = await fetch("http://localhost:5000/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  });

  const data = await res.json();
  console.log(data);
});