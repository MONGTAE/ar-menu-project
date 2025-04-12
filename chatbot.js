document.querySelector(".send-btn").addEventListener("click", function () {
    let userInput = document.querySelector(".input-box").value;
  
    if (userInput.trim() === "") return;
  
    // Display user message
    let userMessage = document.createElement("p");
    userMessage.textContent = userInput;
    document.querySelector(".chat-box").appendChild(userMessage);
  
    // Add bot response
    setTimeout(() => {
      let botMessage = document.createElement("p");
      botMessage.textContent = "Bot: I'm still learning!";
      botMessage.classList.add("bot-message");
      document.querySelector(".chat-box").appendChild(botMessage);
    }, 1000);
  
    // Clear input
    document.querySelector(".input-box").value = "";
  });
  