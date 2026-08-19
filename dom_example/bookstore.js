const bookdata = [
  { image: "", price: 234 },
  { image: "", price: 934 },
  { image: "", price: 534 },
];
fucntion bookdata(){



    const div = document.createElement("div");

    div.setAttribute("class", "book");

    const image = document.createElement("img");

    image.setAttribute(
        "src",
        "https://images.12min.com/KH5OfYKNNchpeFCyzC6cVLo3giA=/630x900/filters:format(jpg):quality(90)/https%3A%2F%2Fcdn.12min.com%2Fbooks%2Fbooks_new_cover_experiment%2F60792_60792.original.png%3F1776606187",
    );
    image.setAttribute("height", "250");
    image.setAttribute("width", "200");

    const h2 = document.createElement("h2");

    h2.innerText = "Price: ₹345/-";
    h2.style.color = "blue";

    const bt = document.createElement("button");

    bt.innerText = "Add To Cart";

    div.appendChild(image);
    div.appendChild(h2);
    div.appendChild(bt);

    const parent = document.getElementById("book");

    parent.appendChild(div);
}
  for (i of bookdata)
  {
    bookdata();
  }