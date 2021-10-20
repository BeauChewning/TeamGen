const Intern = require("../lib/intern");

test("Should create a new employee object if provided valid arguments", () => {
    const myIntern = new Intern();
    expect(typeof(myIntern)).toBe("object");
})

test("Should successfully set employee info", () => {
    const name = "beau"
    const id = "1234"
    const email = "beau@email"
    const myIntern = new Intern(name, id, email)
    expect(myIntern.name).toBe(name)
    expect(myIntern.id).toBe(id)
    expect(myIntern.email).toBe(email)
})