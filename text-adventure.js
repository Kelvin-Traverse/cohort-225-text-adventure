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