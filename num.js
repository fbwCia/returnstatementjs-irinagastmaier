function minMax() {
    var foo = [0,1,12,33,20,-7]
	return [Math.min(...foo), Math.max(...foo)];
}
console.log(minMax())