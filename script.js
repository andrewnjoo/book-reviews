const extractDateFromFileName = fileName => fileName.slice(0, 8);
const fileNames = ["23-06-24-the-simple-path-to-wealth.md", "23-07-05-the-beach.md"];
const reviewSelect = document.getElementById("reviewSelect");
const reviewContainer = document.getElementById("review");

fileNames.forEach(fileName => {
  const filePath = `./reviews/${fileName}`;
  const reviewDate = extractDateFromFileName(fileName);
  const option = document.createElement("option");
  option.value = filePath;
  option.text = `${reviewDate} - ${(fileName.slice(9, -3).replace(/-/g, " ")).toTitleCase()}`
  reviewSelect.appendChild(option);
});

function showReview() {
  const filePath = reviewSelect.value;

  if (filePath === "") {
    reviewContainer.style.display = "none";
  } else {
    const selectedOption = reviewSelect.options[reviewSelect.selectedIndex];
    const reviewDate = selectedOption.text.split(" - ")[1];
    reviewContainer.innerHTML = `<h3>${reviewDate}</h3><zero-md src="${filePath}"></zero-md>`;
    reviewContainer.style.display = "block";
  }
}
