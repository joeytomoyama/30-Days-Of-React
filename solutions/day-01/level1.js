const emptyArr = []

const moreThanFive = [1, 2, 3, 4, 5, 6]

console.log(moreThanFive.length)

console.log(moreThanFive[0], moreThanFive[Math.floor(moreThanFive.length / 2)], moreThanFive[moreThanFive.length - 1])

const mixedDataTypes = [1, 'one', true, 1.1, '1', 1.111111111111111111111]
console.log(mixedDataTypes.length)

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

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

itCompanies //14