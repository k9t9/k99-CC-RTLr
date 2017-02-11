/**
* Author : k99 ( k9t9 ) HK
* Author URI: http://www.krembo99.com
* 
* Description: Geolocation support for posts.
* @package    MyProject
* @license    http://opensource.org/licenses/gpl-license.php  GNU Public License
*/

/**
* Interface
*/

var box = new Window('dialog', "K99 RTL Text utilities");  
  
box.panel = box.add('panel', undefined, "Flipping Text"); 
box.panel_instruct = box.panel.add('statictext', undefined, "1. Paste your text here, or ..\n2. type directly or..  \n3. use your artboard selection",{multiline:true}); 
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
box.panel2.group.ignoreNumbersFlip =  box.panel2.group.add('checkbox', undefined, 'Ignore Numbers?',{name:'cb1'});
box.panel2.group.ignoreNumbersFlip.helpTip=" Note: This will ignore numbers.";
box.panel2.group.flipWords =  box.panel2.group.add('checkbox', undefined, 'Flip Word order ( not letters )').helpTip=" Note: This will ignore numbers.";

box.panel2.group.doFlip = box.panel2.group.add('button',undefined, "Go", {name:'go'});  
box.panel2.group.doFlip.alignment='center'; 

/**
* Experiments to show image in a panel
*/

// OK
// var thisFile = new File($.fileName) // alert($.fileName)// full path to script  
// var basePath = thisFile.path;  
// var imageFile = new File(basePath + '/k99-logo.png');
// box.panel2.group.k99logo = box.panel2.group.add('image',undefined,ScriptUI.newImage(imgStr));  


