//userId:
//     user1-...user6 = на руках у игрока
//     trump = козырная под колодой
//     pack = в колоде
//     on-field = на поле
//     pile = в бите

export default [{
    'hearts': {   // червы
        '6': { named:'6_hearts', userId:'user1' },
        '7': { named:'7_hearts', userId:'user2' },
        '8': { named:'8_hearts', userId:'user2' },
        '9': { named:'9_hearts', userId:'user3' },
        '10': { named:'10_hearts', userId:'user3' },
        'J': { named:'J_hearts', userId:'user1' },
        'Q': { named:'Q_hearts', userId:'user2' },
        'K': { named:'K_hearts', userId:'user2' },
        'A': { named:'A_hearts', userId:'user3' },
    },

    'clubs': { //  крести
        '6': { named:'6_clubs', userId:'user1' },
        '7': { named:'7_clubs', userId:'user1' },
        '8': { named:'8_clubs', userId:'user2' },
        '9': { named:'9_clubs', userId:'user2' },
        '10': { named:'10_clubs', userId:'user3' },
        'J': { named:'J_clubs', userId:'user3' },
        'Q': { named:'Q_clubs', userId:'user3' },
        'K': { named:'K_clubs', userId:'user4' },
        'A': { named:'A_clubs', userId:'user4' },
    },

    'diamonds': { //  буби
        '6': { named:'6_diamonds', userId:'user1' },
        '7': { named:'7_diamonds', userId:'user4' },
        '8': { named:'8_diamonds', userId:'user4' },
        '9': { named:'9_diamonds', userId:'user4' },
        '10': { named:'10_diamonds', userId:'user4' },
        'J': { named:'J_diamonds', userId:'user5' },
        'Q': { named:'Q_diamonds', userId:'user5' },
        'K': { named:'K_diamonds', userId:'user5' },
        'A': { named:'A_diamonds', userId:'user5' },
    },

    'spades': { //  пики
        '6': { named:'6_spades', userId:'user6' },
        '7': { named:'7_spades', userId:'user6' },
        '8': { named:'8_spades', userId:'user6' },
        '9': { named:'9_spades', userId:'user6' },
        '10': { named:'10_spades', userId:'user6' },
        'J': { named:'J_spades', userId:'user6' },
        'Q': { named:'Q_spades', userId:'user1' },
        'K': { named:'K_spades', userId:'user5' },
        'A': { named:'A_spades', userId:'user5' },
    },
}]
