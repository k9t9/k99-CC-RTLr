## Synopsis

A small scripted utility to help with RTL text in Illustrator.

## Motivation

Why ??

Because after so many years , illustrator still does not support RTL languages . Seriously adobe ..
All it takes to flip a text is ONE LINE of code ...

So now, everyone who uses adobe products need to flip their text, usually using some external utility , or an online service .
I got tired of it , so I scripted this small utility .

Seriously, adobe ...

## Installation

You can launch directly from File -> Scripts -> Other scripts ... ( or CTRL+F12 )

If you want the script to permanently be available in illustrator , copy the folder to :

DRIVE:\%Program Files%\Adobe\Adobe Illustrator%VER%\Presets\en_US\Scripts

*Note*: If you will place a script in the Adobe Illustrator Scripts folder while Illustrator is running, you must restart Illustrator for the script to appear in the Scripts submenu.

See also here :

https://helpx.adobe.com/illustrator/using/automation-scripts.html




## Interface 

Pretty straight forward , here it is :


![Interface for RTLr](https://cloud.githubusercontent.com/assets/23067654/22555296/3097eac8-e99e-11e6-90b4-7c7a4444eb5f.jpg)
 
## Usage 

You can use this script in 3 ways :

1. Direct typing of a text .
2. Paste a text from clipboard 
3. Select a textframe ( before launching the script ) and get that selection.

Either way - after you have the text in the box, you have to click *"Go"* in order for the flipping to occur .

Now , again, you have a choice , either :

1. Copy the flipped text back to artboard , or ..
2. If you have used method `[3]` from above ( meaning you have selected a textframe ) - you can click "put back to selection".
3. [ Todo / unsupported ] - click "Create text" to create a frame with the flipped text .

## ToDo

 * Flip multiple textframes at once .
 * Create a textframe ( From direct typing ) 
 * Clean some small bugs .
 * Better Support Arabic ( with Auto-file creation from template )
 
## License

   Copyright 2015-2017 k9t9 (hk)

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.