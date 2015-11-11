var ScriptOrderTable = function() {
    var self = this,
        table = null,
        columnsTitle = null;

    var convertDataForSort = function(x, y) {
        var v1, v2, temp;
        switch (x[2]) {
            case 'date':
                temp = x[0].split('/');
                v1 = new Date(temp[2], parseInt(temp[1]) - 1, temp[0]).getTime();
                temp = y[0].split('/');
                v2 = new Date(temp[2], parseInt(temp[1]) - 1, temp[0]).getTime();
                break;
            case 'money':
                temp = parseInt(x[0].replace(/ /gi, "").replace(/\R\$/gi, "").replace(/\./gi, "").replace(/\,/gi, ""));
                v1 = temp / 100;
                temp = parseInt(y[0].replace(/ /gi, "").replace(/\R\$/gi, "").replace(/\./gi, "").replace(/\,/gi, ""));
                v2 = temp / 100;
                break;
            case "number":
                v1 = parseFloat(x[0]);
                v2 = parseFloat(y[0]);
                break;
            default:
                v1 = x[0];
                v2 = y[0];
        }
        return {
            x: v1,
            y: v2
        };
    }

    var sortTable = function(col, type) {
        var tbl = table.find('tbody:eq(0)');
        var store = [];
        var datatype = $(table).find('thead td:eq(' + col + ')').attr('data-type');
        for (var i = 0, len = tbl.find('tr').length; i < len; i++) {
            var row = tbl.find('tr:eq('+i+')');
            var column = row.find('td:eq('+col+')');
            var sortnr = column.text();
            store.push([sortnr, row,datatype]);
        }
        store.sort(function(x, y) {
            var data = convertDataForSort(x, y);
            if(x[2]){
            	return (type == 'desc') ? data.y - data.x : data.x - data.y;
            }else{
                
            	if(data.x.toLowerCase() > data.y.toLowerCase()){
                	return (type == 'desc') ? -1 : 1;
                }else{
                	return (type == 'desc') ? 1: -1;
                }
            }
        });
		
        for (var i = 0, len = store.length; i < len; i++) {
            tbl.append(store[i][1]);
        }
        
        store = null;
    }

    self.queryTableColumns = function(tableElement, queryElement) {
        table = jQuery(tableElement);
        columnsTitle = table.find(queryElement);
        columnsTitle.off('click').on('click', function(e) {
            e.preventDefault();
            var col = $(this).index(),
                attr = null;
            if ($(this).attr('order') == 'asc') {
                attr = 'desc';
            } else {
                attr = 'asc';
            }
            columnsTitle.removeAttr('order');
            $(this).attr('order', attr);
            sortTable(col, attr);
        });
    }
}