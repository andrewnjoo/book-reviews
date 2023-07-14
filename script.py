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

for file_name in file_names:
    review_path = os.path.join(reviews_dir, file_name)
    review_title = ""
    
    with open(review_path) as review_file:
        first_line = review_file.readline().strip()
        if first_line.startswith("Review:"):
            review_title = first_line[8:].strip()
    
    div_tag = soup.new_tag("div")
    # Remove the ".md" extension from the file_name
    file_name_without_extension = os.path.splitext(file_name)[0]
    a_tag = soup.new_tag("a", href=f"./reviews/{file_name_without_extension}")
    a_tag.string = f"{file_name[:8]} Review of {review_title}"
    
    div_tag.append(a_tag)
    section.append(div_tag)

with open(html_file, "w") as file:
    file.write(str(soup))
