// testCases.js
const assert = require('assert');

function testAdd() {
    assert.strictEqual(add(2, 3), 5);
    assert.strictEqual(add(-1, -1), -2);
    assert.strictEqual(add(0, 0), 0);
    console.log('All add() tests passed');
}

function testSubtract() {
    assert.strictEqual(subtract(5, 3), 2); // This will fail with the current implementation
    assert.strictEqual(subtract(0, 0), 0);
    assert.strictEqual(subtract(-1, -1), 0);
    console.log('All subtract() tests passed');
}

testAdd();
testSubtract();