// see https://forums.adobe.com/thread/2055067
// function test() output.
// var imgStr = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00F\x00\x00\x00\x1E\b\x02\x00\x00\x00\x1E\u0091\u00FFI\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x03\u0099IDATx\u00DA\u00EC\u0098\u00CDK\x14a\x1C\u00C7\u009DZ\u00EC\u00D0\u00AE\x07\x13\u00D4\u00C4\u00C2\u0097\u00D8,\u00D8\x12\u0094\u00A0\b\u00A2 \n\x02o\u00DD:t\u00EC\u00D6\u00BDK\u00E7\u00AE]\u00FA\x03\u00BAu\bO\u0082\u0081\u0087\u00C4 \x14,\u0083PR\u00935S!]h\u00D7C\u00B3\u0097>\u00E3\u00D7~>\u00CC\u00AC\u00B3\u00B9\u00BB\u00A2\u00C8>\f\x0F\u00CF<\u00FB{\x7F\u009F\u00F5\u00DE\u008F\u00CE4\x1C\u00AFu\u00A2\u00E1\u00D8\u00AD\u00BAJu\u0095\u008E\u008AJk\u00EB?\u00E7\x17\u00E6\u008E\u009B\u0097\n[\u00F9Z1\u00C0@\u009Ff\u00A6\u00D8c`\x00\u00D8/\u00D9\x18\u0094DT\u0082o\x0B\u00B3\u0086\u00B6\u00BA\u00B6\u00D2\u00DE\u00D6\u00A1\u00D7\u00E4\u00E9T[\u00EB\u00D9\u00F9\u00C5\x1D\x07^\u00CD\f\u0084\u00A8\u00F7v\u00A7\u0093\u00C9\u0094\u00CE\u00F8Yv\u0081Z\x7Ff\u0090\u00BDP\u00C8\u009B\u00A5\f\u00D7\u00E5\b\u00FD\u00DE\u009E\u00B4K\u00D0n\u00C0\x15_ndq\u00A1\u00B8\x1Cm\u009D|\u00FC\u00E8\u0089\u00FB\x0E\u00C4\u00F9\u00CE\u00AE\\n\x03\u00E9y.\u00F4\\\x1C\u00FF0v\u00E7\u00D6=\u00CE~\u00D1\u00FF85q\u00F3\u00FAm\u00CE\u0090\u00CE./57\u00B7Hm]~\u009D\u00FD\u00C2.:\u00D9\x1FK\u00C8\u00CD\u00EB\u0099\u00E6\x16\u00DF\u00F7\u00A13=3\x19\u00C25\u008E\u00C5\u00A2\x0F\u00B0n \b\u00C0\u00A5\u00BE\u008C8\"=\x00P\x165n6s\x1B\u009C\u0085\u00D2\u00D8x\u00AA\u0092\u00F2\u00804:@q\u00D7c\u00C9\u0094L\x0E{\u00D9\u00C9u/+_\u00F8m\u0096f\u00C7.\u00E8\x13\u00C2-\u00B9 \"\u00CF\u0088\u00A3\"\u00D6\u00A8\u00C9\"\u00F1\x02'\u00AAL\x15\u00E4Km5aZ\u00B9T\u0097(@\u00A8\u00B0\u00A7\u0092M\n\u00B3\u00D5\u00F5\x15\u008BX\u00D3\u00B3D\x0E\x17\u00F2\u00FC\u00E4\u00E6\u0089\u00DC\u00AE`\x11\u0080\u0099f\x07>\x12x\u0089\u00EA\u00B3\u00DF\x12C^\"\u008B\u00D0\u0084\u00FCq\u0099q\u00E3\u00E6\u00CF^\u00C9\u008D\u00DA\x04B\bR\u00BE2M\\\u0087\x03\u00EF\x02\u00C7\x05\x1E\u00E9af0\u00A7\u00EFu6\u00DD\x14$\x04\x15?\u00C1\x18i\u00EC!\u008FM\u008Dh\u0087\u00B0\x00\u0093\x03\u00ED\f\x11yi\u00FA\u00F3\u00A4\u00F1mo\u00ED\u0088\u00B7\u00B2\x17\x1A[\u00AD\u00B6\u00B8\u009C\u00940%\u00CF\u00C4\u00BDdU\u0094\u0083\u008B\u00F4!\u00E3\u0089\u00A6\u00EE\x05iUd\u00D7?\u00DB\x15RXf\x1D+hv\x13\u00AA\u0081%Iy\x071\u0089\u008F\u008C\x0E\u00DF\u00BF;d\u00AF\x18;\x14\u0087\x07\u00BA\u00CA\u00AB$\x0B\u0099y*h\u0085%\u00BB\u00C7\u00A1\u00CDxA\x7F,\x04\u00F1\u00F0\u00F2\u00D5\u008B}\u00D1\x05\u00C5\u009E\u00FF\u00D7\u00E7\u00D9\u00F3\u00A7e\u00ED[\u0095\u0097\u00E4\x1Fl\x1C\u00EC=\u00E9P\u00F8\u00CAu\u00AA\x07\u00FC\x14\u00F5\u00A1\u00CA@\u0090c\u00FFT2\u0082\u0096\u008D\u00C18\u00B20\u00C7\u00AB\u00E5\u00AD\x11\u00D7Y\u009DW\u00DCU\u00E2\u00CA\u00C6K\u009C\u0097\u00A0H]\u0096\x1A\u00F0\u00A0\u00FD+}\u00DF\u00BC}\u00BD#\u00CD\u00E2\u00DC\u00C8\u00BBa\u00E3\x1D\n<)/`%\u0098\u00BC\u00A7\u00B1\x18\u00C9T\x15\u00A5CP\x1E\u00B6[\u0099)\u00CF\x19\\\u00F4\x07\u0080\u00B3\u00AC\u0080<\u00D1zPf \n-\u009B;\u0090\u00FE\u00DA\u00C0\r\u009B\u00984\u00FB\u00F0l\u00E6~]\u00EE\u00CB\u00F0\n3\x0E\u00AE\u0087\u00CFuv\u0081\u00E8y\u009E\\\u00C1\u00AF\x1Ay\u0098\u00AA\u00FC\u00E2\x1F\u00BA'\u00C4\u00E51$\u00E6\u00A6\u00FF\u00CA 7\u0092\u0098=\u00BB\u00FC}\u00E8\u00C1C(\u00F0\u00C0\x11\u00E5\u0099\u0092\x00\u0080l\u00ED\u00A7\u0087P\x0F\u0095\x04\b\x17\u00AD{\u00F4M\u0089\u00A8Q\u00CD&,\u00B3\u00B4.\u00B9\u0089\u00C6\u0092\r_\u0087\u00F3\t\u00E8&\u008C\u00A2\x0E\u00DFR\u00C7\u00D9\u00E9\u0092\u00A1\u009C\u008EJ\u00BF\u00AFZZ\u00B2YW\u00AB\x12\"\u0096\rhe3\u008B\u00E1\u0085\u00B3;\x1F(\u00CB\u00CBr\u00B1\t&\u00CA1\u00FEs.\x11o\f2\u0084\u00E9&\b\u008C\u00EE\u00B4\u008D\u00A1\u0096\u00E5\u00FC\u00BAW\u00CBr\u0085VQq?\x04\u0083I\u00C2!n\x15\u00C2\u00BD!\u00F0\u00A2\x1FN\u00F6\u00F5QU\u00AB=\u00AC\u00A5\u00E8\u00AD\x001qd\u00F5\x19\u009F\x18\u00ABl\u00F2\u00F0\u00EA\u00FF\u00B6\u00D6U\u00AA\u00ABT\u0093\u00F5W\u0080\x01\x00H@\u00A4W\u009F\u008F\u00E9\u009D\x00\x00\x00\x00IEND\u00AEB`\u0082";  
var imgStr ="\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00K\x00\x00\x00K\b\x06\x00\x00\x008Nz\u00EA\x00\x00\x12\x19IDATx\u00DA\u00D5\\\x0B8\u0095\u00E9\x16\u00DE\x14\u00AA\u00D1\u00B8\u00DFoa\u00BB\x14\x11Bn\u00B9\u0084\u00D0d\u0098\u0090\u00CAQs\x1AI\u00D4(J)&\x15\u00DD\u0090\u008EtB\f\x12\tE5M\u0086f\u00BALGu\u00AAij\u00D0i\u00BA\u00A8$\u0095K\u00EAh*\u00D4yW\x0F=\u008E\u00D8\u00B6mc\u00D7\u00F3|O{o\u00FF\u00F5\u00FD\u00D7z\u00D7\u00BB\u00BEo\u00AD\u009F\u00F1\u00EE\u00DD;\u00C6P\u008Dg\u00CF\u009E\u008D\u00B8x\u00F1\u00A2bRR\u0092]@@@\u00B0\u00A5\u00A5e\u00EA\u00F8\u00F1\u00E3O1\x18\u008C\u009B\x18\r\x18\u00AD\x18\u00EF\u00BA\u008C\u00B7\x18\u00CD\x18w\u00E5\u00E4\u00E4\u00CEc\u00FB\x1COO\u00CF\u00B5\u00DB\u00B6ms-++c>|\u00F8p\u00D4P^\u00FF\u00A0\u009F\u00A0\u00BE\u00BE^\u00E0\u00D8\u00B1cZk\u00D7\u00AE]hcc\u0093)%%um\u00C4\u0088\x11\u008D\x00\u00A0\u00AD\x1B0\u00EC\x0E\x02\u00F0\u0085\u0088\u0088\u00C8\u009FzzzEAAA\u00A1\x19\x19\x19\u00A6\u00B7o\u00DF\x16\u00FE$\u00C1z\u00F3\u00E6\r\u00A3\u00B2\u00B2R:&&\u00C6\u00CB\u00DC\u00DC<g\u00D4\u00A8Q\u00F7q\u0083\u00ED\x1C\u0082\u00D3\u00E7\u00E0\u00E7\u00E7o\u00D0\u00D0\u00D0\u00F8i\u00D9\u00B2e\u0081g\u00CE\u009CQ\x7F\u00F1\u00E2\x05\x1F\u00CF\u0083E \u009D;wNi\u00C1\u0082\x05\u00C1\u00F2\u00F2\u00F2\x17p#\u00AF\u00FB\u00B2\x12QQ\u00D1S\x0E\x0E\x0E~\u009A\u009A\u009A\t\u00F8\u00FEf\u0080\u00C0\u00B5\u0093\u00C5\u00E1x[\x0E\x1C8\u00A0\u00D3\u00DC\u00DC\u00CC\u00C7\u0093`]\u00BBvM\u00F2\u00EB\u00AF\u00BF\x0E\u0094\u0090\u0090\u00B8\u00CA\u00A6\x15\u00BD\x05\x0F\x15\u00A6\u00A5\u00A5\u00A9TTT\bFDD\u0098\u00E2\u00B7FnY\u009B\u0090\u0090P\u00B5\u0093\u0093\u00D3fX\u009Afkk+o\u0080\u00D5\u00D0\u00D0 \u0090\u009C\u009C\u00EC\u00A2\u00AE\u00AE\u00FEs\x0F\x04\u00DD\u00EB\x18=zt\u00F9\u00EE\u00DD\u00BB\u00D5\u00C2\u00C2\u00C2\u00BC6o\u00DEl\b\x17\u00F2\u00E5\u0082e}4\u00C4\u00C5\u00C5+W\u00ACX\u00B1\u00F8\u00C1\u0083\x07\"\u00C3\n\u00D6\u00F5\u00EB\u00D7\u00E5g\u00CC\u0098\x11+  \u00D0_\u008Bx\x06+\u00FC\x02 YKJJ\u00E6\x1E<xPQ__?o\u00B08\u008D\u00E8\u00C0\u00C4\u00C4\u00A4\u00F0\u00C8\u0091#\u0086\x03\u00B12\u008E\u00B9)55\u00D5\u0082\u00C9d\u00FE\u00D2\x11\u009D\u00FAu\u00F1 \u00E3\u00B4\u00E2\u00E2bY\u00F0\u00D4Q\x17\x17\u0097\u00A0\u00F8\u00F8x\u00E3\u0091#G>\x1ED\u00B0\u00DE\x0F\u00E2\u00B3\u00A8\u00A8\u00A8\u00BF!B\x0B\x0E\tX\u00CF\u009F?\x1F\u0081(7\x0Fnt\u0097\u0093\x0B\u00E6\u00E3\u00E3\u00AB\u008D\u008C\u008C4F\u00C8_\b\u0080.Cs\u00A9:::n\x1Fl\u00A0:\x07dK\u00B3\u0097\u0097\u00D7\u00A6\u00EA\u00EAj\u0091A\x05\u00AB\u00AE\u00AEn\u00D4\u009C9sB\x04\x05\x059&b--\u00AD\u00E4\u00FC\u00FC|\x05\x19\x19\u0099s\x10\u0099k\u00B3\u00B2\u00B2\u00C6\x0B\x0B\x0B\u00DF\x1E*\u00B0:F\u00AB\u00A1\u00A1\u00E1\u00DE\u00F3\u00E7\u00CF\u00CB\f\nX\x00J\x18\u00EAy\x13N\u00D42\u0080\u008Bl\f\t\t\u00B1\u0082U\u00F9\u00C2\u00AA\u00AE\u0082\u00E0\u0099nnn\u00EB\x07S\u0083\u00B1\u008A\u00C6:::\x07\u00CB\u00CB\u00CB\u00E5\u00B9\n\x16YT\x07P\u00AF\x06r\u0081P\u00EFE999\u00B2jjj?ZXXD\u00C1\u00AA\u0098\u00B0\u00AA\x1B\u00C3\x00\u00D4\u00FF\x01\x06\x0B\u0093\u00E3\nXP\u00C3#\u00E1z\u00A1\x03\u00B4(\x1Aop\u009Cy\u00E0\u00BBip\u00E3\u008B\u00B0*-XU\u00F80YUw\u00C0\u00B2\u00FE\u00F8\u00E3\x0F\u00B1\x01\u0081\u00F5\u00EA\u00D5+>\"s\u00DC\\\u00D3@/\n)\u00CF\u00B5\u0094\u0094\x14\u0095)S\u00A6\u00FC\x03)\x10q\u0095\x06\u00AC\u00AAj\u0098\u0081\u00FA\u00C0a\u00EE\u00EE\u00EE\u00B1\u00E4A\x1C\u0083E\u00F2`\u00CC\u00981\u00D5\u00DC\u00B8\u00A0I\u0093&m\u0083\u009E\u00D2\u0084H,B\x04\u00D4\u0080UE\u00F1\u0080Uu\u008D\u00D2\u00FF]\u00BE|\u00B9\u00FF\u00EB\u00D7\u00AF\u00F9\u00FA\r\x16\tN\u00A8\u00F2S\\\u00BA\u0098g\u00C1\u00C1\u00C1\u00D6~~~\u00F3\u00C1U\u00A1\u0099\u0099\u0099\u00DA\u009F}\u00F6\u00D9\u009F\u00BC\x02T\u00E7\u00C05=\u00C0\u00B5Y\u00F6\x0B,\u00A40\u0082\x10\u008Bq\u00DCz\u00F2bbbg\x0B\n\nH\u00A5\u00AFOLL\u00A4\b\u00B8\u0081\x131;\x14\x03\u00D2\u00A6\u00EC\u00C6\u008D\x1BRl\u0081\u00F5\u00F6\u00ED[\x06\u00E5z\b\u00EDM\u00DC\"P;;\u00BB\u00EF\u00D2\u00D3\u00D3u\u00ED\u00ED\u00ED\u00BD\u00F1\u00E4&\u0082\u00AB\u00EE\u00F2\"P\x1D\u00A3\u00CD\u00D7\u00D7w]KK\x0B\x7F\u009F`\u00C1\u00FD$\u00E1~\u00BFp\u0091\x0B\u009A\u0090b\u0090\u00B6\u00B2@.\u00A8\f\u00C0\u00B6\u00F3\u00AAUuI\u00F2k\u00F2\u00F2\u00F2\u008CY\u0082\u0085\u009C\u008F\u008F\u00A6Y\u00B8\u0099\u00FD\u0093\x0B\u0096\u0094\u0094H\u00C5\u00C5\u00C5I\x01\u00B4\u00C9H7jx\x19\u00A8\u00CE\x01o\u00C8\x04\x1D\t\u00F5\n\x16M\u00DCIHH\u00FC\u00CE\u00CD\u0093\"\u00AD\u0088nll\u00E4\u00AB\u00AD\u00AD\x15\u00C0\u00E7\u00DD\u009F\x02P4\u0088\u0086bcc\u00A7\x11-}\x04\x16\u00CD$\u00D0\f\u00E7\x00\u00E6\u00C6{\x1A/\u0096.]\u00EAH'\u0084\\0\u0087U\u00F58\u00B30v\u00EC\u00D8K\x1E\x1E\x1E\u00DF\u00AA\u00A8\u00A8\u00E4\u00F2\u0092\u008B\u00EA\u00E9\u00E9\u00E5>~\u00FCX\u00E8#\u00B0*++\u00A5:\u00A6\u0082\u00B9v2\b\u00D1\u00AB\u00C7\u008F\x1F\u0097}\u00FA\u00F4\u00A9\x10\u00AC*\u00B3\u00A7y\u00A6q\u00E3\u00C6\u00ED+,,T\u0087\u00C93\x1C\x1C\x1C\u00A2x\t,!!\u00A1zp\u0097\u00D9G`\u00D1\u00E2\x02\u00C8\u00F8\x157O\u0086\x1Cp\x0F\u00DC\u008F\x1F\u00A9\u008D\x1D\u00CC\u00BA\u00A1\u00DB\u00DF[@\u00F6\u009B\u0090\u00C8\u008At\b`SN\u00A7}\x06sL\u009F>=\u00BE32~\u00D0Ufff\u00B9\\>\u00D1\u009B\u00B9\u00F8\u00F7\u00F0\u00E1C\u00B2\u00AA\u00EE\u00B3\u00A0/\u009C\u009D\u009DW\u0082\u00F8%o\u00DD\u00BA5\n\u0089\u00AC4\\\u00F0\x04/r\x178\u00BC\u00EA\u00F2\u00E5\u00CBJ\x1F\u00C0\u00A2u=\u00B8\u00CC\x03.\u009F\u00E8\x01,Js\u00D3\u00A6M\u00CE\u00B0\u00AA\u00E6n@\u0085\u00E2\u009C\u008A\u00B3g\u00CF\u009E~\u00E4\u00C8\x11\tXX,\u0097\u00B9\u0092\u009Bi\u00D0\u009B\u00ED\u00DB\u00B7{\u00BF\x07\u008B\u00C8\u0097\x16@\u00B9}\u00B1\u00B0\u0094\u009C\u00FC\u00FC|qee\u00E5C]~\x7F\u00E5\u00E4\u00E4\x14\u00F1\u00C3\x0F?(\u00E0\u00FF\u00C0\u00BD{\u00F7j,[\u00B6\u008C\u00CE\u00FD\u0082\u0097##\u00B8t/\u00CD\u00BE\u00D0\u0092\u00FAHkk\u00EB,.?\u008D\u00A65k\u00D6L#\u00B5\u008E\u00CFu\u009Dkz\x1A\x1A\x1A\u00FF<p\u00E0\u0080,\u00CE\x17\x12\x1E\x1En\u0089'f\x03\x12}\u00C0\u00EB2BRR\u00F2\x1Ad\u0095\"\u00E3\u00E2\u00C5\u008B\n\u00F4\u0085\u009B\x07WRR\u00DAWQQ!\x04\u00D5\u00FE\u00F7\u00CE\u00E51\u00F8\u00FE\u00C9\u00DC\u00DC\\eOOO\x7F\f\x0FJ\u00A6eee/}\n\u009A\x0B\x0F\u00BC9>>\u00DE\u0099A\u0091\n\u00FA\u00A7\u0089\u008B\x07oX\u00B5j\u00955\u00AD\x06\u009B\u009A\u009A\u00A6v,\u00AF\u00D7\u00C2\u0092\u00AC6n\u00DC\u00E8\b\u00BEZr\u00E8\u00D0!\x05UU\u00D5\u00C3\u009F\u008A@%\u00AF\u00F0\u00F1\u00F1\u0089dP5\x0B7\u00F9\nV\u0095\u0089\u00AC]\u0088V\u00A8aM\u00FF&\u00DDdaa\x11s\u00F0\u00E0A\x15++\u00AB\u0080\u00A2\u00A2\"9\u00FC\u00BF\u0093W\t\u009D\u00C5|\\1\u0083\u00CA~\u00B8x\u00D0\u00C7\u00B0*s\u008A\x1C\x19\x19\x19&T-\x03\x13~\u0088\u0088\u00A8\x0F\"\u00D7\u00DF\u00B7o\u009F\u00D27\u00DF|\x13\u00CC\u0085)\u00EA\u00E1H\x7F\u00FE\u00C3\u00E8\u00A8\u008F\u00E2V\x04L\u0081\u00E5\u0088@\u00B5\u008F\x0E\f\f\u00F4#\u00AB\x02\x1F\u00FE\b^\x1Cs\u00E7\u00CE\u009D\u0091\u00C1\u00C1\u00C1\x1E\x00\u00B0\u00FES\x03\u00AASD3:\n\u00C9\u00B8A\u0082\u008FW\u00AE\\i\u00B6z\u00F5j\u009B]\u00BBv)\u00C3\u00F5\u00FEI\u00BF\u00EB\u00E8\u00E8d?y\u00F2\u0084\x1F2a\u00AA\u0088\u0088\u00C8\u00ADO\x14\u00A8\u00CE\u00C1h\u00E0\u00C6\u0081\u0090\u00E3\u00A5 \u008FR\u009E2e\u00CA\u00DA\u00EC\u00ECleii\u00E9r\u0092\x10\x0B\x17.\u00F4\u00FC\u00FD\u00F7\u00DF\x05\x14\x15\x15\x0B\u00B9\u00B9\"\u00C3A\x0E\u00F9\u008C\u00A6\u00B2\u00A9\u00CA\x07\u00E3:U\u00D9p@\x07\\!\u00DAzX\u0095EHH\u0088\u00AF\u0081\u0081\u00C1:\u0084Y=D\u00C0;nnn\u00CB\u008F\x1E=*UPP nkk;\u00D0\u00A9\u00E47RRR\u00A7]]]7@\u00F9\u00FB\u00D3pww\u008F\u00D4\u00D4\u00D4\u00CCC\u00F6q\u00A7\u00B7c\u008F\x193\u00E6\x1E\u00F2\u00BB\r\u00C8}-!]T!\u0088\u0095hdeeiB\u008CO777\u00DF.  \u00C0\u00EE\u008A8W\u00B8*\x13j]\x0E\u00D6s\u00C2\u00D7\u00D7\u00D7\x13\u00C0\u00B9\u00EB\u00EA\u00EAF\u00E3\u00E2\u00A4\u00E0\u0086)3f\u00CC\bIJJ\u00D2\u00C2\u00D3\u00E4t\u00E9\u00ABu\u00DA\u00B4i\u00F1\x10\u00B4\n)))\u00BA8\u0096#\u008D={\u00F6\x18\u0081#\x15\u0091\u0084k;::\u0086\u00E3\u00A6k\u00BA\u00CDx\u00DE\u0083\u00F0u\u00C0\x03S\u00F5\u00F7\u00F7\x0F\u0080\u0094I\u0086d\u00C9\u00C3\u00C8\u00C1\u00C3\u008B_\u00BE|\u00B9\x0F\u00BC@-99Y\x0F\x0F\u00F9\x18\x1B\x0Fs\u00E0j\x1D\x11\u00D0\x0E\x00\u00CD\u00C6\u00F7\u00EA\x1D;vL\u008A\u008B\u008B\u00D3?|\u00F8\u00B0\u009C\u0087\u0087\x07YS+@\u00FA366v\"\u00B6\u00F3\u0086\u00C5\u00F5[\u00D3a\u009F\u0087\u00B8)\x1Dh\u009D \u00FA\u008C\u00DF\u00FE\u00A2\u0081s?\x11\x17\x17\u00BF\b\u00CB\u00F9\x0E@\u00AA\u0086\u0085\u00859\u00E3\\\u00F7;\u00F7\x03%$\u00C0\u00AA\x15\u00C4\u00C4\u00C4\u00CE\u00F4\u00B2\u00F8\u00D2*,,|-\"\"b\u00F6\u00A9S\u00A7T\u00E5\u00E4\u00E4\u00CA\x07\x15,\u00B8F\u00F1\u00FE\u00FD\u00FBe`]%x\u0092\u0097KKK\u00C5\u00EB\u00EA\u00EA\u00F8\u00BD\u00BC\u00BC\u0082h-\u00AEs;<\u00CD\"\u00FCM\u00EE\u008B/\u00BE\u00A0i\u00EB\u00A6~>\u0090\u00BA\u00C4\u00C4D\u0083\u00F9\u00F3\u00E7/\u00C6\u00F7\u0097=m\u0083l\u00E04\x00U\u00B5\u00B1\u00B1\u0089\u00EC\u00B4\u0090\u00C9\u0093'\u00A7C\x00\u00CB\x03\u00D0\u009EJ\u00A3\u00DA:\u00A7\u00CF\x11\u00A1\u009F\u00C0J'\u00C3\u00DA\u0096\u00F4\u00B1\u00A25 \x1E\u00F9k\u00EE\u00DC\u00B9\x1E[\u00B7nu\u00A0\u009B\x00\x7F\u00A4\u00DF\u00BD{w$\u00F2B/|\x7F\u00D2\u00FD\u00E2\u00C0\x0F\u0099%%%r0\x7F_\u00B8L\x7F\x16o\u00DB\r\r\r\u00F7\u00C0\u009Dd\x16-Z\u00E4\x0B9r\u00A9\x07\u00AEm_\u00B2d\u00897\u00CE\u00ED\u00DCY\u00CB*((X\x1B\x15\x15\u00E5\x04We.]\u00BA\u00D4\x1F\u009A2r\u00CE\u009C9k\u00F0y\x19\x15\u00A7`{/\u00E8\u00BEE\u00B0\u00C0\u009D\u0088\u00D6z\x00+\u00B0/\u00B0\u009A\x07\u00B0\nR\u009E\u009E\u009E.oll\u009C\tYP\x01!j\b\u00EE\u009A\u0080\u00A8\u00D3\x1Ba\u00B6O\u00980!\u009F\u00C8\x15ni\u00A6\u00AC\u00AC\u00FC\x03\x1BE\u00BA\x1FfU\u00B1ovZZ\u009A!t\u009C\nnr\u00C5\u00E7\u009F\x7F~\u00A3\u008B\u00F5=\u00DD\u00B2e\u00CB\u0094/\u00BF\u00FCrQ\u00D7\x1B\x06`\u00D5\u00B3f\u00CD\n[\u00B7n\u009D\rt\u00DED\u0080\u00A9\u00BB~\u00FD\u00FA\u00F7Tq\u00F6\u00ECY\u00D1\u008Ez\x0E\x06\u00C0\u00A2\x1C\u00B9\u00AF\u0099b\x06\u00A7\u00B3\u0093o\u0091\u00B6\u0084\u0081\\'\x02\u00B4\u00D3 R\u00DB\u00B6\u00B66\x06\u009E\u00D8\u00FC\u00BE\"\u00AC\u00A8\u00A8\u00E8\u00A5\u00D0\u00D0P7X\u008A<\u0094\u00BD\x1F\u00B8\u00E2\x02\u00BB+JT&\x0E\u008E\u00DA\u008A\u00E0\u00A1\r\u009E\u009A\u0080@B\u00D3\u00D5\u008F`\u00E1aTn\u0089\x1B>\u00D5\x05\u00A8\u00C7S\u00A7N\u00DD\x03\x00\u00FF\u0086\u00C03\x03|j\u00B5s\u00E7N\x13\u00FC\u00AF\r\u00D0\u0095\u00C1\u00AB\u00F2\u00B8~c\x00g\x17\x19\x19\u00C9\u00C4>wX\u009E\u009F:\x178\x04\u00EB\u00C9\u0086\r\x1B\u008C\u00BE\u00FD\u00F6[\u00EF\u00E8\u00E8h\x17X\u0095<\u00C8T\x18O1\u0086]\u00DDcff\u0096\u008C'jTVV\u00A6\f\u00D0\x16\u00C0\u008D\u008F \u00ADx\u00C4\u008E\u009C\x01\u0091W\u00C0\u009Dg]\u00B8pA\x14V:9''Gi\u00E2\u00C4\u0089\u00C9\u009D\u00FBB2\\\u00C7u9\u009E8qB\t\u0091\u00D0\x19\u00D7\u00E5\x06\u00B91\x0F#\b\u0081'\nQz/\u0080\u00FD\u0095R4xF6\u00A4\u0085\x12>W\u00B0\u008A\u00C8\f(\u00ED\x1C\x0E]\u00F0W\u00E8\x15q\u00B8\u0084\\aa\u00E1xmm\u00ED\x04\u00E4~\u00CAzzz\x05\u00FD9\x0E\u0085{<\u00FD]\u00E0=+\x1CG\x1E\u00E0MZ\u00B1b\u0085\u008F\u0083\u0083\u00C3Z\u00C8\u0085]\x18\u00FBp\u00EC\u0083222E\u00E0\u0096\x03\u00F8\u009EF\x0B\x1B\u00C4{\x00H\u00A7\u00AA\u00AAJ\u00B8\u00A6\u00A6\u0086\x1F\u00BF\x05tZ'\u0080z\x00\u0097\u00B4\u00DD\u00BD{\u00B7\x1E\u00F6\u00FB\u00A5#(\u00BC\u00EE\u0098.\u00FA\u0088\u00A3\u00C1c\u00AB\x11\u00CD\r\u00FB\x10\u00E8\u00F7\x18\u009E\u009E\u009E\u00EB8!yyy\u00F9c7o\u00DE\x1Cy\u00F2\u00E4I\r\u00A8\u00F7\u009F\x11\x15\x0B\u00A0\u0081\x14\x11y\u00AEpZ\x15\b\u00D5_\u00EA\u00EC\u00EC\x1C\x0E+s\u0081\u00F61@t\u00D3\u00C6\x18\x07\u0091+\x0F\u009EQ\u0080\u00CB(\u00E1;\x13\u009C\u00A7\x17\x1E\x1E>\x1D7\x19\u0086(|\f.\x18\u0088d}<%\u00BB4\r\fKZ\n\u00D0\u00D5 \x19\u00CE\u00B1\u00F1\u00B0\u009A\u0090\u009E\u0099\u00D9\u00DB\u00DB/fE\u00EEjjj?3\u00C05\u00AE8\u00C1\x0B\x0E\u00B2\u00F0G\u00E0\u00ACh\b\u00D1\x7FuLal\u00C6M\u00E8\u00C2=\x1EqA\u00E8\u0092\u0086\u00AA\u0087\u00A6\u00BA\u0087Q\u0089s]\u00C2M\u00FD\x1B!\u00FE*\u00BE\u00DF\u00C2x\u00D25U\u00C1\u00DFn\u0082\u008B\u0098\u0090\n\u00D1\u00EA\u00EA\u00EA\u00C7\u00C1E\u00B2\x1A\x1A\x1A)lVN\u0097\u0081>\u00A4\u00A9*\u0091\u00D5v...\u00B1\fh\x1F&\u00A2\u00CA@\u00CB\x7F\u00DE\u0082D\u00FF\x0E\u0092\u009C\u0086\u009B\x1C\u008E\u00E9\u00976H\u008AE \u00EAI\u0090\nf\b23\u00F1\u00DBs6\u00F7\x0BB\u00B01\u00ECA\u00EAt\u00D5y/\u00E1\u00D6^\u008C\u00DA\u00DA\u00DAQ \u00C6\u00A2\u0081N_@\u00B3\u00D8C\u00BF\u00F8\r\u00D7\")\u00ACj/4\u00DE\b(q1\b\u00D4\x12v\u00F6\u0081z\u00BF\u0083\u00C0\u00A4\u00A9\u00AF\u00AF\u00CFrq\x17\u00D1\u00FB\u00D6\u00E9\u00D3\u00A75\u00DE/\u00DB\u00C3\u00E7C\x07r\u0093\u00A4\u00B0\u00C1+\u00BA \u00DF\u008D\u00C35}B\u00B3\x1A\u00B7o\u00DF\x1E\u0081\u0094\u00C8\u00A37\u0095\u00DF}\u0080\u00A7\x10\x03v+\u00C2\u008D\x7Fc\u00B5\u009D\u0091\u0091Q\x01-\u00E3\u00BF_7\u00CC\u00CC\u00CC4\x05\x1Fp<U\x03\x0E\u00A9\x02_\u008DC\u00AA\u0091=\\`!;HA\u00B0\x11\u0086U\x1Df\u00F3\u009A\u009B)b\u0082>\u00E6\u00F4!\u008C\u00DB\x11)\x03h\u00C9\u00F0=X0_a&\u0093\u00F9\x13\u00A7\x17\n\u00CE;\u008D\u00DCJVII\u00A9d\u0098\u00C0j%q\u008Bh<\x11\u009F\u00EB\u00D8\u00D9\x07b\u00F6'\u0088Z\x19h\u00ADbV\u00DBA\u0086\u00D4@\x07N\u00F8\u00B0\"M\u00A8\u00E1dA\u009C\u0096E\u00D2J\r\u00AD0KHH\\\x19\x0E\u00B0\u00C6\u008E\x1D{\x13\u009C\u00A2\u0082\x00c\u00CB\u00E6\u0084^+t\u00DA\u00C2\u0080\u0080\x00\u00F3\u00BE\u00DA\u00F6\u0090\u0093\u00EE\u00A3\u00CE\u00B7\u00FF+\f\u00A1\x0EPj\x04\u00E2\x10\u00AC=\u00C5\u00C5\u00C5Lh\u00ACa)\u00EC\u0080XMnll\u00E4\u00872\u00F7a\u00A7\u008D\x0F\u00FA\u00AB\u0092\u00F4\x1B2\u0086\u00F8>\\\u00F5%\u00F5cw\u00D6hum\x0E\u00E0\x07\u00E1m\u00E5\u0084\u00E8!\u00D8bH\x14\u0082\u00F7\x1E\r5P\x14\u00D6\u0091$\u00BBQk\u00DC\u00CC\u00993W\u00B1\u00B3\u008F\u00AB\u00AB\u00EBv\x04$5\u0080\u00C1r\u00FD\x01\u0089\u00FB\u00C9\u00FB\u00F7\u00EF\u008B\u00F4X\u00F9\u0097\u0097\u0097\u00A7\u0083D\u00B5\u00DFu\u00EF\u008E\u008E\u008Ea\x10\u00B7\u00A4U\u00EA\u0087\u00C1\x05\u00AF\u009D={V\u00A1\u00AE\u00AE\u008E\x0F\u00BC\u00BB\u0083\r\u00C5\u00DE\u0090\u0090\u0090`\x0E\u00C3\u00F8\u0086U\x0E\n \u00FF\u0082U\u00CD\u00E9\u00B5L\u00B2\u00B9\u00B9\u0099\u009FZe\u00FBk]\u00DE\u00DE\u00DE\u00A1\b\u00C1\x16\u0094\x1C\x0F\u0083\x0B&\u0091\x0BVWW\x0B*++\u00F7\u00B9(\u0082\x04\u00FA8\"\u00B7,\u00B4\u00D3\u008F}XU)\u00ACJ\u0094e\u00B52\u00B8K\x03\u00DC\u00D3\u00AF\u00E6#ww\u00F7\u00954\u00F5\u00C1\u00CD\x1Eg6\u00C7\u00AB\u00B0\u00B00\x0F\u00E4\u0091\u00C2\u0090?\u00E2\u00E0\u00DC\u00B3\u00EC(}\u0088g\u0096\u00C4.((\u00F8|\u00C7\u008E\x1D\u00AE]\u00EBI{\x04\u008B*\u0096\u0091\u00F5\x07\u0080\x0B\u00D8\u009D\u0094{\u00A7\u00AD\u00AD\u00BD9))I\x1Bya\u00EDP\u0082\x05\u00C9r377W+00p\n\u0095/\u00C1u\u00FE\u00D3\u00C7\u00F6w\u00F6\u00EF\u00DF\u00AF\u0089<6\u00BA\u008FJ\u00E5\u00B4\u00A6\u00A6\u00A6QluX\u00D4\u00D4\u00D4\u0088\x18\x1B\x1B\x1Fb\u00F7\u00A2\u00E5\u00E4\u00E4\u008A!\x1Dd\u0090\u0094\x0E\u00A9\u00CE\u00A2\x02\u00D9\u00D4\u00D4\u00D4qnnn\u00EE\x1B7n4\u00A4\x05\fV\u00DB[ZZf\u00C0\x02\x15F\u008F\x1E}\u0085U\x03zII\u0089v\u00BFzw\u008E\x1E=j\u00C0\u00AE\u0094\u00C0\x13}\u00BC`\u00C1\u0082/\u00A1\u00A2\u00B7\x0Eee\x0BtR\x00\"\u00A1%\x12aOX\u0097S\x1Fi\u00CEkZ\x1B@j\u00E7\u00DC\u00DBv\x00\u00FB9\u00B6\u0099\u00D7[\u00D39\u00CB\u00A6qj\u00BE\x06\x10\u00CF\u00D9\u00BC\u00F8\u00FA\u00FE\u00AE\u00DA\f\u00B0\u00D7\u00B9a\u00D7\u00AE]\u00A6\u00D6\u00D6\u00D6\u00FE\u00B8A{OOO\u0096I<\x1E\u00FC\u00CD\u00F4\u00F4t\u00A8\x1C\u00B5\u0084\u00DE\u00F8\u008C\u00A6a\u00BA\u0096r\u00F7\u00AB\u0085\u008E\ns\u00A9\u00F9\u009A&\u00D4x\u00AD\u00EE@ZZ\u00FA\x02M%\u00AB\u00A8\u00A8\u00FC\x03 \u00E8\x1B\x18\x18lf\u00B5\u00BD\u0095\u0095U\x16xM\u0091\u00DA\u008D{\u0089\u0092E\u0097.]\u0092\x1AP'+u\u00A9S\u00F35/\u00F5\x06\u00D2\u00B0\u00B0\u00B0@:\u00BAG\x1D\x1C\u0093\x03\u0092W\x01_\u00B2z/D\u00DB\u00AAU\u00AB\x16\x04\x07\x07\u00DB\u00E1\u00F3\x7F{\x10\u00D5\u00FF*//\u00D7\u00E4J\u008F4\x0E$C\u00BD\u00C4<T\u00D0\u00DFF\u00AF:\u0080\x04p@$\u00CE\u00CD\u00CF\u00CFWB\u00C2{\u009E\u00C5\u00E2FmZZ\u009A\u00AE\u0089\u0089\u00C9w=\u00CCU]\u00CD\u00C8\u00C8\u0098\u00C4\u00D5\u00EE{\u00EAR\u00E7\x15\u00C0\u00A8\x01\x01R\u00C5\x04\u00AE\u00B5\n#\x01\u00DC\u00A5\u0089\u00DF\u00EE\u00B1\u00E8!\u00FC\x05\u0080\u00CA\u00C2\nOt\u00E3\u00B1\u00DF\u00A0\u00D1\u00CCi\t\u008F\u00EB\u00EFu\u00A0.\u00F5\u008Eu\u00BAa-q\u0084^\u00BAJ\u00C5\u00BC\u00E0\u00ABlh\u00CCe x[V\u00E5\u00E1H\u00B0ccbb\u00B4\u00C0\u00BD\x1F\x00UWW?\u00F7\u00FD\u00F7\u00DF\x1B\u00B4\u00B7\u00B7\x0F\u00DE\x1BC\u00AE_\u00BF.\u00F6\u00D5W_\u00C5\u00F5\u00E4\u00FBC5\u00F0\u00C0\x0E\u0080\u00D4\u0095\u00A0\u00B4\x7F\u008D\u008C\u008CtB\x14[\u00C8\u0082S\u00DBV\u00AE\\9w\u00F1\u00E2\u00C5.\x1D\u0093|\u00EDD\u00E6\u00F0\x14\u00AD!y\x17\ru\u00A9C\u00E5\u00FB\u0083'\u00EE\x0F\x07X\u00AE\u00AE\u00AEk#\"\"\u00A8w\u00F12\u00ACc\u0082\u00A9\u00A9i\x1C\u00AB\x17\u0091!\n\x1AO\u009D:u\rY\x1F\u0080\u00DD\u008E\u00A8'=\u00A4o9\u00A2\u00B4\bj\u00D8\n\x04[:\u0094\u0091\u0092\u009A\u00B1 Dg\u00CE\u009B7\u00CF[FF\u00E6TAA\u0081\u00BC\u0094\u0094\u00D41\x16U>UHqT\u00A0\u00F6W#\u008F\u009C\x0F\x1D%8l\u00EF\u00CF\u00AA\u00AA\u00AA\u0092\u00A2\u009E\u00E2A\u00E8\u00FD\u00E9\u00CDR\u00EA\u00F0\u0090\u00F4a)\u00D1FFF\u00E9 \u00E8qp\u00C7*\x16\u0085ve\u00A0\u008E\u00CF\u00AF\\\u00B92\u0096]\"\x1F\u00D47\u00B3\u00BD|\u00F9\u0092\u008Fz\u008A\u0091\u0080fpR\u00AC\u00D6\u00CF\u0097\u0087\u00FD\u0096\u009D\u009D\u00AD\u0088\x7Fy~~~\u00C1\u00D1\u00D1\u00D1=N\r\u00C1\x02\u00FF\x027\u00FD\u0094\u0090\u0090`O/\u00F3\u00E0\u00B9w\u00FEQO1\u00B5\u00CA\u00EA\u00EB\u00EB\u00E7@\u00DB<\x1D\f\u00B0  \x0F\u00E3\u009F\x12\u00C2\u00FE\u00CF\u00F1\u00F1\u00F1v\u00B3f\u00CD\u00EA\u00BE\u00EC\u00DEBsQ\u00DB\u00B6m\u009B{\u00EF\u00DE=Q\u009E\x7F\u009B$\u00E5W\u00D4\x01J\u008D\u008D\u0092\u0092\u0092\x15\u00DClPwpp\u0088MLL\u00D4\u0085|(\u00A1J?&\u0093\u0099N\u00DA\u008F\u0082\u008D\u00AD\u00ADm&\x00\u009C\t\u0090D>\u00B9\u00F7\u0094\u00B6\u00B4\u00B4\u00F0Qc#\u00AC\u00CD\u00DB\u00D1\u00D1q/\u00BD\u00A3\u0094\u009A\u0086\x06\"l}||\x02\u0090\u00E0OC`I=s\u00E6\u008C\x04dL\x04\u00A4\u00C1\u0092\u00D2\u00D2Rm\u00EAp\u00FB\u00A4_\u00EA\u00DAuA\u0084\u00DA\u00D0\u00E2\u00E2\u00E2\u009C\u00A9i\b\u0089o\u00F1\u00FB\x16\x0F\u00F6k\u00D1\u00C9:\u00FF\u00DC\u00B2e\u008B]qq\u00B1:\"\u009C\tq\x11\u00F8r\u00C4P\u00DD\u00C3\u00FF\x00|\u00F0%\x12\u00A9\u00A5\u00D1\u00AA\x00\x00\x00\x00IEND\u00AEB`\u0082";

