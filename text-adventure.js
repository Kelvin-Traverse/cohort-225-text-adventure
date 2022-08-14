// Constructors created before switching to hard coding
// // Exit class
// class Exit {
// 	constructor(id, exitsTo, isSecret) {
// 		this.id = id; // The exit's id
// 		this.exitsTo = exitsTo; // room id that the exit goes to
// 		this.isSecret = isSecret; // is the room secret?
// 	}
// }

// // Room class
// class Room {
// 	constructor(id, name, description, dimensions, exits={}, content={}) {
// 		this.id = id;
// 		this.name = name;
// 		this.description = description;
// 		this.dimensions = dimensions;
// 		this.exits = exits;
// 		this.content = content;
// 		this.visited = false;		
// 	}
// }


//Room 1 the cold room
const room1 = {
	name: 'The cold room',
	description: [
		'a cold room, filled with an eerie calm.', 
		'You can see a gate to to the west and an opening to the north and east.'
	],
	dimensions: 'big',
	exits: {
		north: { 
			exitsTo: 6, 
			isSecret: false,
			isBlocked: false
		},
		east: {
			exitsTo: 3,
			isSecret: false,
			isBlocked: false
		},
		west: {
			exitsTo: 2,
			isSecret: false,
			isBlocked: true
		}
	},
	content: ['torch'],
	visited: false
};

//Room 2
const room2 = {
  name:'library',
	description: ['You entered library room through a secret bookshelf door behind you.',
   'Door behind you was closed automatically.',
   'If you want to exit the library room you should find the red bookcase.',
   'There are two chairs in front of the windows.',
   'What do you want to do?'
  ],
	dimensions: 'big',
  exits: {
		east: {
				exitsTo: 1,
				isSecret: true,
				isBlocked: true
		}
  },
	content: ['red bookcase'],
  visited: false
};

//Room 3
const room3 = {
    name: 'Room Of Enlightenment',
    description: [
        'You enter a dark dim room',
        'In the center of the room there is a key within a vase',
        'This key will either move you forward or hold you back'
    ],
    dimensions: 'Medium',
    exits: {
		east: {
			exitsTo: 4,
			isSecret: false,
			isBlocked: true
		},
		south: { 
			exitsTo: 5, 
			isSecret: false,
			isBlocked: false
		},
		west: {
			exitsTo: 1,
			isSecret: false,
			isBlocked: false
		}
    },
    content: ['Key'],
    visited: false
};


//Room 4
const room4 = {
name: 'the runic alter',
description: [
	'a room made of chiseled stone.',
	'to the east of the room you see an alter topped with doused candles',
	'You can see an opening to the west.'
],
dimensions: 'small',
exits: {
    west: {
        exitsTo: 3,
        isSecret: false,
        isBlocked: true
     }
  },
  //switch one toggles gate between room 8 and room 9
  content: ['switch1', 'candle'],
  visited: false
};

//Room 5 the coal room. 
const room5 = {
	name: 'The coal room',
	description: [
		'a small soot ridden room that pulls a cough from your lungs.', 
		'You can see an opening to the north.'
	],
	dimensions: 'small',
	exits: {
		north: {
			exitsTo: 3,
			isSecret: false,
			isBlocked: false
		}
	},
	content: ['pickaxe'],
	visited: false
};
//Room 6 the waterfall room. 
const room6 = {
	name: 'The waterfall room',
	description: [
		'a room filled with damp air.',
		'You see a waterfall on the north side of the room.', 
		'You can see an opening to the south.'
	],
	dimensions: 'narrow',
	exits: {
		north: {
			exitsTo: 7,
			isSecret: true,
			isBlocked: false
		},
		south: {
			exitsTo: 1,
			isSecret: false,
			isBlocked: false
		}
	},
	content: [],
	visited: false
};

//Room 7 the caved in room. 
const room7 = {
	name: 'The caved in room',
	description: [
		'a room strewn with rubble from the rotted supports to the west.',
		'You can see an opening to the east and south.'
	],
	dimensions: 'medium',
	exits: {
		east: {
			exitsTo: 10,
			isSecret: false,
			isBlocked: false
		},
		south: {
			exitsTo: 6,
			isSecret: false,
			isBlocked: false
		},
		west: {
			exitsTo: 8,
			isSecret: true,
			isBlocked: true
		},
	},
	content: [],
	visited: false
};

//Room 8
const room8 = {
    name: 'Glowing Mushroom Chamber',

    description: [
        'You are in a large, dimly lit chamber.',
        'Scattered patches of luminescent mushrooms emit an eerie, green glow, casting strange shadows on the damp walls.',
        'In the center of the chamber, a tangled mass of the glowing fungi rises a meter or so above it\'s surroundings.',
        'On one side of the room sits a desk with an old book on it.',
        'To the north, you see a gate.'
    ],

    dimensions: 'large',

    exits: {
        north: {
            exitsTo: 9, 
            isSecret: false,
            isBlocked: true,
        },
        east: null,
        south: {
            exitsTo: 7,
            isSecret: false,
            isBlocked: false,
        },
        west: null,
    },

    content: ['desk', 'book', 'fungi'],

    visited: false,
};

//Room 9 The armory
const room9 = {
	name: 'the armory',
	description: [
		'a room filled with swords and shields.', 
		'You can see an opening to the south.'
	],
	dimensions: 'medium',
	exits: {
		south: {
			exitsTo: 8,
			isSecret: false,
			isBlocked: true
		}
	},
	// 'switch3' activates gate between room1 and room2
	content: ['switch3', 'sword', 'shield'],
	visited: false
};

//Room 10 ENTRANCE HALL
const room10 = {
	name: 'Entrance Hall',
	description: [
		'You enter a room. There is an exit across from where you enter.', 
        'Next to the exit sits an elderly man in battered armor.', 
        'On one wall are three faded banners.', 
        'Across from the banners on the other wall are three empty alcoves.'
	],
	dimensions: 'long',
	exits: {
		east: {
			exitsTo: null,
			isSecret: false,
			isBlocked: false
		},
		west: {
			exitsTo: 7,
			isSecret: false,
			isBlocked: false
		}
	},
	content: ['red tapestry', 'blue tapestry', 'green tapestry', 'red alcove', 'blue alcove', 'green alcove', 'old man'],
	visited: false
};
























// const room = {
//     id: ,
//     name: '',
//     description: 'a room . You can see an opening to the .',
//     dimensions: 'room dimension here',
//     exits: {
//         north: {
//             id: 'n', 
//             exitsTo: 'room', 
//             isSecret: false,
//             isBlocked: false
//         },
//         east: {
//             id: 'e',
//             exitsTo: 'room',
//             isSecret: false,
//             isBlocked: false
//         },
// 		south: {
// 			id: 's',
// 			exitsTo: 'room',
// 			isSecret: false,
// 			isBlocked: false
// 		},
//         west: {
//             id: 'w',
//             exitsTo: 'room',
//             isSecret: false,
//             isBlocked: false
//         }
//     },
//     content: [],
//     visited: false
// };