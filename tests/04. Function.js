
// Контекст
const obj = {
    bar: 1,
    foo() {
        return this.bar
    }
}
obj.foo();

const _foo = obj.foo
_foo(); 