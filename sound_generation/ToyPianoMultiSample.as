package
{
	public class ToyPianoMultiSample extends MultiSample
	{
		
		
		public function ToyPianoMultiSample()
		{
			//Initialize our array
			this.theSamples = new Array();
			this.theNotes = new Array(127);
			
			//Populate our sample with data
			this.theSamples[0] = new Sample(57, "toy_piano/mp3 sorted/toy_piano_notes_057_A3.mp3");
			this.theNotes[57] = new Note(57, this.theSamples[0], 0);
			this.theNotes[58] = new Note(58, this.theSamples[0], 1);
			this.theNotes[59] = new Note(59, this.theSamples[0], 2);
			this.theNotes[60] = new Note(60, this.theSamples[0], 3);
			this.theNotes[61] = new Note(61, this.theSamples[0], 4);
			this.theNotes[62] = new Note(62, this.theSamples[0], 5);
			this.theNotes[63] = new Note(63, this.theSamples[0], 6);
			this.theNotes[64] = new Note(64, this.theSamples[0], 7);
			this.theNotes[65] = new Note(65, this.theSamples[0], 8);
			this.theNotes[66] = new Note(66, this.theSamples[0], 9);
			this.theNotes[67] = new Note(67, this.theSamples[0], 10);
			this.theNotes[68] = new Note(68, this.theSamples[0], 11);
			
			
			this.theSamples[1] = new Sample(64, "toy_piano/mp3 sorted/toy_piano_notes_064_E4.mp3");
			this.theNotes[69] = new Note(64, this.theSamples[1], 0);
			this.theNotes[70] = new Note(65, this.theSamples[1], 1);
			this.theNotes[71] = new Note(66, this.theSamples[1], 2);
			
			this.theSamples[2] = new Sample(67, "toy_piano/mp3 sorted/toy_piano_notes_067_G4.mp3");
			this.theNotes[72] = new Note(67, this.theSamples[2], 0);
				
			this.theSamples[3] = new Sample(68, "toy_piano/mp3 sorted/toy_piano_notes_068_G#4.mp3");
			this.theNotes[73] = new Note(68, this.theSamples[3], 0);
			
			this.theSamples[4] = new Sample(69, "toy_piano/mp3 sorted/toy_piano_notes_069_A4.mp3");
			this.theNotes[74] = new Note(69, this.theSamples[4], 0);
			
			this.theSamples[5] = new Sample(70, "toy_piano/mp3 sorted/toy_piano_notes_070_A#4.mp3");
			this.theNotes[75] = new Note(70, this.theSamples[5], 0);
			
			this.theSamples[6] = new Sample(71, "toy_piano/mp3 sorted/toy_piano_notes_071_B4.mp3");
			this.theNotes[76] = new Note(71, this.theSamples[6], 0);
			
			this.theSamples[7] = new Sample(72, "toy_piano/mp3 sorted/toy_piano_notes_072_C5.mp3");
			this.theNotes[77] = new Note(72, this.theSamples[7], 0);
			
			this.theSamples[8] = new Sample(73, "toy_piano/mp3 sorted/toy_piano_notes_073_C#5.mp3");
			this.theNotes[78] = new Note(73, this.theSamples[8], 0);
			
			this.theSamples[9] = new Sample(74, "toy_piano/mp3 sorted/toy_piano_notes_074_D5.mp3");
			this.theNotes[79] = new Note(74, this.theSamples[9], 0);
			
			this.theSamples[10] = new Sample(75, "toy_piano/mp3 sorted/toy_piano_notes_075_D#5.mp3");
			this.theNotes[80] = new Note(75, this.theSamples[10], 0);
			
			this.theSamples[11] = new Sample(76, "toy_piano/mp3 sorted/toy_piano_notes_076_E5.mp3");
			this.theNotes[81] = new Note(76, this.theSamples[11], 0);
			
			this.theSamples[12] = new Sample(77, "toy_piano/mp3 sorted/toy_piano_notes_077_F5.mp3");
			this.theNotes[82] = new Note(77, this.theSamples[12], 0);
			
			this.theSamples[13] = new Sample(78, "toy_piano/mp3 sorted/toy_piano_notes_083_B5.mp3");
			this.theNotes[83] = new Note(78, this.theSamples[13], 0);
			
			this.theSamples[14] = new Sample(79, "toy_piano/mp3 sorted/toy_piano_notes_084_C5.mp3");
			this.theNotes[84] = new Note(79, this.theSamples[14], 0);
			
			this.theSamples[15] = new Sample(80, "toy_piano/mp3 sorted/toy_piano_notes_085_C#5.mp3");
			this.theNotes[85] = new Note(80, this.theSamples[15], 0);
			
			
			this.theSamples[16] = new Sample(86, "toy_piano/mp3 sorted/toy_piano_notes_086_D5.mp3");
			this.theNotes[86] = new Note(86, this.theSamples[16], 0);
			
			this.theSamples[17] = new Sample(87, "toy_piano/mp3 sorted/toy_piano_notes_087_D#5.mp3");
				this.theNotes[87] = new Note(87, this.theSamples[17], 0);
			
			this.theSamples[18] = new Sample(88, "toy_piano/mp3 sorted/toy_piano_notes_088_E4.mp3");
				this.theNotes[88] = new Note(88, this.theSamples[18], 0);
			
			this.theSamples[19] = new Sample(89, "toy_piano/mp3 sorted/toy_piano_notes_089_F5.mp3");
				this.theNotes[89] = new Note(89, this.theSamples[19], 0);
			
			this.theSamples[20] = new Sample(90, "toy_piano/mp3 sorted/toy_piano_notes_090_F#4.mp3");
				this.theNotes[90] = new Note(90, this.theSamples[20], 0);
			
			this.theSamples[21] = new Sample(91, "toy_piano/mp3 sorted/toy_piano_notes_091_G5.mp3");
				this.theNotes[91] = new Note(91, this.theSamples[21], 0);
			
			this.theSamples[22] = new Sample(92, "toy_piano/mp3 sorted/toy_piano_notes_092_G#5.mp3");
				this.theNotes[92] = new Note(92, this.theSamples[22], 0);
			
			this.theSamples[23] = new Sample(93, "toy_piano/mp3 sorted/toy_piano_notes_093_A5.mp3");
				this.theNotes[93] = new Note(93, this.theSamples[23], 0);
			
			this.theSamples[24] = new Sample(94, "toy_piano/mp3 sorted/toy_piano_notes_094_A#5.mp3");
				this.theNotes[94] = new Note(94, this.theSamples[24], 0);
			
			this.theSamples[25] = new Sample(95, "toy_piano/mp3 sorted/toy_piano_notes_095_B5.mp3");
				this.theNotes[95] = new Note(95, this.theSamples[25], 0);
			
			this.theSamples[26] = new Sample(96, "toy_piano/mp3 sorted/toy_piano_notes_096_C5.mp3");
				this.theNotes[97] = new Note(97, this.theSamples[26], 0);
				this.theNotes[98] = new Note(98, this.theSamples[26], 1);
				this.theNotes[99] = new Note(99, this.theSamples[26], 2);
				this.theNotes[100] = new Note(100, this.theSamples[26], 3);
				this.theNotes[101] = new Note(101, this.theSamples[26], 4);
				this.theNotes[102] = new Note(102, this.theSamples[26], 5);
				this.theNotes[103] = new Note(103, this.theSamples[26], 6);
				this.theNotes[104] = new Note(104, this.theSamples[26], 7);
				this.theNotes[105] = new Note(105, this.theSamples[26], 8);
				this.theNotes[106] = new Note(106, this.theSamples[26], 9);
				this.theNotes[107] = new Note(107, this.theSamples[26], 10);
				this.theNotes[108] = new Note(108, this.theSamples[26], 11);
		}
	}
}