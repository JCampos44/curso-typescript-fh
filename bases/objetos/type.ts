(() => {
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    };

    let flash: Hero = {
        age: 24,
        name: 'Barry Allen',
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };

    let superman: Hero = {
        age: 60,
        name: 'Clark Kent',
        powers: ['Super velocidad'],
        getName() {
            return this.name;
        },
    };
})();
