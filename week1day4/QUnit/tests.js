var ATOMS = {
  Hydrogen: { symbol: "H", mass: 1 },
  Carbon:   { symbol: "C", mass: 12 },
  Oxygen:   { symbol: "O", mass: 16 }
};

function createMolecule(atoms) {
  return {
    atoms: atoms,
    mass: calculateMass(atoms)
  };
}

function calculateMass(atoms) {
  var mass = 0;
  for (var atom of atoms) {
    mass += atom.mass;
  }
  return mass;
}

/* The function, MatterFactory, is the only code that
 * should be modified to complete the exercise
 */
function MatterFactory(substance) {
  var atoms;
  switch (substance.toLowerCase()) {
    case "water":           // H20
      atoms = [ATOMS.Hydrogen, ATOMS.Hydrogen, ATOMS.Oxygen];
      break;
    case "carbon dioxide":  // CO2
      atoms = [ATOMS.Carbon, ATOMS.Oxygen, ATOMS.Oxygen];
      break;
    case "ethane":          // C2H6
      atoms = [ATOMS.Carbon, ATOMS.Carbon, ATOMS.Hydrogen, ATOMS.Hydrogen, ATOMS.Hydrogen, ATOMS.Hydrogen, ATOMS.Hydrogen, ATOMS.Hydrogen];
      break;
    default:
      break;
  }
  return createMolecule(atoms);
}

QUnit.test("Mass of Water", function( assert ) {          // passing
  var molecule = MatterFactory("water");
  assert.ok(molecule.mass == 18);
});

QUnit.test("Mass of Carbon Dioxide", function( assert ) { // passing
  var molecule = MatterFactory("carbon dioxide");
  assert.equal(molecule.mass, 44);
  assert.equal(molecule.atoms.length, 3);
});

QUnit.test("Mass of Ethane", function( assert ) {         // failing
  var molecule = MatterFactory("ethane");
  assert.equal(molecule.mass, 30);
  assert.equal(molecule.atoms.length, 8);
});

QUnit.test("Throw Exception on Unknown Substance", function( assert ) { // failing
  assert.throws(function() {
    var greenStuff = MatterFactory("Kryptonite");
  });
});
