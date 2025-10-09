// Test Year formulas to find correct one
const THIEN_CAN = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
const DIA_CHI = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];

// Test case: 1987 = Đinh Mão
// Đinh is index 3, Mão is index 3

console.log('Testing year 1987 - Expected: Đinh Mão\n');

// Try different formulas
for (let stemBase = 0; stemBase <= 10; stemBase++) {
  for (let branchBase = 0; branchBase <= 12; branchBase++) {
    let stemValue = (1987 - stemBase) % 10;
    if (stemValue <= 0) stemValue += 10;

    let branchValue = (1987 - branchBase) % 12;
    if (branchValue <= 0) branchValue += 12;

    const can = THIEN_CAN[stemValue - 1];
    const chi = DIA_CHI[branchValue - 1];

    if (can === 'Đinh' && chi === 'Mão') {
      console.log(`✅ FOUND for 1987:`);
      console.log(`   Stem: (year - ${stemBase}) % 10 = ${stemValue} → ${can}`);
      console.log(`   Branch: (year - ${branchBase}) % 12 = ${branchValue} → ${chi}`);
      console.log();
    }
  }
}

// Test with known years
const testCases = [
  { year: 1900, expected: 'Canh Tý' },  // Canh = index 6, Tý = index 0
  { year: 1984, expected: 'Giáp Tý' },  // Giáp = index 0, Tý = index 0
  { year: 1987, expected: 'Đinh Mão' }, // Đinh = index 3, Mão = index 3
  { year: 2000, expected: 'Canh Thìn' }, // Canh = index 6, Thìn = index 4
  { year: 2024, expected: 'Giáp Thìn' }  // Giáp = index 0, Thìn = index 4
];

console.log('\n=== Testing with multiple years ===');
for (const {year, expected} of testCases) {
  // Formula: (year - 4) % 10 for stem, (year - 4) % 12 for branch
  let stemValue = (year - 4) % 10;
  if (stemValue <= 0) stemValue += 10;
  let branchValue = (year - 4) % 12;
  if (branchValue <= 0) branchValue += 12;

  const result = `${THIEN_CAN[stemValue - 1]} ${DIA_CHI[branchValue - 1]}`;
  console.log(`${year}: ${result} (expected: ${expected}) ${result === expected ? '✅' : '❌'}`);
}
