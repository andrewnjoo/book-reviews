import os
from bs4 import BeautifulSoup

reviews_dir = "./reviews"
html_file = "index.html"
file_names = os.listdir(reviews_dir)

with open(html_file) as file:
    html = file.read()

soup = BeautifulSoup(html, "html.parser")
section = soup.find("section")

section.clear()

# Sort the file names chronologically, with the newest first
file_names.sort(reverse=True)

for file_name in file_names:
    review_path = os.path.join(reviews_dir, file_name)
    review_title = ""

    with open(review_path) as review_file:
        lines = review_file.readlines()
        for line in lines:
            if line.startswith("Review:"):
                review_title = line[8:].strip()
            elif line.startswith("Rating:"):
                rating = line.split(":")[1].strip()
                rating_value = int(rating.split("/")[0])
                rating_stars = "★" * rating_value + "☆" * (5 - rating_value)
                break

    div_tag = soup.new_tag("div")
    # Remove the ".md" extension from the file_name
    file_name_without_extension = os.path.splitext(file_name)[0]
    a_tag = soup.new_tag("a", href=f"./reviews/{file_name_without_extension}")
    a_tag.string = f"{file_name[:8]} {review_title} {rating_stars}"

    div_tag.append(a_tag)
    section.append(div_tag)

with open(html_file, "w") as file:
    file.write(str(soup))
