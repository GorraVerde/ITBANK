var dolar = document.getElementById('novedades')
dolar.innerHTML = ''

fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then(data => data.json())
    .then(data => {
        console.log(data[1].casa)
        for (let val in data) {
            console.log(data[val].casa)
            if (val == 0 || val == 1) {
                dolar.innerHTML += '<article><figure class="flex-dolar">' +
                    '<img src="../Imagenes/' + (val == 0 ? 'dolar_oficial.png"' : 'dolar_blue.png"') + ' alt=""><p class="dolar">' +
                    data[val].casa.nombre + '</p>' +
                    '</figure><div class="compra_venta"><div><p>Compra</p><div>' + data[val].casa.compra + '</div></div><div><p>Venta</p>' +
                    '<div>' + data[val].casa.venta + '</div></div></div><div class="variacion" >' + data[val].casa.compra + '</div><div class="fecha">Actualizado</div></article > '
            }
        }
    })
