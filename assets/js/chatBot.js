const API_KEY = `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`;
console.log("hi");
const fetchData = async () => {
  const options = {
    method: "POST",
    headers: {
      authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      message: [{ role: "user", content: "Hello!" }],
      max_tokens: 100,
    }),
  };

  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    options
  );
  const data = await response.json();
  console.log(data);
};
fetchData();


{
  const circleText = document.querySelector(".round");
  circleText.innerHTML = circleText.innerText
    .split("")
    .map(
      (char, i) =>
        `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
    )
    .join("");
}
