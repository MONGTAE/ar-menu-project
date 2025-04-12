// When Explore Now Button is Clicked
document.getElementById("explore-btn").addEventListener("click", function () {
    const chatbotText = document.getElementById("chatbot-text");
    chatbotText.setAttribute("value", "Which category would you like to explore?");
    document.getElementById("categories").style.display = "flex";  // Show categories
});

// Function to Show Category
function showCategory(category) {
    const chatbotText = document.getElementById("chatbot-text");
    chatbotText.setAttribute("value", `You chose ${category}. Would you like to order something?`);
    alert(`${category} shown in AR!`);  // You can replace this with actual AR features
}
