const {Person} = require("../src/Person");

test("Should be able to create Person",() => {
    const person = new Person();
    expect(Person).not.toBe(null);
})
test("Should be able to create Person with first name and last name",() => {
    const person = new Person("John", "Doe");
    expect(person.firstName).toBe("John");
    expect(person.lastName).toBe("Doe");
})