function checkAll(objRef) {

    var GridView = objRef.parentNode.parentNode.parentNode;
    var inputList = GridView.getElementsByTagName("input");
    var intMarkedRows = 0;

    for (var i = 0; i < inputList.length; i++) {

        //Get the Cell To find out ColumnIndex
        var row = inputList[i].parentNode.parentNode;
        if (inputList[i].type == "checkbox" && objRef != inputList[i]) {

            if (objRef.checked) {
                //If the header checkbox is checked
                //check all checkboxes
                //and highlight all rows
                if (inputList[i].disabled == false) {
                    intMarkedRows = intMarkedRows + 1;
                    row.style.backgroundColor = "aqua";
                    inputList[i].checked = true;
                }
            }

            else {
                //If the header checkbox is checked
                //uncheck all checkboxes
                //and change rowcolor back to original
                if (inputList[i].disabled == false) {
                    if (row.rowIndex % 2 == 0) {
                        //Alternating Row Color
                        row.style.backgroundColor = "#C2D69B";
                    }
                    else {
                        row.style.backgroundColor = "white";
                    }
                    inputList[i].checked = false;
                }                        
            }
        }
    }

    //validateButtonsProcess(intMarkedRows);
}

function Check_Click(objRef) {

    var intMarkedRows = 0;

    //Get the Row based on checkbox
    var row = objRef.parentNode.parentNode;

    if (objRef.checked) {
        //If checked change color to Aqua
        row.style.backgroundColor = "aqua";
    }
    else {

        //If not checked change back to original color
        if (row.rowIndex % 2 == 0) {

            //Alternating Row Color
            row.style.backgroundColor = "#C2D69B";
        }
        else {
            row.style.backgroundColor = "white";
        }
    }

    //Get the reference of GridView
    var GridView = row.parentNode;

    //Get all input elements in Gridview
    var inputList = GridView.getElementsByTagName("input");

    for (var i = 0; i < inputList.length; i++) {

        //The First element is the Header Checkbox
        var headerCheckBox = inputList[0];

        //Based on all or none checkboxes
        //are checked check/uncheck Header Checkbox
        var checked = true;

        if (inputList[i].type == "checkbox" && inputList[i] != headerCheckBox) {
            if (!inputList[i].checked) {
                checked = false;
                break;
            } else {
                intMarkedRows = intMarkedRows + 1;
            }
        }
    }
    //validateButtonsProcess(intMarkedRows);
    headerCheckBox.checked = checked;
}
