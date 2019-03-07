function test () {
    const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const codes = a.map((e) => e.charCodeAt(0));
    return codes;
}

console.log(test());
