//By David Hilowitz

/*** DEBUGGING FUNCTIONS ***/

/*** PROFILING ***/
function startProfiling()
{
	if(typeof(console.profile) != 'undefined')
		console.profile();
}

function stopProfiling()
{
	if(typeof(console.profileEnd) != 'undefined')
		console.profileEnd();
}


//Console Output
function d(outputMessage)
{
	//return;
	
	if(typeof(window.console) != 'undefined')
		if(typeof(window.console.log) != 'undefined')
			window.console.log(outputMessage);
}

function randomIntInRange(lowerRange, higherRange)
{
	var returnVal = Math.min(lowerRange, higherRange) + Math.round(Math.random() * (Math.abs(higherRange - lowerRange)));
	d(returnVal);
	return returnVal;
}

// Database
function ConvertSQLServerDateTimeToJavaScriptDateObject(sqlServerDateTime)
{
	var theDate = new Date();
	
	var stringArrayYearMonthPlusSomeGarbage = sqlServerDateTime.split('-');
	theDate.setFullYear(stringArrayYearMonthPlusSomeGarbage[0]);
	theDate.setMonth(stringArrayYearMonthPlusSomeGarbage[1]);
	
	var stringGarbage = stringArrayYearMonthPlusSomeGarbage[2];
	stringArrayDayPlusGarbage = stringGarbage.split(' ');
	theDate.setDate(stringArrayDayPlusGarbage[0]);
		
	stringGarbage = stringArrayDayPlusGarbage[1];
	var stringArrayHourMinutePlusGarbage = stringGarbage.split(':');
	theDate.setHours(stringArrayHourMinutePlusGarbage[0]);
	theDate.setMinutes(stringArrayHourMinutePlusGarbage[1]);
	
	stringGarbage = stringArrayHourMinutePlusGarbage[2]
	var stringArraySecondPlusGarbage = stringGarbage.split('.');
	theDate.setSeconds(stringArraySecondPlusGarbage[0]);
	theDate.setMilliseconds(stringArraySecondPlusGarbage[1]);
	
	return theDate;
}

//Audio -- Notes and MIDI

function ConvertMIDINoteNumberToFrequency (midiNoteNumber)
{
	return 440.0 * Math.pow(2,((midiNoteNumber-69.0)/12));
}



function ConvertNoteNameToMIDINoteNumber (noteName)
{
	var noteStrings = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
	
	var firstLetter = noteName.substr(0,1);
	var firstAndSecondLetters = noteName.substr(0,2);
	var noteNumberComponent;
	
	var noteIndex;
	for(noteIndex = 0; noteIndex < 12 ; noteIndex++)
	{
		if(firstAndSecondLetters == noteStrings[noteIndex])
		{
			noteNumberComponent = parseInt(noteName.substr(2));
			break;
		}
	}
	
	if(noteIndex == 12)
	{
		for(noteIndex = 0; noteIndex < 12 ; noteIndex++)
		{
			if(firstLetter == noteStrings[noteIndex])
			{
				noteNumberComponent = parseInt(noteName.substr(1));
				break;
			}
		}
	}
	
	

	if(noteIndex == 12) return 60;
	
	
	return (noteNumberComponent+1)*12 + noteIndex;
}

function ConvertMIDINoteNumberToNoteName (noteNumber)
{
	if( !(noteNumber > 0 && noteNumber < 255))
		return;
		
	var noteStrings = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
	
	var octave = (noteNumber / 12) - 1;
	var noteIndex = (noteNumber % 12);
	var note = noteStrings[noteIndex] + Math.floor(octave);
	return note;
}

// GRAPHICS - HIT DETECTIOn
function pointInRect(pointX, pointY, rectX1, rectY1, rectX2, rectY2)
{
	if(	(pointX >= rectX1) && 
		(pointX <= rectX2) &&
		(pointY >= rectY1) && 
		(pointY <= rectY2))
	{
		return true;
	}
}
