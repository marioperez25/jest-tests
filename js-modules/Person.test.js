import Person from './Person'
let person1 = new Person('Mario', 'Perez')
test('can construct', ()=> {
    
    expect(person1).toEqual({
        name: 'Mario',
        lastName: 'Perez',
    })
    expect(person1.fullName()).toBe('Mario Perez')
})