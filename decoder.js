'use strict';

var decoder = {
	decode: function(instr) {
		var decoded;
		switch (instr.instr) {
			case "mv":
				decoded = "000";
				break;
			case "mvi":
				decoded = "001";
				break;
			case "add":
				decoded = "010";
				break;
			case "sub":
				decoded = "011";
				break;
			case "ld":
				decoded = "100";
				break;
			case "st":
				decoded = "101";
				break;
			case "mvnz":
				decoded = "110";
				break;
		}
		var str1 = "00" + (instr.par1 | 0).toString(2);
		var str2 = "00" + (instr.par2 | 0).toString(2);
		decoded += str1.substring(str1.length - 3) + str2.substring(str2.length - 3);
		decoded = "0000000" + decoded;
		decoded = decoded.substring(decoded.length-16);
		if (instr.immed != null) {
			var str3 = "000000000000000" + instr.immed.toString(2);
			decoded += str3.substring(str3.length-16);
		}
		return decoded;
	}
}