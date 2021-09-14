const pointNines = 0.9999999;
let savedRandomSeed = 0;
let savedNoiseSeed = 0;

function hash(str) {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash = ((hash << 5) - hash) + str.charCodeAt(i);
		hash |= 0;
	}
	return hash;
}

function mod(a, b) {
	return ((a % b) + b) % b;
}

function randomInt() {
	let value = random(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
	value |= 0;
	return value;
}

function rSet(value) {
	randomSeed((mod(value, 10000) * 0xda942042e4dd58b5) >> 64);
}

function rPush(value) {
	savedRandomSeed = floor(randomInt());
	randomSeed((mod(value, 10000) * 0xda942042e4dd58b5) >> 64);
}

function rPop() {
	randomSeed(savedRandomSeed);
}

function nSet(value){
	noiseSeed(value);
}