package com.adobe.flash.samples
{
	import flash.media.*;
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.events.SampleDataEvent;
	import flash.utils.ByteArray;
	
	/**
	* Used in the Adobe Dynamic Sound quick start example applications.
	*
	* The class includes a play() function, which plays a sound and adjusts
	* its pitch (frequency) by a factor of 1.0 to 2.0.
	*/
	public class SoundPitchShift extends EventDispatcher
	{
		private var srcSound:Sound;				// The source sound.
		private var soundChannel:SoundChannel;	// Used to stop the sound.
		private var bytes:ByteArray;			// Used to store the audio sample bytes used by the output Sound object.
		public var pitchShiftFactor:Number;		// The factor (from 1.0 to 2.0) to shift the sound pitch.
		public var position:Number				// The position in the byte array from which to extract
		/**
		* The constructor function. 
		*/
		public function SoundPitchShift()
		{
		}
		/**
		* Plays audio based on a source Sound object (srcSound) with the pitch adjusted by a specified 
		* factor (pitchShiftFactor). The sampleData event handler for the output Sound object (morphedSound) 
		* generates audio sample data used by the Sound object. By setting the position to 0, the 
		* code will extract audio data from the beginning of the sound on each call to the play() method.
		*/
		public function play(srcSound:Sound, pitchShiftFactor:Number):void
		{
			this.srcSound = srcSound;
			this.pitchShiftFactor = pitchShiftFactor;
			position = 0;
			
			var morphedSound:Sound = new Sound();
			morphedSound.addEventListener(SampleDataEvent.SAMPLE_DATA, sampleDataHandler);
			soundChannel = morphedSound.play();
			soundChannel.addEventListener(Event.SOUND_COMPLETE, soundCompleteHandler);
		}
		/**
		* Stops the sound, and notifies the host application that the sound is done playing.
		*/
		public function stop():void
		{
			if((soundChannel != null) && (typeof(soundChannel) != 'undefined'))
				soundChannel.stop();
			dispatchEvent(new Event(Event.SOUND_COMPLETE));
		}
		/**
		* Notifies the host application that the sound is done playing.
		*/
		private function soundCompleteHandler(event:Event):void
		{
			dispatchEvent(event);
		}
		/**
		* Provides sample data to the output Sound object. The Sound object dispatches a 
		* sampleData event when it needs sample data. This event handler function provides
		* that data. The method calls the shiftBytes() method to shift the pitch of the 
		* audio data.
		*/
		private function sampleDataHandler(event:SampleDataEvent):void
		{
			var bytes:ByteArray = new ByteArray();
			position += srcSound.extract(bytes, 4096, position);
			event.data.writeBytes(shiftBytesTwo(bytes));
		}
		/**
		* This method takes a byte array (the bytes parameter) containing sound data. 
		* It returns a modified byte array, with sound samples (each representing two 
		* floating point values) removed to adjust to the pitch shift factor (the value of 
		* the pitchShiftFactor property).
		*
		* The method uses two numbers, skipCount and skipRate, to determine how frequently 
		* to remove sound samples from the byte array. The skipRate number is based on the pitch
		* shift factor (the pitchShiftFactor property). If the factor is 2.0, skipRate is set to
		* 2.0, and every second sound sample is removed. If the factor is 1.5 (3/2), skipRate is
		* set to 3.0, and every third sound sample is removed.  If the factor is 1.333 (4/3), 
		* skipRate is set to 4.0, and every fourth sound sample is removed. Removing samples
		* causes the pitch (frequency) of the sound to shift higher.
		*/
		private function shiftBytes(bytes:ByteArray):ByteArray
		{
			var fudgeFactor:Number = 0.00000;
			var skipCount:Number = 0;
			var skipRate:Number = 1 + (1 / (pitchShiftFactor - 1));
			var returnBytes:ByteArray = new ByteArray();
			bytes.position = 0;
			while(bytes.bytesAvailable > 0)
			{
				skipCount+=1;
				
				var howFarOffAreWe = Math.abs(skipCount - skipRate);
				if( howFarOffAreWe < fudgeFactor)
					skipCount = skipRate;
					
				if (skipCount <= skipRate)
				{
					/*returnBytes.writeFloat(bytes.readFloat());
					returnBytes.writeFloat(bytes.readFloat());*/
					var leftFloat:Number = bytes.readFloat();
					var rightFloat:Number = bytes.readFloat();
					returnBytes.writeFloat(leftFloat);
					returnBytes.writeFloat(rightFloat);
				}
				else
				{
					bytes.position += 8;
					skipCount = skipCount - skipRate;
				}
			}
			return returnBytes;
		}
		
		private function shiftBytesTwo(bytes:ByteArray):ByteArray
		{
			//average towards perfection
			var targetSkipRate:Number = 1 / (1 + (1 / (pitchShiftFactor - 1)));

			var samplesSkipped:Number = 0;
			var samplesRead:Number = 0;
			var actualSkipRate:Number = 0;
			
			var returnBytes:ByteArray = new ByteArray();
			bytes.position = 0;
			while(bytes.bytesAvailable > 0)
			{
				actualSkipRate = samplesSkipped / samplesRead;
				
				if (actualSkipRate > targetSkipRate)
				{
					/*returnBytes.writeFloat(bytes.readFloat());
					returnBytes.writeFloat(bytes.readFloat());*/
					var leftFloat:Number = bytes.readFloat();
					var rightFloat:Number = bytes.readFloat();
					returnBytes.writeFloat(leftFloat);
					returnBytes.writeFloat(rightFloat);
					
				}
				else
				{
					bytes.position += 8;
					samplesSkipped++;
				}
				samplesRead++;
			}
			return returnBytes;
		}
	}
	
	
}