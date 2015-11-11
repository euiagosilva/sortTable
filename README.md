# sortTable
O sortTable é um simples script JavaScript para ordenar dados de uma tabela ``HTML`` de forma Ascendente e Descendente.

Você pode utilizá-lo para ordenar nomes, números, datas, e moeda. 

# Como Utilizar
Adicione o <code>sortTable.js</code> ao ``<head>`` do seu arquivo ``HTML``. É necessário que seu projeto esteja utilizando o jQuery.

Em seu arquivo ``HTML`` faça a chamada do ``sortTable.js`` da seguinte forma:

    jQuery(document).ready(function() {
        var table = new ScriptOrderTable();
        table.queryTableColumns('#myTable', 'thead td a');
    });

* Veja no arquivo ``sortTableExample.html`` um exemplo de como utilizar o script.
