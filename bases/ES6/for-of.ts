(() => {
    type Avenger = {
        name: string;
        weapon: string;
    };

    const ironman: Avenger = {
        name: 'Iron-man',
        weapon: 'Armor Suit',
    };

    const captainAmerica: Avenger = {
        name: 'Capitán América',
        weapon: 'Shield',
    };

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir',
    };

    const avengers: Avenger[] = [ironman, thor, captainAmerica];

    for (const avenger of avengers) {
        console.log(avenger);
    }
})();
