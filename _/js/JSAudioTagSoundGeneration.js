function JSAudioTagSoundGeneration(numVoices) {
	this.numVoices = numVoices;
	this.voices = new Array(this.numVoices);
	this.lastVoice = -1;
	this.format =	Modernizr.audio.ogg ? 'ogg' :
	            	Modernizr.audio.mp3 ? 'mp3' :
					Modernizr.audio.wav ? 'wav' :
	                					'm4a';
}

JSAudioTagSoundGeneration.prototype.init = function init()
{
	for(var voiceIndex = 0; voiceIndex < this.numVoices; voiceIndex++)
	{
		this.voices[voiceIndex] = new Audio();
		//this.voices[voiceIndex].autoplay = true;
	}
}

JSAudioTagSoundGeneration.prototype.playNote = function playNote(noteNumber)
{
	if( (this.lastVoice + 1) >= this.numVoices) 
		this.lastVoice = 0;
	else 
		this.lastVoice++;
		
	var noteURL = this.getNoteURL(noteNumber);	
	//d("playNote: " + noteNumber + " on voice " + this.lastVoice + ((noteURL != null) ? " (URL: " + this.getNoteURL(noteNumber) + ")" : ""));
	
	if(noteURL != null)
	{
		this.voices[this.lastVoice].src = "_/snd/" + noteURL;
		this.voices[this.lastVoice].play();
	}
}

JSAudioTagSoundGeneration.prototype.getNoteURL = function getNoteURL(noteNumber)
{
	if(noteNumber >= 48 && noteNumber <= 112)
	{
		return "autoharp/" + this.format + "/" + zeroPad(noteNumber, 3) + "." + this.format; 
	}
	return null;
}

