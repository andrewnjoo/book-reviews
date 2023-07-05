const extractDateFromFileName = (fileName) => fileName.slice(0, 8);
const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
let fileNames = ["23-06-24-simple-path.md", "23-07-05-the-beach.md"];
let reviewSelect = document.getElementById("reviewSelect");
let reviewContainer = document.getElementById("review");

fileNames.forEach(function (fileName) {
  let filePath = "./" + fileName;
  let reviewDate = extractDateFromFileName(fileName);
  let option = document.createElement("option");
  option.value = filePath;
  option.text = toTitleCase(
    reviewDate + " - " + fileName.slice(9, -3).replace(/-/g, " ")
  );
  reviewSelect.appendChild(option);
});

function showReview() {
  let filePath = reviewSelect.value;

  if (filePath === "") {
    reviewContainer.style.display = "none";
  } else {
    let selectedOption = reviewSelect.options[reviewSelect.selectedIndex];
    let reviewDate = selectedOption.text.split(" - ")[1];
    reviewContainer.innerHTML =
      "<h3>" + reviewDate + '</h3><zero-md src="' + filePath + '"></zero-md>';
    reviewContainer.style.display = "block";
  }
}
