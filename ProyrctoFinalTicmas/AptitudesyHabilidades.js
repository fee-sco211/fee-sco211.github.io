document.getElementById("interesesButton").addEventListener('click', function(){
    document.getElementById('intereses').style.display = 'block';
	document.getElementById('listado-conocimientos').style.display = 'none';
    document.getElementById('interesesButton').style.display = 'none';
    document.getElementById('conocimientosButton').style.display = 'block';
});

document.getElementById("conocimientosButton").addEventListener('click', function(){
    document.getElementById('intereses').style.display = 'none';
    document.getElementById('listado-conocimientos').style.display = 'block';
    document.getElementById('interesesButton').style.display = 'block';
    document.getElementById('conocimientosButton').style.display = 'none';
    document.getElementById('centrado').style.minWidth='0';
});