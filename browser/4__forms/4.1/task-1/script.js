"use strict";

let select = document.getElementById('genres');
alert(select.value);
alert(select.options[select.selectedIndex].text);

let option = new Option("Классика", "classic", true, true);

select.append(option);
