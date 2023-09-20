// Script Part

// Load the button and stuff

var clickBtn = document.getElementById("clickBtn")
var upgradeBtn = document.getElementById("upgradeBtn")

var clickCounter = document.getElementById("clickCounter")
var nextUpgradeCost = document.getElementById("clicksForNextUpgrade")

var clicks = 0,
    upgradeCost = 50,
    multiplier = 1

// Even if it is at the value of 0. Still update it.
clickCounter.textContent = clicks
nextUpgradeCost.textContent = "Upgrade Cost: " + upgradeCost

// Check for our click.
clickBtn.addEventListener("click", () => {
    // Update the clicks
    clicks += multiplier

    // Update the text
    clickCounter.textContent = clicks
})

// Check for our upgrade click
upgradeBtn.addEventListener('click', () => {
    // If we got 50+ clicks, upgrade
    if (clicks >= upgradeCost) {
        multiplier++
        
        // Take the clicks out
        clicks -= upgradeCost

        // Increase it
        upgradeCost *= 3

        // Update the text
        clickCounter.textContent = clicks
        nextUpgradeCost.textContent = "Upgrade Cost: " + upgradeCost
    }
})

// Hope you guys enjoyed the tutorial! Cya!!

// Next Video: Clicker Game Website Tutorial! PART 2