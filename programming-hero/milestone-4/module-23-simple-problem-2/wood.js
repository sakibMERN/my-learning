// wood requirement 

function woodRequirment(chair, table, bed) {
    const perChair = 5;
    const perTable = 4;
    const perBed = 10;

    const allChairWood = perChair * chair;
    const allTableWood = perTable * table;
    const allBedWood = perBed * bed;

    const totalWood = allChairWood + allTableWood + allBedWood;

    return totalWood;
}

const wood = woodRequirment(2, 0, 5);
console.log("Total wood need: ", wood + "cft");