box.panel2.group.k99logo = box.panel2.group.add('image',undefined,ScriptUI.newImage(imgStr));  
box.panel2.group.k99logo.alignment='center'; 

// ALL the following will not work
// var imageFile64 = new File("data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==");

// var imgStr = "";
// img.src = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
// var imageFile = base64ToFile( "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==");
// var image1=new Image("data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==");
// Work?
// box.panel2.group.imageYouWant = box.panel2.group.add('image',undefined,File('altium_logo.png'));  


/**
* Actions
*/

// box.panel2.group.closeBtn.onClick = function(){  
  // box.close();  
// }

box.panel2.group.doFlip.onClick = function(){ 
	var toFlip = box.panel_text1.text;
	if (toFlip === "" ) return alert("The text box is empty.\nNothing I can do.\nBut YOU could type something ...");
	var ignoreNor = box.panel2.group.ignoreNumbersFlip.value;
	var flipWords = box.panel2.group.flipWords.value;
	var sep = "";

	if(ignoreNor == true ) { 
		// alert(ignoreNor);
		var flipped =  k99FlipTextIgnoreNo(toFlip,sep);
	} else if(flipWords == true ) { // Flipping words is just a different seperator . Do DRY!
		var flipped =  k99FlipWords(toFlip,sep);
	} else { 
		var flipped =  k99FlipString(toFlip,sep);
	}
	box.panel_text1.text = flipped;
	alert('Flipped action finished !\n You can now copy and paste the code back to your Document');
}
  
