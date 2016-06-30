'use strict';

var assembler = {
	assemble: function(code) {
		if (code == null) return;
    this.code = [];
    this.data = [];
    this.labels = {};
		this.linesCount = 0;
		this.instructions = [];
		this.output = "";
		this.mif = "";
		var regex = /([a-z]+)\s+R([0-9]),\s*(R([0-9])|#([0-9]+))/gi;
		var matches;
		while ((matches = regex.exec(code)) !== null) {
			this.instructions.push(new Instruction(matches[1],matches[2],matches[4],matches[5]))
		}
		for (var instr in this.instructions) {
			var newLines;
			newLines = decoder.decode(this.instructions[instr]);
			for (var line in newLines) {
				this.output += this.linesCount.toString(16) + " : " + newLines[line] + ";\n";
				this.linesCount++;
			}
			// this.output += newOutput;
		}
		
		this.mif += "DEPTH = 32;\n";
		this.mif += "WIDTH = 16;\n";
		this.mif += "ADDRESS_RADIX = HEX;\n";
		this.mif += "DATA_RADIX = BIN;\n";
		this.mif += "CONTENT\n";
		this.mif += "BEGIN\n\n";
		this.mif += this.output;
		this.mif += "\nEND;\n";
		
		return this.mif;
	}
};

function Instruction(instr, par1, par2, immed) {
	this.instr = instr;
	this.par1 = par1;
	this.par2 = par2;
	this.immed = immed;
	this.tostrinh
};
