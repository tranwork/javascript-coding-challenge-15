document.addEventListener("DOMContentLoaded", () => {
    const riskDashboard = document.getElementById("riskDashboard");
    console.log("Risk Dashboard Loaded");
});

//Task 2: Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");

    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p>Level: ${riskLevel}</p>
        <p>Department: ${department}</p>
    `;

    document.getElementById("riskDashboard").appendChild(riskCard);
}

document.getElementById("riskForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const riskName = document.getElementById("riskName").value;
    const riskLevel = document.getElementById("riskLevel").value;
    const department = document.getElementById("department").value;
    addRiskItem(riskName, riskLevel, department);
});

// Test Case
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

//Task 3: Removing Risk Items
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");

    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p>Level: ${riskLevel}</p>
        <p>Department: ${department}</p>
        <button class="resolveBtn">Resolve</button>
    `;

    riskCard.querySelector(".resolveBtn").addEventListener("click", () => {
        riskCard.remove();
    });

    document.getElementById("riskDashboard").appendChild(riskCard);
}

//Task 4: Risk Categorization
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");

    let color;
    if (riskLevel === "Low") color = "green";
    else if (riskLevel === "Medium") color = "yellow";
    else color = "red";

    riskCard.style.backgroundColor = color;

    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p>Level: ${riskLevel}</p>
        <p>Department: ${department}</p>
        <button class="resolveBtn">Resolve</button>
    `;

    riskCard.querySelector(".resolveBtn").addEventListener("click", () => {
        riskCard.remove();
    });

    document.getElementById("riskDashboard").appendChild(riskCard);
}
