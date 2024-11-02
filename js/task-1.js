const categoriesEl = document.querySelector("#categories");

const itemsEl = categoriesEl.querySelectorAll(".item");

console.log("Number of categories:", itemsEl.length);

itemsEl.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;

  const categoryElements = item.querySelectorAll("ul li").length;

  console.log("Category:", categoryTitle);
  console.log("Elements:", categoryElements);
});
