const Intern = require("../lib/Intern")
test("this tests if school is a string", ()=>{
    const intern = new Intern ("Bob", 2, "internmail","UCF")
expect(intern.school).toBe("UCF")})
test("this tests if getSchool is a string", ()=>{
    const intern = new Intern ("Bob", 2, "internmail","UCF")
expect(intern.getSchool()).toBe("UCF")})
test("this tests if getRole is intern", ()=>{
    const intern = new Intern ("Bob", 2, "internmail","UCF")
expect(intern.getRole()).toBe("Intern")})


// test to see if intern exists by name or school
// test to return "intern"