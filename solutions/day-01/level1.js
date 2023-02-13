const emptyArr = []

const moreThanFive = [1, 2, 3, 4, 5, 6]

console.log(moreThanFive.length)

console.log(moreThanFive[0], moreThanFive[Math.floor(moreThanFive.length / 2)], moreThanFive[moreThanFive.length - 1])

const mixedDataTypes = [1, 'one', true, 1.1, '1', 1.111111111111111111111]
console.log(mixedDataTypes.length)

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

console.log(itCompanies)

console.log(itCompanies.length)

console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[itCompanies.length - 1])

itCompanies.forEach(company => console.log(company))

let itCompaniesUpper = itCompanies.map(company => company.toUpperCase())

itCompaniesUpper.forEach(company => console.log(company))

let companyString = ''
itCompanies.forEach((company, index) => {
    if (index < itCompanies.length - 2) {
        companyString += `${company}, `
    } else if (index < itCompanies.length - 1) {
        companyString += `${company} `
    } else {
        companyString += `and ${company} are big IT companies.`
    }
})
console.log(companyString)

function checkCompany(companyToCheck) {
    let companyToReturn = ''
    companyToReturn = itCompanies.find(company => company === companyToCheck)
    return (companyToReturn) ? companyToReturn : 'company is not found'
}
console.log(checkCompany('Google'))

console.log('14.')
const itCompaniesRm = [...itCompanies]
for (let i = 0; i < itCompaniesRm.length; i++) {
    const company = itCompaniesRm[i]
    if (company.match(/o/g) && company.match(/o/g).length > 1) {
        itCompaniesRm.splice(i, 1)
        i--
    }
}
console.log(itCompaniesRm)

console.log('15.')
itCompanies.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
console.log(itCompanies)

console.log('16.')
itCompanies.reverse()
console.log(itCompanies)

console.log('17.')
console.log(itCompanies.slice(0, 3))

console.log('18.')
console.log(itCompanies.slice(-3, itCompanies.length))

console.log('19.')
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.ceil(itCompanies.length / 2))) //only works with uneven length

console.log('20.')
console.log(itCompanies.splice(0, 1))

console.log('21.')
console.log(itCompanies.splice(itCompanies.length / 2, 1))

console.log('22.')
console.log(itCompanies.splice(-1, 1))

console.log('23.')
console.log(itCompanies.splice(0, 0))


const test = {
    name: 'george',
    age: 22,
    job: 'marketer', 
    married: false
}

for (const key in test) {
    console.log(key)
}

const stringsS = ['january', 'february', 'march', 'april']
const [jan, feb, mar, apr] = stringsS

console.log(feb)