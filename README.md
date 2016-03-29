<h2>Templates JS</h2>
<hr>
1- Seteamos el path a los templates 
<code>
template.setPath(path);
</code>

2 - Cargamos el template:
<code>
template.load(template, target, data, callback()});
</code>

Ejemplo de uso:
<code>
Usuario: <strong><%name%></strong>
Link : <a href="usuario/<%id%>"><%name%</a>
Id : <%id%><br />
</code>

Para recorrer un objeto:
<code>
$.each(objeto, function(i, value){	
			template.each(template, target, data, callback()});
		});
</code>

Para aplicar animacion:<br>
<code>
template.setAnimation(animation_tpye, speed);
</code>
