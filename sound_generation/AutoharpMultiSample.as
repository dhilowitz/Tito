﻿package
{
	public class AutoharpMultiSample extends MultiSample
	{
		
		
		public function AutoharpMultiSample()
		{
			//Initialize our array
			this.theSamples = new Array();
			this.theNotes = new Array(127);
			
			//Populate our sample with data
			this.theSamples[0] = new Sample(48, "autoharp/048.mp3"); 
				this.theNotes[48] = new Note(48, this.theSamples[0], 0);
				this.theNotes[49] = new Note(49, this.theSamples[0], 1);
			this.theSamples[1] = new Sample(50, "autoharp/050.mp3"); 
				this.theNotes[50] = new Note(50, this.theSamples[1], 0);
				this.theNotes[51] = new Note(51, this.theSamples[1], 1);
				this.theNotes[52] = new Note(52, this.theSamples[1], 2);
				this.theNotes[53] = new Note(53, this.theSamples[1], 3);
				this.theNotes[54] = new Note(54, this.theSamples[1], 4);
			this.theSamples[2] = new Sample(55, "autoharp/055.mp3"); 
				this.theNotes[55] = new Note(55, this.theSamples[2], 0);
				this.theNotes[56] = new Note(56, this.theSamples[2], 1);
			this.theSamples[3] = new Sample(57, "autoharp/057.mp3"); 
				this.theNotes[57] = new Note(57, this.theSamples[3], 0);
				this.theNotes[58] = new Note(58, this.theSamples[3], 1);
			this.theSamples[4] = new Sample(59, "autoharp/059.mp3"); 
				this.theNotes[59] = new Note(59, this.theSamples[4], 0);
			this.theSamples[5] = new Sample(60, "autoharp/060.mp3"); 
				this.theNotes[60] = new Note(60, this.theSamples[5], 0);
			this.theSamples[6] = new Sample(61, "autoharp/061.mp3"); 
				this.theNotes[61] = new Note(61, this.theSamples[6], 0);
			this.theSamples[7] = new Sample(62, "autoharp/062.mp3"); 
				this.theNotes[62] = new Note(62, this.theSamples[7], 0);
				this.theNotes[63] = new Note(63, this.theSamples[7], 1);
			this.theSamples[8] = new Sample(64, "autoharp/064.mp3"); 
				this.theNotes[64] = new Note(64, this.theSamples[8], 0);
			this.theSamples[9] = new Sample(65, "autoharp/065.mp3"); 
				this.theNotes[65] = new Note(65, this.theSamples[9], 0);
			this.theSamples[10] = new Sample(66, "autoharp/066.mp3"); 
				this.theNotes[66] = new Note(66, this.theSamples[10], 0);
			this.theSamples[11] = new Sample(67, "autoharp/067.mp3"); 
				this.theNotes[67] = new Note(67, this.theSamples[11], 0);
				this.theNotes[68] = new Note(68, this.theSamples[11], 1);
			this.theSamples[12] = new Sample(69, "autoharp/069.mp3"); 
				this.theNotes[69] = new Note(69, this.theSamples[12], 0);
				this.theNotes[70] = new Note(70, this.theSamples[12], 1);
			this.theSamples[13] = new Sample(71, "autoharp/071.mp3"); 
				this.theNotes[71] = new Note(71, this.theSamples[13], 0);
			this.theSamples[14] = new Sample(72, "autoharp/072.mp3"); 
				this.theNotes[72] = new Note(72, this.theSamples[14], 0);
			this.theSamples[15] = new Sample(73, "autoharp/073.mp3"); 
				this.theNotes[73] = new Note(73, this.theSamples[15], 0);
			this.theSamples[16] = new Sample(74, "autoharp/074.mp3"); 
				this.theNotes[74] = new Note(74, this.theSamples[16], 0);
				this.theNotes[75] = new Note(75, this.theSamples[16], 1);
			this.theSamples[17] = new Sample(76, "autoharp/076.mp3"); 
				this.theNotes[76] = new Note(76, this.theSamples[17], 0);
			this.theSamples[18] = new Sample(77, "autoharp/077.mp3"); 
				this.theNotes[77] = new Note(77, this.theSamples[18], 0);
			this.theSamples[19] = new Sample(78, "autoharp/078.mp3"); 
				this.theNotes[78] = new Note(78, this.theSamples[19], 0);
			this.theSamples[20] = new Sample(79, "autoharp/079.mp3"); 
				this.theNotes[79] = new Note(79, this.theSamples[20], 0);
				this.theNotes[80] = new Note(80, this.theSamples[20], 1);
			this.theSamples[21] = new Sample(81, "autoharp/081.mp3"); 
				this.theNotes[81] = new Note(81, this.theSamples[21], 0);
			this.theSamples[22] = new Sample(83, "autoharp/083.mp3"); 
				this.theNotes[83] = new Note(83, this.theSamples[22], 0);
			this.theSamples[23] = new Sample(84, "autoharp/084.mp3"); 
				this.theNotes[84] = new Note(84, this.theSamples[23], 0);
			this.theSamples[24] = new Sample(85, "autoharp/085.mp3"); 
				this.theNotes[85] = new Note(85, this.theSamples[24], 0);
			this.theSamples[25] = new Sample(86, "autoharp/086.mp3"); 
				this.theNotes[86] = new Note(86, this.theSamples[25], 0);
				this.theNotes[87] = new Note(87, this.theSamples[25], 1);
			this.theSamples[26] = new Sample(88, "autoharp/088.mp3"); 
				this.theNotes[88] = new Note(88, this.theSamples[26], 0);
			this.theSamples[27] = new Sample(89, "autoharp/089.mp3"); 
				this.theNotes[89] = new Note(89, this.theSamples[27], 0);
			this.theSamples[28] = new Sample(90, "autoharp/090.mp3"); 
				this.theNotes[90] = new Note(90, this.theSamples[28], 0);
			this.theSamples[29] = new Sample(91, "autoharp/091.mp3"); 
				this.theNotes[91] = new Note(91, this.theSamples[29], 0);
				this.theNotes[92] = new Note(92, this.theSamples[29], 1);
			this.theSamples[30] = new Sample(93, "autoharp/093.mp3"); 
				this.theNotes[93] = new Note(93, this.theSamples[30], 0);
				this.theNotes[94] = new Note(94, this.theSamples[30], 1);
			this.theSamples[31] = new Sample(95, "autoharp/095.mp3"); 
				this.theNotes[95] = new Note(95, this.theSamples[31], 0);
				this.theNotes[96] = new Note(96, this.theSamples[31], 1);
				this.theNotes[97] = new Note(97, this.theSamples[31], 2);
				this.theNotes[98] = new Note(98, this.theSamples[31], 3);
				this.theNotes[99] = new Note(99, this.theSamples[31], 4);
				this.theNotes[100] = new Note(100, this.theSamples[31], 5);
				this.theNotes[101] = new Note(101, this.theSamples[31], 6);
				this.theNotes[102] = new Note(102, this.theSamples[31], 7);
				this.theNotes[103] = new Note(103, this.theSamples[31], 8);
				this.theNotes[104] = new Note(104, this.theSamples[31], 9);
				this.theNotes[105] = new Note(105, this.theSamples[31], 10);
				this.theNotes[106] = new Note(106, this.theSamples[31], 11);
				this.theNotes[107] = new Note(107, this.theSamples[31], 12);
			
		}
	}
}