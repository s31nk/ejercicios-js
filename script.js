let fraseOriginal = '';

        function sustituirLetras() {
            let frase = document.getElementById('frase').value;
            fraseOriginal = frase;  // Guardar la frase original
            let fraseSustituida = frase.replace(/[tnp]/gi, 'curso');
            document.getElementById('output').innerHTML = fraseSustituida;
        }

        function revertirCambios() {
            if (fraseOriginal) {
                document.getElementById('output').innerHTML = fraseOriginal;
            }
        }

        function limpiarResultado() {
            document.getElementById('frase').value = '';
            document.getElementById('output').innerHTML = '';
            fraseOriginal = '';
        }