function calculateMaterials(base, increment) {
    let steps = Math.ceil(base / 2);
    let materials = {
        stone: 0,
        marble: 0,
        lapis: 0,
        gold: 0
    };

    for (let i = 1; i <= steps; i++) {
        let stone = Math.pow(base - 2, 2) * increment;
        let outerLayer = (2 * base + 2 * (base - 2)) * increment;

        if (i < steps && i % 5 !== 0) {
            materials.stone += stone;
            materials.marble += outerLayer;
            base -= 2;
        }

        if (i < steps && i % 5 === 0) {
            materials.stone += stone;
            materials.lapis += outerLayer;
            base -= 2;
        }

        if (i === steps) {
            materials.gold += Math.pow(base, 2) * increment;
        }
    }

    console.log(`Stone required: ${Math.ceil(materials.stone)}`);
    console.log(`Marble required: ${Math.ceil(materials.marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(materials.lapis)}`);
    console.log(`Gold required: ${Math.ceil(materials.gold)}`);
    console.log(`Final pyramid height: ${Math.floor(steps * increment)}`);
}

calculateMaterials(11, 0.75);