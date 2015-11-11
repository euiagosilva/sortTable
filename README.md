# sortTable
O sortTable é um simples script JavaScript para ordenar dados de uma tabela HTML de forma Ascendente e Descendente.

Você pode utilizá-lo para ordenar nomes, números, datas, e moeda. 

# Como Utilizar
Adicione o <code>sortTable.js</code> ao <code>head</code> do seu arquivo <code>HTML</code>. É necessário que seu projeto esteja utilizando o jQuery.

Em seu arquivo <code>HTML</code> faça a chamada do <code>sortTable.js</code> da seguinte forma:

    jQuery(document).ready(function() {
        var table = new ScriptOrderTable();
        table.queryTableColumns('#myTable', 'thead td a');
    });

* Veja no arquivo <code>sortTableExample.html</code> um exemplo de como utilizar o script.
