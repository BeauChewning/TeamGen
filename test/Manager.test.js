const Manager = require("../lib/employee");

test("Should create a new employee object if provided valid arguments", () => {
    const myManager = new Manager();
    expect(typeof(myManager)).toBe("object");
})

test("Should successfully set employee info", () => {
    const name = "beau"
    const id = "1234"
    const email = "beau@email"
    const myManager = new Manager(name, id, email)
    expect(myManager.name).toBe(name)
    expect(myManager.id).toBe(id)
    expect(myManager.email).toBe(email)
})