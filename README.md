<h2>Template generator</h2>

Uso: <br>

Para cargar un template estático:<br>
Primero setear el path al template:<br>
<code>
template.setPath(path);
</code>
template:
target: ejemplo #div
data: Json

<code>
template.load(template, target, data, callback()});
</code>

Para recorrer un objeto json y mostrarlo con template:<br>
template: String
target: String (ejemplo #div)
data: Json

<code>
$.each(objeto, function(i, value){	
			template.each(template, target, data, callback()});
		});
</code>

Para aplicar animacion:<br>
animation_type: fade, slide <br>
speed: number (default 1000)<br>
<code>
template.setAnimation(animation_tpye, speed);
</code>
