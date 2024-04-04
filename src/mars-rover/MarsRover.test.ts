
// Can two rovers be in the same spot ? What should we do about it ?
// NO It should be impossible to have more rovers than spot in the grid

import { moveRovers } from "./Rover";

// Test list


// Parse string input
// No rover => no output
// 1 rover, no move => same position

// 1 rover, 1 rotation L|R => same position new direction
// 1 rover, 1 move => new position same direction
// Move outside of the map is impossible
// 1 rover, 1 move and 1 rotation => new position new direction
// Example from README with only 1 rover

// Example from README

// TODO


describe('Mars rover', () => {
    it('No rover => no output', () => {
        const output = moveRovers('5 5');
        expect(output).toBe('');
    });

    it('1 rover, no move => same position', () => {
        const output = moveRovers(
          `5 5
0 0 N`);
        expect(output).toBe('0 0 N');
    });

    it('rover turns to the left from North => Rover heads to West', () => {
      const output = moveRovers(
        `5 5
0 0 N
L`);
      expect(output).toBe('0 0 W');
    })

    it('rover turns to the right from North => change direction to East', () => {
        const output = moveRovers(
          `5 5
0 0 N
R`);
        expect(output).toBe('0 0 E');
      })

    it('rover turns to the right from East => change direction to South', () => {
        const output = moveRovers(
          `5 5
0 0 E
R`);
        expect(output).toBe('0 0 S');
      })
      it('rover move => move from one tile', () => {
        const output = moveRovers(
          `5 5
0 0 E
M`);
        expect(output).toBe('1 0 E');
      })
});

// Notes
// Tests inside out vs outside in :
// should we start by tests and implementation of smaller functions or rather test from the outside first?