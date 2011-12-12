package
{
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.media.Sound;
	import flash.net.URLRequest;
	import fl.controls.Button;
	import fl.controls.Slider;
	import fl.events.SliderEvent;
	import com.adobe.flash.samples.SoundPitchShift;
	
	/**
	* Defines the document class used by the DynamicSoundSample1 application. (In Flash CS4, you can set the
	* document class for a SWF application in the Publish Settings dialog box. (Select the File > Publish Settings command.
	* Then, in the Publish Settings dialog box, select the Flash tab and click the Settings button next to the Script drop-down list.)
	*/
	public class DynamicSoundSample1 extends MovieClip
	{
		public var sampleMP3:Sound;
		public var soundPitchShift:SoundPitchShift;
		public var playButton:Button;
		public var pitchShiftSlider:Slider;
		
	
		/**
		* Called when the SWF file initializes. This constructor function loads an MP3 sound file. It also defines 
		* event handlers for the playButton Button component.
		*/
		public function DynamicSoundSample1()
		{
			sampleMP3 = new Sound();
			var urlReq:URLRequest = new URLRequest("test.mp3");
			sampleMP3.load(urlReq);
			sampleMP3.addEventListener(Event.COMPLETE, loaded);
			playButton.addEventListener(MouseEvent.CLICK, playSound);
		}
		/**
		* The Play button is enabled when the MP3 data is loaded.
		*/
		private function loaded(event:Event):void
		{
			playButton.enabled = true;
		}
		/**
		* Event handler for the playSound button (in "Play" mode). It adjusts the button label and event
		* handlers. It also instantiates a SoundPitchShift object, and calls its play() method to play the
		* sound (at a modified pitch factor). And it adds an event listener for the pitchShiftSlider 
		* Slider component. 
		*/
		public function playSound(event:Event):void
		{
			playButton.label = "Stop";
			playButton.removeEventListener(MouseEvent.CLICK, playSound);
			playButton.addEventListener(MouseEvent.CLICK, stopSound);
			
			soundPitchShift = new SoundPitchShift();
			soundPitchShift.play(sampleMP3, pitchShiftSlider.value / 100);
			pitchShiftSlider.addEventListener(SliderEvent.CHANGE, adjustPitch);
			soundPitchShift.addEventListener(Event.SOUND_COMPLETE, soundCompleteHandler);
		}
		/**
		* Event handler for the playSound button (in "Stop" mode). It adjusts the button label and event
		* handlers. It also instantiates a SoundPitchShift object, and calls its play() method to play the
		* sound (at a modified pitch factor).
		*/
		public function stopSound(event:Event):void
		{
			soundPitchShift.stop();
		}
		/**
		* Event handler for the soundComplete event (dispatched by the soundPitchShift object when the sound stops). 
		* The method adjusts the label and event handlers of the playButton Button component.
		*/
		public function soundCompleteHandler(event:Event):void
		{
			playButton.label = "Play MP3";
			playButton.removeEventListener(MouseEvent.CLICK, stopSound);
			playButton.addEventListener(MouseEvent.CLICK, playSound);
		}
		/**
		* Event handler for the slider event, dispatched by the pitchShiftSlider slider component when the
		* user changes the slider value. This method relays the slider value (divided by 100, since it is a 
		* percentage) on to the pitchShiftSlider property of the soundPitchShift object.
		*/
		private function adjustPitch(event:SliderEvent):void
		{
			soundPitchShift.pitchShiftFactor = pitchShiftSlider.value / 100;
		}
	}
}