﻿package {
	import flash.media.Sound;
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.net.URLRequest;

	public class Sample extends EventDispatcher
	{
		public var fileName:String
		public var rootMIDINote:uint;
		public var sound:Sound;
		
		public function Sample(rootMIDINote:uint, fileName:String)
		{
			this.rootMIDINote = rootMIDINote;
			this.fileName = fileName;
			this.sound = new Sound();
		}
		
		public function loadSample(samplePath:String)
		{
			if(this.fileName == null) throw new Error("No fileName for sample specified.");
			
			sound.load(new URLRequest(samplePath + escape(this.fileName)));
			sound.addEventListener(Event.COMPLETE, function() {
				dispatchEvent(new Event(Event.COMPLETE,true,false));
														   });
			
			
		}
	}
}