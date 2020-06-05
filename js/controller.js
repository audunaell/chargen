// JavaScript source code
//controller

function increaseAttribute(index) {
    if (attributeList[index].score < 12 && attributePoints > 0) {
        attributeList[index].score = attributeList[index].score + 2;
        attributePoints--;
    }
    show();
}

function decreaseAttribute(index) {
    if (attributeList[index].score > 4) {
        attributeList[index].score = attributeList[index].score - 2;
        attributePoints++;
    }
    show();
}
function increaseSkill(index) {
    if (skillList[index].score < 12 && skillPoints > 0) {
        if (skillList[index].score == 0) {
            skillList[index].score = 4;
            skillPoints--;
        } else {
            skillList[index].score = skillList[index].score + 2;
            skillPoints--;
        }
    }
    show();
}

function decreaseSkill(index) {
    if (skillList[index].score > 4) {
        skillList[index].score = skillList[index].score - 2;
        skillPoints++;
    }
    show();
}

function SelecetHindrance(hindranceValue, index) {
    if (hindrancePoints >= hindranceValue) {
        hindrancePoints = hindrancePoints - hindranceValue;
        pointsFromH = pointsFromH + hindranceValue;
        selectedHindrances.push({ name: hindrancesList[index].name, cost: hindranceValue });
    }    
    show();
}

function removeHindrance(index) {
    hindrancePoints = hindrancePoints + selectedHindrances[index].cost;
    pointsFromH = pointsFromH - selectedHindrances[index].cost;
    selectedHindrances.splice(index, 1);

    show();
}