box.panel.selectionBtn.onClick = function(){  
	// alert('selectionBtn');
	var myselected = k99SelectText();
	box.panel_text1.text = myselected;
}

box.panel.putBackBtn.onClick = function(){  
	// alert('start put back button');
	var flipped = box.panel_text1.text;
	if (flipped === "" ) return alert("The text box is empty.\nNothing I can do.\nBut YOU could type something ...");
	var docm = app.activeDocument.selection[0];

	docm.contents = flipped;
	alert('text was put in the box, now close script to refresh');
	// Need redraw or close the script 
	redraw();
	// box.close();  

}


/**
* Functions
*/
function k99FlipString(e,sep){
	// also see here http://stackoverflow.com/questions/26126713/how-to-reverse-words-in-a-string-and-letters-in-those-words-unless-the-word-is-a
	return e.split("").reverse().join("");
}  
// ignoring numbers
function k99FlipTextIgnoreNo(e,sep){
	// also see here http://stackoverflow.com/questions/26126713/how-to-reverse-words-in-a-string-and-letters-in-those-words-unless-the-word-is-a
    return e.split(/([^\d\.])/).reverse().join('');
}  
// Flipping words is just a different seperator . Do DRY!
function k99FlipWords(e,sep){
	// also see here http://stackoverflow.com/questions/26126713/how-to-reverse-words-in-a-string-and-letters-in-those-words-unless-the-word-is-a
    return e.split(' ').reverse().join(' ');
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