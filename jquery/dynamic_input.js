var rowNum = 0;
function addRow(frm) {
rowNum ++;
var row = '<p id="rowNum'+rowNum+'">Item quantity: <input type="text" name="qty[]" size="4" value="'+frm.add_qty.value+'"> Item name: <input type="text" name="name[]" value="'+frm.add_name.value+'"> <input type="button" value="Remove" onclick="removeRow('+rowNum+');"></p>';
jQuery('#itemRows').append(row);
frm.add_qty.value = '';
frm.add_name.value = '';
}

function removeRow(rnum) {
jQuery('#rowNum'+rnum).remove();
}