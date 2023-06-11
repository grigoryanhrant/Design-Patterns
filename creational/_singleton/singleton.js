class Counter {
	constructor() {
		if (typeof Counter.instance === 'object') {
			return Counter.instance;
		}
		this.count = 0;
		Counter.instance = this;
		return this;
	}

	getCount() {
		return this.count;
	}

	increaseCount() {
		return this.count++;
	}
}

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount2.increaseCount();