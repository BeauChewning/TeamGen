const Engineer = require("../lib/employee");

test("Should create a new employee object if provided valid arguments", () => {
    const myEngineer = new Engineer();
    expect(typeof(myEngineer)).toBe("object");
})

test("Should successfully set employee info", () => {
    const name = "beau"
    const id = "1234"
    const email = "beau@email"
    const myEngineer = new Engineer(name, id, email)
    expect(myEngineer.name).toBe(name)
    expect(myEngineer.id).toBe(id)
    expect(myEngineer.email).toBe(email)
})