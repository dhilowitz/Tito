package
{
	import flash.events.Event;
	import flash.events.EventDispatcher;
	
	public class MultiSample extends EventDispatcher
	{
		public var theSamples:Array;
		public var theNotes: Array;
		public var isLoaded:Boolean;
		
		public function MultiSample()
		{
			//Initialize our array
			this.theSamples = new Array();
			this.theNotes = new Array(127);
			this.isLoaded = false;
		}
		
		public function loadAllSamples(samplePath:String)
		{
			this.isLoaded = false;
			theSamples.forEach(function(currentSample) {
													  currentSample.addEventListener(Event.COMPLETE, function() {
														checkAllSamples();
														   });
													  currentSample.loadSample(samplePath);
													  });
		}
		
		//Checks that all samples in the MultiSample have been loaded and fires an event if they have.
		private function checkAllSamples()
		{
			if(this.isLoaded == true) return;
			
			var allLoaded = true;
			trace("There are " + theSamples.length + " samples.");
			
			theSamples.forEach(function(currentSample) {
				  if(currentSample.sound.bytesLoaded != currentSample.sound.bytesTotal)
				  	allLoaded = false;
				});
			
			if(allLoaded)
			{
				this.isLoaded = true;
				dispatchEvent(new Event(Event.COMPLETE,true,false));
			}
		}
		
		public function isNoteDefined(noteNumber:uint):Boolean
		{
			if(typeof(this.theNotes) == 'undefined') 
				return false;
			if(typeof(this.theNotes[noteNumber]) == 'undefined') 
				return false;
			if(this.theNotes[noteNumber] == null) 
				return false;
				
			return true;
		}
	}
}