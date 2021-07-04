const Manager = require("../lib/Manager")
test("this tests if office number is a integer", ()=>{
    const manager = new Manager ("Bob", 2, "internmail","2")
expect(manager.officenumber).toBe(2)})
test("this tests if getOfficeNumber is a number", ()=>{
    const manager = new Manager ("Bob", 2, "internmail","2")
expect(manager.getOfficeNumber()).toBe(2)})
test("this tests if getRole is manager", ()=>{
    const manager = new Manager ("Bob", 2, "internmail","2")
expect(manager.getRole()).toBe("Manager")})