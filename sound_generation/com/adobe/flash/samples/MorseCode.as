package com.adobe.flash.samples
{
	import flash.media.Sound;
	import flash.media.SoundChannel;
	import flash.net.URLRequest;
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.events.SampleDataEvent;
	import flash.utils.ByteArray;
	
	/**
	* Used in the Adobe Dynamic Sound quick start example applications.
	*
	* The class includes a morsePlayString() function, which generates International 
	* Morse Code audio based on a string.
	*/
	public class MorseCode extends EventDispatcher
	{
		/**
		* An array that maps Morse codes to characters. 
		*/
		public static var codes:Array = [];
		codes["a"] = ".-"; codes["b"] = "-..."; codes["c"] = "-.-."; codes["d"] = "-..";
		codes["e"] = "."; codes["f"] = "..-."; codes["g"] = "--."; codes["h"] = "....";
		codes["i"] = ".."; codes["j"] = ".---"; codes["k"] = "-.-"; codes["l"] = ".-..";
		codes["m"] = "--"; codes["n"] = "-."; codes["o"] = "---"; codes["p"] = ".--.";
		codes["q"] = "--.-"; codes["r"] = ".-."; codes["s"] = "..."; codes["t"] = "-";
		codes["u"] = "..-"; codes["v"] = "...-"; codes["w"] = "..-"; codes["x"] = "-..-";
		codes["y"] = "-.--"; codes["z"] = "--.."; codes["0"] = "-----"; codes["1"] = ".----";
		codes["2"] = "..---"; codes["3"] = "...--"; codes["4"] = "....-"; codes["5"] = ".....";
		codes["6"] = "-...."; codes["7"] = "--..."; codes["8"] = "---.."; codes["9"] = "----.";
		codes["."] = ".-.-.-"; codes[","] = "--..--"; codes["?"] = "..--.."; codes["-"] = "-....-";
		codes["'"] = ".---."; codes["!"] = "-.-.--"; codes[" "] = "      ";
		
		private var codeSound:Sound;			// Used to play the Morse code audio.
		private var soundChannel:SoundChannel;  // Used to stop the sound.
		private var soundBytes:ByteArray;		// Used to store the audio sample bytes used by the codeSound object.
		
		public function MorseCode():void
		{
		}
		/**
		* Generates Morse code audio based on a string. The sampleData event handler 
		* for the codeSound object generates audio sample data used by the codeSound object.
		*/
		public function playString(string:String):void
		{
			var codeString:String = stringToCode(string);
			soundBytes = codeStringToBytes(codeString);
			soundBytes.position = 0;
			codeSound = new Sound();
			codeSound.addEventListener(SampleDataEvent.SAMPLE_DATA, addSoundBytesToSound);
			soundChannel = codeSound.play();
			soundChannel.addEventListener(Event.SOUND_COMPLETE, soundCompleteHandler);
		}
		/**
		* Notifies the host application that the sound is done playing.
		*/
		public function soundCompleteHandler(event:Event):void
		{
			dispatchEvent(event);
		}
		/**
		* Stops the sound, and notifies the host application that the sound is done playing.
		*/
		public function stop():void
		{
			soundChannel.stop();
			dispatchEvent(new Event(Event.SOUND_COMPLETE));
		}
		/**
		* Converts a String, such as "abc 123", into a Morse code string, such as
		* ".- -... -.-.   .---- ..--- ...--". The codes Array maps characters to
		* their Morse code equivalents.
		*/
		public static function stringToCode(string:String):String
		{
			var returnString:String = "";
			for (var i:int = 0; i < string.length; i++)
			{
				var char:String = string.charAt(i).toLowerCase();
				if (codes[char] != undefined)
				{
					returnString += codes[char] + " ";
				}
				else
				{
					returnString += " ";
				}
			}
			return returnString;
		}
		/**
		* Converts a string of Morse code characters, such as "".- -... -.-.", into a byte array
		* of audio data that can be played by a Sound object.
		*/
		private function codeStringToBytes(string:String):ByteArray
		{
			var returnBytes:ByteArray = new ByteArray();
			for (var i:int = 0; i < string.length; i++)
			{
				var char:String = string.charAt(i);
				switch (char)
				{
					case "." :
						returnBytes.writeBytes(sineWaveGenerator(1)) 
						returnBytes.writeBytes(silenceGenerator(1));
						break;
					case "-" :
						returnBytes.writeBytes(sineWaveGenerator(3));
						returnBytes.writeBytes(silenceGenerator(1));
						break;
					default :
						returnBytes.writeBytes(silenceGenerator(2));
				}
			}
			return returnBytes;
		}
		/**
		* Event handler for the sampleData event, which the codeSound Sound object dispatches
		* to request audio data. The method adds 8192 audio samples to the audio buffer of the
		* Sound object. (Each sample is two four-byte floating point numbers).
		*/
		private function addSoundBytesToSound(event:SampleDataEvent):void
		{
			var bytes:ByteArray = new ByteArray();
			soundBytes.readBytes(bytes, 0, Math.min(soundBytes.bytesAvailable, 8 * 8192));
			event.data.writeBytes(bytes, 0, bytes.length); 
		}
		/**
		* Generates sine wave audio data of a specified length. A short Morse code character (".")
		* has lenth == 1, generating a sine wave of 2000 samples. A long Morse code character ("-")
		* has lenth == 3, generating a sine wave of 6000 samples. 
		*/
		private function sineWaveGenerator(length:Number):ByteArray {
			var returnBytes:ByteArray = new ByteArray();
			for ( var i:int = 0; i < length * 2400; i++ ) 
			{
				var value:Number = Math.sin( i / 6) * 0.5;
				returnBytes.writeFloat(value);
				returnBytes.writeFloat(value);
			}
			return returnBytes;
		}
		/**
		* Generates silent audio data of a specified length. 
		*/
		private function silenceGenerator(length:Number):ByteArray
		{
			var returnBytes:ByteArray = new ByteArray();
			for (var i:int=0; i < length * 2400; i++ ) 
			{
				returnBytes.writeFloat(0);
				returnBytes.writeFloat(0);
			}
			return returnBytes;
		}
	}
}