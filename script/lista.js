var usuario = prompt ("¿Cuál es tu peso?");
var planeta = parseInt(prompt("Elige un planeta.\n1 es Mercurio\n2 es Venus\n3 es Tierra\n4 es Jupiter\n5 es Jupiter\n6 es Saturno\n7 es Urano\n8 es Neptuno"));
var peso = parseInt(usuario);
var gmercurio = 3.7;
var gvenus = 8.9;
var gtierra = 9.8;
var gmarte = 3.7;
var gjupiter = 24.8;
var gsaturno = 10.4;
var gurano = 8.9;
var gneptuno = 11.15;
var pesofinal;
var nombre = "";
if (planeta==1)
{
  pesofinal=peso*gmercurio/gtierra;
  nombre = "Mercurio";
}
else if(planeta ==2)
{
  pesofinal=peso*gvenus/gtierra;
  nombre = "Venus";
}
else if(planeta ==3)
{
  pesofinal=peso*gtierra/gtierra;
  nombre = "Tierra";
}
else if(planeta ==4)
{
  pesofinal=peso*gmarte/gtierra;
  nombre = "Marte";
}
else if(planeta ==5)
{
  pesofinal=peso*gjupiter/gtierra;
  nombre = "Jupiter";
}
else if(planeta ==6)
{
  pesofinal=peso*gsaturno/gtierra;
  nombre = "Saturno";
}
else if(planeta ==7)
{
  pesofinal=peso*gurano/gtierra;
  nombre = "Urano";
}
else if(planeta ==8)
{
  pesofinal=peso*gneptuno/gtierra;
  nombre = "Neptuno";
}
else
{
  pesofinal=1000000
  nombre = "KriptoLandia";
}
pesofinal=parseInt(pesofinal);
document.write("Tu peso en " + nombre + " es <strong>"  + pesofinal + " kilos </strong>")
