// this function will turn an image to binary string 
// to be included in script 
// run from illustrator . Has no UI . 
// Produces an imageName.ext.txt file
function test(){
    var chosenFile = File.openDialog("Choose file");
    if(chosenFile != null){
        var infile = File(chosenFile.fsName.replace('file://', ''));
        var outfile = File (chosenFile.path+"/"+chosenFile.name+".txt");
        infile.open ("r");
        infile.encoding = "binary";
        var temp = infile.read();
        infile.close();
        outfile.open ("w");
        outfile.write (temp.toSource ());
        outfile.close ();
    }
}
test();