'use strict';

var assembler = {
	assemble: function(code) {
		if (code == null) return;
    this.code = [];
    this.data = [];
    this.labels = {};
		this.numberOfInstructions = 0;
		this.instructions = [];
		this.output = "";
		var regex = /([a-z]*)\s*R([0-9]),(R([1-9])|#([0-9]*))/gi;
		var matches;
		while ((matches = regex.exec(code)) !== null) {
			// console.log(matches);
			this.instructions.push(new Instruction(matches[1],matches[2],matches[4],matches[5]))
		}
		// console.log(this.instructions);
		for (var instr in this.instructions) {
			this.output += decoder.decode(this.instructions[instr]);
		}
		return this.output;
	}
};

function Instruction(instr, par1, par2, immed) {
	this.instr = instr;
	this.par1 = par1;
	this.par2 = par2;
	this.immed = immed;
	this.tostrinh
};
