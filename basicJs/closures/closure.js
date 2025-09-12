function outest() {

    const a = 'apple';

    return function outer() {

        return function inner() {

            const best_fruit = 'mango'
            console.log(a, best_fruit);

        }
    }
}

outest()()();
