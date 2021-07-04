const Engineer = require("../lib/Engineer")
test("this tests if github is a string", ()=>{
    const engineer = new Engineer ("Bob", 2, "internmail","username")
expect(engineer.github).toBe("username")})
test("this tests if getGithub is a number", ()=>{
    const engineer = new Engineer ("Bob", 2, "internmail","username")
expect(engineer.getGithub()).toBe("username")})
test("this tests if getRole is engineer", ()=>{
    const engineer = new Engineer ("Bob", 2, "internmail","username")
expect(engineer.getRole()).toBe("Engineer")})