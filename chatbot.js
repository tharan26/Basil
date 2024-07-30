document.addEventListener("DOMContentLoaded", () => {
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotContainer = document.querySelector(".chatbot-container");
    const closeChatbot = document.getElementById("close-chatbot");
    const sendButton = document.getElementById("send-button");
    const userInput = document.getElementById("user-input");
    const chatBody = document.getElementById("chat-body");

    chatbotToggle.addEventListener("click", () => {
        chatbotContainer.style.display = "flex";
        chatbotToggle.style.display = "none";
    });

    closeChatbot.addEventListener("click", () => {
        chatbotContainer.style.display = "none";
        chatbotToggle.style.display = "flex";
    });

    sendButton.addEventListener("click", sendMessage);

    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            appendMessage("user", message);
            userInput.value = "";

            setTimeout(() => {
                appendMessage("bot", getBotResponse(message));
            }, 500);
        }
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender);
        messageElement.textContent = message;
        chatBody.appendChild(messageElement);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function getBotResponse(message) {
        // Simple responses for demonstration purposes
        if (message.toLowerCase().includes("hello")) {
            return "Hello! How can I assist you with your cooking today?";
        } else if (message.toLowerCase().includes("recipe")) {
            return "Sure, I can help you with that! What kind of recipe are you looking for?";
        } else{
            return "I'm here to help! Ask me anything about cooking or recipes.";
        }
    }
});
