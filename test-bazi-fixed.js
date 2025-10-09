// Test FIXED Bazi calculation
// Test case: 3/9/1987 14:15
const THIEN_CAN = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
const DIA_CHI = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];

console.log('=== FIXED BAZI TEST: 3/9/1987 14:15 ===\n');

// Year: 1987 - Expected: Đinh Mão
const year = 1987;
let yearStemValue = (year - 3) % 10;
if (yearStemValue <= 0) yearStemValue += 10;
const yearCan = THIEN_CAN[yearStemValue - 1];

let yearBranchValue = (year - 3) % 12;
if (yearBranchValue <= 0) yearBranchValue += 12;
const yearChi = DIA_CHI[yearBranchValue - 1];

console.log(`Year: ${yearCan} ${yearChi}`);
console.log(`Expected: Đinh Mão`);
console.log(`Match: ${yearCan === 'Đinh' && yearChi === 'Mão' ? '✅' : '❌'}\n`);

// Day: 3/9/1987 - Expected: Ất Mão
const referenceDate = new Date(1900, 0, 1, 0, 0, 0);
const testDate = new Date(1987, 8, 3, 14, 15, 0);
const adjustedDate = new Date(testDate.getTime() + 3600000);
const daysDiff = Math.floor((adjustedDate - referenceDate) / (1000 * 60 * 60 * 24));

let dayStemValue = (daysDiff + 1) % 10;
if (dayStemValue === 0) dayStemValue = 10;
const dayCan = THIEN_CAN[dayStemValue - 1];

let dayBranchValue = (daysDiff - 1) % 12;
if (dayBranchValue <= 0) dayBranchValue += 12;
const dayChi = DIA_CHI[dayBranchValue - 1];

console.log(`Day: ${dayCan} ${dayChi}`);
console.log(`Expected: Ất Mão`);
console.log(`Match: ${dayCan === 'Ất' && dayChi === 'Mão' ? '✅' : '❌'}\n`);

// Hour: 14 - Expected: Quý Mùi
const hour = 14;
const hourChiIndex = Math.floor((hour + 1) / 2) % 12;
const hourChi = DIA_CHI[hourChiIndex];

// Five Rats Rule: Ất day → Bính Tý start (index 2)
// Day is Ất (index 1), so: case 2 → return 3 (Bính)
const dayStemIndex = THIEN_CAN.indexOf(dayCan);
const dayStemValueForHour = dayStemIndex + 1; // 1-based

let ratHourStem;
switch(dayStemValueForHour) {
  case 1: case 6:  ratHourStem = 1; break;  // Giáp/Kỷ → Giáp
  case 2: case 7:  ratHourStem = 3; break;  // Ất/Canh → Bính
  case 3: case 8:  ratHourStem = 5; break;  // Bính/Tân → Mậu
  case 4: case 9:  ratHourStem = 7; break;  // Đinh/Nhâm → Canh
  case 5: case 10: ratHourStem = 9; break;  // Mậu/Quý → Nhâm
  default: ratHourStem = 1;
}

let hourStemValue = (ratHourStem - 1 + hourChiIndex) % 10;
const hourCan = THIEN_CAN[hourStemValue];

console.log(`Hour: ${hourCan} ${hourChi}`);
console.log(`Expected: Quý Mùi`);
console.log(`Match: ${hourCan === 'Quý' && hourChi === 'Mùi' ? '✅' : '❌'}\n`);

// Month: Sep 3 - Expected: Mậu Thân
// Sep is month 9, day 3 is before solar term (白露 ~Sep 8)
// So should be month before: 立秋 (Aug 8) → Thân
const monthChi = 'Thân'; // From solar term

// Five Tigers: Đinh year (index 3, value 4) → case 4 → return 9 (Nhâm)
const yearStemIndex = THIEN_CAN.indexOf(yearCan);
const yearStemValueForMonth = yearStemIndex + 1;

let firstMonthStem;
switch(yearStemValueForMonth) {
  case 1: case 6:  firstMonthStem = 3; break;  // Giáp/Kỷ → Bính
  case 2: case 7:  firstMonthStem = 5; break;  // Ất/Canh → Mậu
  case 3: case 8:  firstMonthStem = 7; break;  // Bính/Tân → Canh
  case 4: case 9:  firstMonthStem = 9; break;  // Đinh/Nhâm → Nhâm
  case 5: case 10: firstMonthStem = 1; break;  // Mậu/Quý → Giáp
  default: firstMonthStem = 3;
}

// Thân is index 8, Dần is index 2
// Offset from Dần to Thân: 8 - 2 = 6
const monthBranchValue = DIA_CHI.indexOf(monthChi) + 1;
let monthStemValue = (firstMonthStem - 1) + (monthBranchValue - 3);
while (monthStemValue < 0) monthStemValue += 10;
while (monthStemValue >= 10) monthStemValue -= 10;

const monthCan = THIEN_CAN[monthStemValue];

console.log(`Month: ${monthCan} ${monthChi}`);
console.log(`Expected: Mậu Thân`);
console.log(`Match: ${monthCan === 'Mậu' && monthChi === 'Thân' ? '✅' : '❌'}\n`);

console.log('\n=== SUMMARY ===');
console.log(`Year:  ${yearCan} ${yearChi} ${yearCan === 'Đinh' && yearChi === 'Mão' ? '✅' : '❌'}`);
console.log(`Month: ${monthCan} ${monthChi} ${monthCan === 'Mậu' && monthChi === 'Thân' ? '✅' : '❌'}`);
console.log(`Day:   ${dayCan} ${dayChi} ${dayCan === 'Ất' && dayChi === 'Mão' ? '✅' : '❌'}`);
console.log(`Hour:  ${hourCan} ${hourChi} ${hourCan === 'Quý' && hourChi === 'Mùi' ? '✅' : '❌'}`);
