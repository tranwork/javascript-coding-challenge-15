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

    riskCard.classList.add(
        riskLevel === "Low" ? "low" :
        riskLevel === "Medium" ? "medium" : 
        "high"
    );

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

//Task 5: Bulk Risk Updates
document.getElementById("increaseRiskLevels").addEventListener("click", () => {
    document.querySelectorAll(".riskCard").forEach((card) => {
        let level = card.querySelector("p:nth-child(2)");
        if (level.textContent.includes("Low")) level.textContent = "Level: Medium";
        else if (level.textContent.includes("Medium")) level.textContent = "Level: High";
    });
});

//Task 6: Event Propagation Fix
document.getElementById("riskDashboard").addEventListener("click", (e) => {
    e.stopPropagation();
});
