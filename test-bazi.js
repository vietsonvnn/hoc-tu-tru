// Quick test for Bazi calculation
// Test case: 3/9/1987 14:15

// Expected results from tutru.xemboi.today:
// Year: Đinh Mão
// Month: Mậu Thân
// Day: Ất Mão
// Hour: Quý Mùi
// Life Palace (Mệnh Cung): Nhâm Dần (Kim)
// Body Palace (Thân Cung): Giáp Thìn (Hỏa)

const THIEN_CAN = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
const DIA_CHI = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];

console.log('=== TEST BAZI: 3/9/1987 14:15 ===\n');

// Test Year: 1987
const year = 1987;
let yearStemValue = year % 10 - 3;
if (yearStemValue < 1) yearStemValue += 10;
const yearCan = THIEN_CAN[yearStemValue - 1];

let yearBranchValue = (year - 5) % 12;
if (yearBranchValue < 1) yearBranchValue += 12;
const yearChi = DIA_CHI[yearBranchValue - 1];

console.log('Year Pillar (Current):');
console.log(`  Calculated: ${yearCan} ${yearChi}`);
console.log(`  Expected: Đinh Mão`);
console.log(`  Match: ${yearCan === 'Đinh' && yearChi === 'Mão' ? '✅' : '❌'}\n`);

// Test Day using reference date method
const referenceDate = new Date(1900, 0, 1, 0, 0, 0);
const testDate = new Date(1987, 8, 3, 14, 15, 0); // Sep 3, 1987 14:15

const adjustedDate = new Date(testDate.getTime() + 3600000); // +1 hour
const daysDiff = Math.floor((adjustedDate - referenceDate) / (1000 * 60 * 60 * 24));

let dayStemValue = (daysDiff + 1) % 10;
if (dayStemValue === 0) dayStemValue = 10;
const dayCan = THIEN_CAN[dayStemValue - 1];

let dayBranchValue = (daysDiff - 3) % 12;
if (dayBranchValue <= 0) dayBranchValue += 12;
const dayChi = DIA_CHI[dayBranchValue - 1];

console.log('Day Pillar (Current):');
console.log(`  Days since 1/1/1900: ${daysDiff}`);
console.log(`  Calculated: ${dayCan} ${dayChi}`);
console.log(`  Expected: Ất Mão`);
console.log(`  Match: ${dayCan === 'Ất' && dayChi === 'Mão' ? '✅' : '❌'}\n`);

// Test Hour: 14:15 → hour 14
const hour = 14;
const hourChiIndex = Math.floor((hour + 1) / 2) % 12;
const hourChi = DIA_CHI[hourChiIndex];

console.log('Hour Pillar (Current):');
console.log(`  Hour: ${hour}`);
console.log(`  Chi Index: ${hourChiIndex}`);
console.log(`  Calculated Chi: ${hourChi}`);
console.log(`  Expected: Quý Mùi`);
console.log(`  Chi Match: ${hourChi === 'Mùi' ? '✅' : '❌'}\n`);

// Let's also check alternative formulas
console.log('\n=== TESTING ALTERNATIVE YEAR FORMULAS ===');
console.log('Formula 1 (current): stem = year%10-3, branch = (year-5)%12');
console.log(`  Result: ${yearCan} ${yearChi} ${yearCan === 'Đinh' && yearChi === 'Mão' ? '✅' : '❌'}`);

// Alternative formula
let alt_stem = (year - 4) % 10;
if (alt_stem <= 0) alt_stem += 10;
let alt_branch = (year - 4) % 12;
if (alt_branch <= 0) alt_branch += 12;
console.log(`Formula 2: stem = (year-4)%10, branch = (year-4)%12`);
console.log(`  Result: ${THIEN_CAN[alt_stem-1]} ${DIA_CHI[alt_branch-1]} ${THIEN_CAN[alt_stem-1] === 'Đinh' && DIA_CHI[alt_branch-1] === 'Mão' ? '✅' : '❌'}`);

console.log('\n=== TESTING ALTERNATIVE DAY FORMULAS ===');
console.log(`Formula 1 (current): stem = (days+1)%10, branch = (days-3)%12`);
console.log(`  Days: ${daysDiff}, Result: ${dayCan} ${dayChi} ${dayCan === 'Ất' && dayChi === 'Mão' ? '✅' : '❌'}`);

// Try alternative offsets
for (let stemOffset = -2; stemOffset <= 2; stemOffset++) {
  for (let branchOffset = -2; branchOffset <= 2; branchOffset++) {
    let testStem = (daysDiff + stemOffset) % 10;
    if (testStem === 0) testStem = 10;
    if (testStem < 0) testStem += 10;

    let testBranch = (daysDiff + branchOffset) % 12;
    if (testBranch === 0) testBranch = 12;
    if (testBranch < 0) testBranch += 12;

    const stemStr = THIEN_CAN[testStem - 1];
    const branchStr = DIA_CHI[testBranch - 1];

    if (stemStr === 'Ất' && branchStr === 'Mão') {
      console.log(`  ✅ FOUND: stem offset=${stemOffset}, branch offset=${branchOffset}`);
      console.log(`     Formula: stem = (days+${stemOffset})%10, branch = (days+${branchOffset})%12`);
    }
  }
}
