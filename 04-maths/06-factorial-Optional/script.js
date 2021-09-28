(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        const numberField = document.getElementById("number");
        const newValue = numberField.value = Math.pow(numberField.value, 2);

    });

})();