const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const owed = `R ${(Math.abs(parseFloat(leoBalance)) + Math.abs(parseFloat(sarahBalance))).toFixed(2)}`; 
const leo = `${leoName}${leoSurname.trim()} Owed R ${Math.abs(parseFloat(leoBalance)).toFixed(2)}`;
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed R ${sarahBalance.toFixed(2)})`;
const total = `Total amount owed: R ${parseFloat(leoBalance + sarahBalance).toFixed(2)}`;
const result = `
${leo}
${sarah}

${divider}
${total}${owed} 
${divider}
 ${divider}`

console.log(result)
