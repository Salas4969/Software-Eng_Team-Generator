const Employee = require("../lib/Employee")
test("this tests if name is a string", ()=>{
    const employee = new Employee ("Bob", 2, "internmail")
expect(employee.name).toBe("Bob")})

test("this tests if id is a integer", ()=>{
    const employee = new Employee ("Bob", "2", "internmail")
expect(employee.id).toBe(2)})

test("this tests if email is a string", ()=>{
    const employee = new Employee ("Bob", 2, "mail")
expect(employee.email).toBe("mail")})

test("this tests if getRole is employee", ()=>{
    const employee = new Employee ("Bob", 2, "internmail")
expect(employee.getRole()).toBe("Employee")})

test("this tests if getID is employee", ()=>{
    const employee = new Employee ("Bob", "2", "internmail")
expect(employee.getID()).toBe(2)})

test("this tests if getName is employee", ()=>{
    const employee = new Employee ("Bob", 2, "internmail")
expect(employee.getName()).toBe("Bob")})

test("this tests if getEmail is employee", ()=>{
    const employee = new Employee ("Bob", 2, "mail")
expect(employee.getEmail()).toBe("mail")})