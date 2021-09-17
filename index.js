const cardImageContainer = document.querySelector(".pt-listing-image-container");

function createRecommendLabel() {
    cardImageContainer.style.position = "relative";
    const recommendLabel = document.createElement("h3");
    recommendLabel.style.textAlign = "left";
    recommendLabel.style.color = "#fff";
    recommendLabel.style.background = "#d3d3d3";
    recommendLabel.style.borderRadius = "10px";
    recommendLabel.style.padding = "8px 12px";
    recommendLabel.style.position = "absolute";
    recommendLabel.innerText = "Recommend";
    recommendLabel.style.top = "10px";
    recommendLabel.style.left = "10px";
    recommendLabel.style.fontWeight = "400";
    return recommendLabel;
}

const recommendLabel = createRecommendLabel();

cardImageContainer.appendChild(recommendLabel);