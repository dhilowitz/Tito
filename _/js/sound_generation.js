var NUM_SAMPLES = 32;
var MIDI_BASE_NOTE = 48;
var MIDI_HIGHEST_NOTE = 96;

function SoundGeneration() {
	this.numSamples = NUM_SAMPLES;

	this.samples = new Object();
	//this.lastVoice = -1;
}

SoundGeneration.prototype.init = function init()
{
	//this.sgDiv = document.createElement("div");
	//this.sgDiv.id = "SoundGenerationDiv";
	//$('#sound_generation').prepend (this.sgDiv);
	
	for(var currentNoteNumber = MIDI_BASE_NOTE; currentNoteNumber <= MIDI_HIGHEST_NOTE; currentNoteNumber++)
	{
		d('current note: ' + currentNoteNumber); 
		var noteURL = this.getNoteURL(currentNoteNumber);
		if(noteURL == null) continue;
		
		//this.samples[currentNoteNumber] = document.createElement("audio");
		this.samples[currentNoteNumber] = new Audio();
		//this.samples[currentNoteNumber].id = "SoundGenerationVoice" + currentNoteNumber;
		this.samples[currentNoteNumber].preload = "auto";
		this.samples[currentNoteNumber].src = "_/snd/" + noteURL;
		this.samples[currentNoteNumber].load(); 
		this.samples[currentNoteNumber].play(); 
		
		$('#SoundGenerationDiv').prepend(this.samples[currentNoteNumber]);
	}
}

SoundGeneration.prototype.playNote = function playNote(noteNumber)
{
	d('playNote');
	if( (this.lastVoice + 1) >= this.numVoices) 
		this.lastVoice = 0;
	else 
		this.lastVoice++;
			
	//d("playNote: " + noteNumber + " on voice " + this.lastVoice + ((noteURL != null) ? " (URL: " + this.getNoteURL(noteNumber) + ")" : ""));
	
	if(typeof(this.samples[noteNumber]) != 'undefined')
	{	
		d("playNote: " + noteNumber + " / currentTime: " + this.samples[noteNumber].currentTime);


		if(this.samples[noteNumber].ended == true) {
			this.samples[noteNumber].currentTime = 0;
			this.samples[noteNumber].play();
		}
		else
			if (this.samples[noteNumber].currentTime > 0)
				{this.samples[noteNumber].currentTime = 0;
					if(this.samples[noteNumber].ended == true)
						this.samples[noteNumber].play();
				}
			else this.samples[noteNumber].play();
	
	}
}

//HACK ALERT! At least we need this to be in an array!
SoundGeneration.prototype.getNoteURL = function getNoteURL(noteNumber)
{
	if(noteNumber == 48) return "autoharp/048.mp3"; 
	if(noteNumber == 50) return "autoharp/050.mp3"; 
	if(noteNumber == 55) return "autoharp/055.mp3"; 
	if(noteNumber == 57) return "autoharp/057.mp3"; 
	if(noteNumber == 59) return "autoharp/059.mp3"; 
	if(noteNumber == 60) return "autoharp/060.mp3"; 
	if(noteNumber == 61) return "autoharp/061.mp3"; 
	if(noteNumber == 62) return "autoharp/062.mp3"; 
	if(noteNumber == 64) return "autoharp/064.mp3"; 
	if(noteNumber == 65) return "autoharp/065.mp3"; 
	if(noteNumber == 66) return "autoharp/066.mp3"; 
	if(noteNumber == 67) return "autoharp/067.mp3"; 
	if(noteNumber == 69) return "autoharp/069.mp3"; 
	if(noteNumber == 71) return "autoharp/071.mp3"; 
	if(noteNumber == 72) return "autoharp/072.mp3"; 
	if(noteNumber == 73) return "autoharp/073.mp3"; 
	if(noteNumber == 74) return "autoharp/074.mp3"; 
	if(noteNumber == 76) return "autoharp/076.mp3"; 
	if(noteNumber == 77) return "autoharp/077.mp3"; 
	if(noteNumber == 78) return "autoharp/078.mp3"; 
	if(noteNumber == 79) return "autoharp/079.mp3"; 
	if(noteNumber == 81) return "autoharp/081.mp3"; 
	if(noteNumber == 83) return "autoharp/083.mp3"; 
	if(noteNumber == 84) return "autoharp/084.mp3"; 
	if(noteNumber == 85) return "autoharp/085.mp3"; 
	if(noteNumber == 86) return "autoharp/086.mp3"; 
	if(noteNumber == 88) return "autoharp/088.mp3"; 
	if(noteNumber == 89) return "autoharp/089.mp3"; 
	if(noteNumber == 90) return "autoharp/090.mp3"; 
	if(noteNumber == 91) return "autoharp/091.mp3"; 
	if(noteNumber == 93) return "autoharp/093.mp3"; 
	if(noteNumber == 95) return "autoharp/095.mp3"; 
	return null;
}
