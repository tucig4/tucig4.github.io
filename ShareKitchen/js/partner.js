$('.type-image').click(function(){
    $('.type-box').toggle();
});
function changeTable1(){
    $('.table-tools-desktop').hide();
    $('.one').hide();
    $('.table-location-desktop').show();
    $('.two').show();
}

function changeTable2(){
    $('.table-tools-desktop').show();
    $('.one').show();
    $('.table-location-desktop').hide();
    $('.two').hide();
}

function toggle_1(source) {
    checkboxes = document.getElementsByName('tick');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
}
function toggle_2(source) {
    checkboxes = document.getElementsByName('tick0');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
}

function GetSelected_1() {
    //Reference the Table.
    var grid = document.getElementsByClassName('table-tools-desktop')[0];

    //Reference the CheckBoxes in Table.
    var checkBoxes = grid.getElementsByTagName("input");
    var message = "ID.....Ảnh.....Miêu tả.....Trạng thái....Số lượng....Giá trên thị trường.....Tổng tiền";

    //Loop through the CheckBoxes.
    for (var i = 1; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            var row = checkBoxes[i].parentNode.parentNode;
            message += row.cells[0].innerHTML;
            message += "   " + row.cells[1].innerHTML;
            message += "   " + row.cells[2].innerHTML;
            message += "   " + row.cells[3].innerHTML;
            message += "   " + row.cells[4].innerHTML;
            message += "   " + row.cells[5].innerHTML;
            message += "   " + row.cells[6].innerHTML;
            message += "\n";
        }
    }

    //Display selected Row data in Alert Box.
    alert(message);
}

function GetSelected_2() {
    //Reference the Table.
    var grid = document.getElementsByClassName('table-location-desktop')[0];

    //Reference the CheckBoxes in Table.
    var checkBoxes = grid.getElementsByTagName("input");
    var message = "ID......Miêu tả.....Trạng thái....Địa chỉ....Thời gian từ.....Giá cho thuê";

    //Loop through the CheckBoxes.
    for (var i = 1; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            var row = checkBoxes[i].parentNode.parentNode;
            message += row.cells[0].innerHTML;
            message += "   " + row.cells[1].innerHTML;
            message += "   " + row.cells[2].innerHTML;
            message += "   " + row.cells[3].innerHTML;
            message += "   " + row.cells[4].innerHTML;
            message += "   " + row.cells[5].innerHTML;
            message += "\n";
        }
    }

    //Display selected Row data in Alert Box.
    alert(message);
}