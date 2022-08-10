// Exit class
class Exit {
	constructor(id, exitsTo, isSecret) {
		this.id = id; // The exit's id
		this.exitsTo = exitsTo; // room id that the exit goes to
		this.isSecret = isSecret; // is the room secret?
	}
}

// Room class
class Room {
	constructor(id, name, description, dimensions, exits={}, content={}) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.dimensions = dimensions;
		this.exits = exits;
		this.content = content;
		this.visited = false;		
	}
}

room1 = new Room(1, 'The cool room', 'It\'s really cool here', 'Big');



const room1 = {
	id: 1,
	name: 'The cold room',
	description: 'a cold room, filled with an eerie calm. You can see a gate to to the west and an opening to the north and east.',
	dimensions: 'big',
	exits: {
		north: {
			id: n, 
			exitsTo: 'room6', 
			isSecret: false,
			isBlocked: false
		},
		east: {
			id: e,
			exitsTo: 'room3',
			isSecret: false,
			isBlocked: false
		},
		west: {
			id: w,
			exitsTo: 'room2',
			isSecret: false,
			isBlocked: true
		}
	},
	content: ['torch'],
	visited: false
};

//Room 5 the coal room. 
const room5 = {
	id: 5,
	name: 'The coal room',
	description: 'a small soot ridden room that pulls a cough from your lungs. You can see an opening to the north.',
	dimensions: 'small',
	exits: {
		north: {
			id: n,
			exitsTo: 'room3',
			isSecret: false,
			isBlocked: false
		}
	},
	content: ['pickaxe'],
	visited: false
};
//Room 6 the waterfall room. 
const room6 = {
	id: 6,
	name: 'The waterfall room',
	description: 'a room filled with damp air, coming from a waterfall at the north side of the room. You can see an opening to the south.',
	dimensions: 'narrow',
	exits: {
		north: {
			id: n,
			exitsTo: 'room7',
			isSecret: true,
			isBlocked: false
		},
		south: {
			id: s,
			exitsTo: 'room1',
			isSecret: false,
			isBlocked: false
		}
	},
	content: [],
	visited: false
};

//Room 7 the caved in room. 
const room7 = {
	id: 7,
	name: 'The caved in room',
	description: 'a room strewn with rubble from the rotted supports to the west. You can see an opening to the east and south.',
	dimensions: 'medium',
	exits: {
		east: {
			id: e,
			exitsTo: 'room10',
			isSecret: false,
			isBlocked: false
		},
		south: {
			id: s,
			exitsTo: 'room6',
			isSecret: false,
			isBlocked: false
		},
		west: {
			id: n,
			exitsTo: 'room8',
			isSecret: true,
			isBlocked: true
		},
	},
	content: [],
	visited: false
};