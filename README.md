# Sort Table
> sortTable is a simple [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript) script to sort data from an `HTML` table in an Ascending and Descending way. You can use it to sort names, numbers, dates, and currency. 

# How to use

Add the `sortTable.js` to the `<head>` of your `HTML` file. It's necessary that your project is using [jQuery](https://jquery.com). In its `HTML` file it makes a call to` sortTable.js` as follows:

```javascript
jQuery(document).ready(function() {
    var table = new ScriptOrderTable();
    table.queryTableColumns('#myTable', 'thead td a');
});
```

See the [`sortTableExample.html`](https://github.com/euiagosilva/sortTable/blob/master/sortTableExemple.html) file for an example of how to use the script.
