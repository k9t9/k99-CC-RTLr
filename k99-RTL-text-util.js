// alert('script is working ');
// var x = browserAvailable;
// alert(x);
// var myDoc = app.activeDocument;
// alert("There are " + myDoc.textFrames.length + " text frames.");
// alert("There are " + myDoc.stories.length + " stories.");
//$.colorPicker();

/*
* Interface
*/

var box = new Window('dialog', "K99 RTL Text utilities");  
  
box.panel = box.add('panel', undefined, "Flipping Text"); 
box.panel_instruct = box.panel.add('statictext', undefined, "1. Paste your text here, or ..\n2. type directly or..  \n3. use your artboard selection",{multiline:true});  
// box.panel_text1 = box.panel.add('edittext', [100,100,300,300], "Please paste your text here");  
box.panel_text1 = box.panel.add('edittext {preferredSize:[300,200],properties:{multiline:true}}',undefined,'here');  
box.panel.selectionBtn = box.panel.add('button',undefined, "Get my selection", {name:'Selection'});  
box.panel.putBackBtn = box.panel.add('button',undefined, "Put back to selection", {name:'Put Back'});  
box.panel.alignChildren='left';  
box.panel.putBackBtn.alignment = box.panel.selectionBtn.alignment = 'center';

box.panel2 = box.add('panel', undefined, "Settings (not displayed)");  
box.panel2.group = box.panel2.add('group', undefined );  
box.panel2.group.orientation='column';  
box.panel2.group.alignChildren='left'; 

box.panel2.group.text1 = box.panel2.group.add('statictext', undefined, "Press Button to flip");  
// box.panel2.group.closeBtn = box.panel2.group.add('button',undefined, "Close", {name:'close'});  
// box.panel2.group.ignoreNumbers =  box.panel2.group.add('checkbox', undefined, 'Ignore Numbers?',{name:'cb1'}).helpTip=" Note: This will ignore numbers.";
box.panel2.group.ignoreNumbersFlip =  box.panel2.group.add('checkbox', undefined, 'Ignore Numbers?',{name:'cb1'});
box.panel2.group.ignoreNumbersFlip.helpTip=" Note: This will ignore numbers.";
box.panel2.group.flipWords =  box.panel2.group.add('checkbox', undefined, 'Flip Word order ( not letters )').helpTip=" Note: This will ignore numbers.";
box.panel2.group.doFlip = box.panel2.group.add('button',undefined, "Go", {name:'go'});  
box.panel2.group.doFlip.alignment='center'; 

/*
* Actions
*/

// box.panel2.group.closeBtn.onClick = function(){  
  // box.close();  
// }

box.panel2.group.doFlip.onClick = function(){ 
	var ignoreNor = box.panel2.group.ignoreNumbersFlip.value;
	alert('clicked ');
	var toFlip = box.panel_text1.text;
	if(ignoreNor == true ) { 
		// alert(ignoreNor);
		var flipped =  k99FlipTextIgnoreNo(toFlip);
	} else {
		var flipped =  k99FlipText(toFlip);
	}
	box.panel_text1.text = flipped;
	alert('Flipped action finished !\n You can now copy and paste the code back to your Document');
}
  
box.panel.selectionBtn.onClick = function(){  
	alert('selectionBtn');
	var myselected = k99SelectText();
	box.panel_text1.text = myselected;
}

box.panel.putBackBtn.onClick = function(){  
alert('start');

   // if textframes exist in the document
 
	var docm = app.activeDocument.selection[0];
	// var text1 = doc.textFrames.pointText( [20,height-50] );
	var flipped = box.panel_text1.text;
	if (flipped === "" ) return alert("The text box is empty");
	// docm.contents = "Handgloves";
	docm.contents = flipped;
	alert('text was put in the box, now close script to refresh');
	// Need redraw or close the script 
	redraw();
	// box.close();  

}


/*
* Functions
*/
function k99FlipText(e){
	// also see here http://stackoverflow.com/questions/26126713/how-to-reverse-words-in-a-string-and-letters-in-those-words-unless-the-word-is-a
  
	return e.split("").reverse().join("");
}  
// ignoring numbers
function k99FlipTextIgnoreNo(e){
	// also see here http://stackoverflow.com/questions/26126713/how-to-reverse-words-in-a-string-and-letters-in-those-words-unless-the-word-is-a
    return e.split(/([^\d\.])/).reverse().join('');
}  

// box.panel3.group.closeBtn.onClick = function(){  
  // var doc = app.activeDocument;
  // var sel  = doc.selection;
  // alert(sel);

function k99SelectText(){

// if a document is open
if(documents.length >0)
{
   // if textframes exist in the document
   if(activeDocument.textFrames.length > 0)
   {
      // check to make sure something is selected.
      selectedItems = selection
      if (selectedItems.length > 0) 
      {
         // If the user has selected characters inside a text frame then 
         // typename is TextRange. Display it contents and return.
         if (selectedItems.typename == "TextRange") 
         {
		 
            alert ("The following text is selected: >" + selectedItems.contents + "<");
			 var myselection = selectedItems.contents ;
				  // box.panel_text1.text = myselection;
				  return myselection;
         }

         else
         {   // If we get here, there are selected text frames. Display the contents of each. 
            var itemFound = false;
            for(var i=0; i<selectedItems.length; i++)
            {
               if(selectedItems[i].typename == "TextFrame")
               {
			   
			    itemFound = true;
				  var myselection = selectedItems[i].contents ;
				  // box.panel_text1.text = myselection;
				  return myselection;
                  // itemFound = true;
                  // alert ("The following text item is selected: >" + selectedItems[i].contents + "<")
               }
            }

            if(itemFound == false) return alert("No text items are selected."); 
         }
      }
      else
      {
         alert("Nothing is selected, select a text item(s) or a text range.");
      }

   }
   else
   {
      alert("Open a document and select 1 or more text items or a text range.");
   }
}
else
{
   alert("Open a document and select 1 or more text items or a text range.");
}
}


box.show() ;

// $.writeln(app.activeDocument); 


// function OKButtonClicked(){
// alert("click");$.colorPicker();
// $.writeln(app.activeDocument); 
// var doc = app.activeDocument;
// var textRefs = doc.textFrames;
// var sel  = doc.selection;
// $.writeln(app.activeDocument); 
// alert(sel);
// alert('script is working ');
// }
