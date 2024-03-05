const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;
app.use(bodyParser.json());
app.use(cors());

const NUM_OF_SUGGESTIONS = 3;
// Sample data for suggested items
const suggestedItems = [
  {
    item_sku: "SKU123",
    title: "Dell XPS 13",
    description: "Thin and light laptop with a stunning display.",
    image_url:
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/xs9320nt-xnb-shot-5-1-sl.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=509&qlt=100,1&resMode=sharp2&size=509,402&chrss=full",
    pros: ["Thin and lightweight design", "High-resolution display"],
    cons: ["Limited port selection", "Relatively high price"],
  },
  {
    item_sku: "SKU456",
    title: "MacBook Air",
    description: "Apple's lightweight laptop with long battery life.",
    image_url:
      "https://media.istockphoto.com/id/1202959798/photo/macbook-pro-16-inch-with-touchbar-front-view.jpg?s=612x612&w=0&k=20&c=Uj7nnv5j_STbkW03MaXNKQtdUxiN5AQD9JF0Dw1i0WQ=",
    pros: ["Excellent battery life", "Sleek design"],
    cons: ["Limited connectivity options", "Not suitable for heavy tasks"],
  },
  {
    item_sku: "SKU34325",
    title: "Lenovo ThinkPad X1 Carbon",
    description: "Business-class laptop with robust security features.",
    image_url:
      "https://p3-ofp.static.pub/fes/cms/2023/02/10/o4l7gt9tgdh9i8phbid2c1ehjo35z8376943.png",
    pros: ["Durable build quality", "Great keyboard"],
    cons: ["Higher price point", "Average battery life"],
  },
  {
    item_sku: "SKU23445464",
    title: "HP Spectre x360",
    description:
      "Convertible laptop with a stylish design and versatile functionality.",
    image_url: "https://m.media-amazon.com/images/I/61rs9f9o1rL._AC_SX679_.jpg",
    pros: ["Versatile 2-in-1 design", "Solid performance"],
    cons: ["Relatively high price", "Average battery life"],
  },
  {
    item_sku: "SKU789",
    title: "Microsoft Surface Laptop 4",
    description:
      "Premium laptop with a sleek design and high-resolution touchscreen.",
    image_url:
      "https://imagecdn.jw.com.au/media/catalog/product/9/9/99187609_6689801447.jpg?width=514&height=514&store=default&image-type=image",
    pros: ["High-quality display", "Comfortable keyboard"],
    cons: ["Limited port selection", "Average battery life"],
  },
  {
    item_sku: "SKU101112",
    title: "Asus ROG Zephyrus G14",
    description:
      "Powerful gaming laptop with a compact design and long battery life.",
    image_url:
      "https://au.store.asus.com/media/catalog/product/1/_/1_13_2.jpg?width=439&height=439&store=en_AU&image-type=image",
    pros: ["High-performance gaming capabilities", "Compact and lightweight"],
    cons: ["Lacks webcam", "Limited storage options"],
  },
];

// Sample data for next question suggestions
const nextQuestionSuggestions = [
  { question_text: "What is your budget?" },
  { question_text: "How soon do you need it?" },
  { question_text: "What screen size are you looking for?" },
  { question_text: "Do you prefer a specific brand?" },
  { question_text: "What is your primary use case for the laptop?" },
  { question_text: "Are there any specific features you need?" },
  { question_text: "Do you have any preferred operating system?" },
  {
    question_text:
      "What is your preferred form factor (e.g., traditional laptop, 2-in-1)?",
  },
  { question_text: "Do you require a dedicated graphics card?" },
  { question_text: "How important is battery life for you?" },
];

app.post("/api/messages", (req, res) => {
  const text = req.body.text;
  if (!text) {
    return res.status(400).json({ error: "Message text is required" });
  }
  const randomSuggestedItems = [];
  for (let i = 0; i < NUM_OF_SUGGESTIONS; i++) {
    const randomIndex = Math.floor(Math.random() * suggestedItems.length);
    randomSuggestedItems.push(suggestedItems[randomIndex]);
  }

  const randomNextQuestions = [];
  for (let i = 0; i < NUM_OF_SUGGESTIONS; i++) {
    const randomIndex = Math.floor(
      Math.random() * nextQuestionSuggestions.length
    );
    randomNextQuestions.push(nextQuestionSuggestions[randomIndex]);
  }

  const recommendationText = `Here are some suggested options. Based on your message, I recommend ${randomSuggestedItems[0].title}.`;

  const responseData = {
    text: recommendationText,
    suggested_items: randomSuggestedItems,
    next_question_suggestions: randomNextQuestions,
    sender: "ai",
  };

  res.json(responseData);
});

app.listen(port);
