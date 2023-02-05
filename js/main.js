const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");
const cantidad =urlSearchParams.get("cantidad");
var datos_bancarios = document.getElementById("datos_bancarios");
var invitado = document.getElementById('nombre_invitado');
var cantidad_ticket = document.getElementById('cantidad_invitado');
var flag = true;
var whatsapp_confirma_asistencia = '2292792893';
var nombre_festejado = '!Nos vamos a Disney¡';
var iglesia ={
    nombre: 'Parroquia Señora Santa Ana',
    direccion: 'Blvd Miguel Alemán, Zona Centro, Centro, 94290 Boca del Río, Ver',
    fecha:'9 de Julio del 2022 a las 13:00',
    url_mapa: 'https://goo.gl/maps/4cY4iE38h673HAmE7'
};
var salon ={
    nombre: 'Salon Club de Golf Villa Rica',
    direccion: 'Carretera Boca del Río & Antón Lizardo KM 1.5, 94290 Alvarado, Ver.',
    fecha:'9 de Julio del 2022 a las 14:00',
    url_mapa:'https://goo.gl/maps/m2YCydn3vmQdf8D5A'
};

var hospedaje ={
    nombre: 'Hotel Plaza Sol',
    direccion: 'Bv. Adolfo Ruíz Cortines 5256, Arrecifes, Jardines de Mocambo, 94299 Veracruz, Ver.',
    url_mapa:'https://g.page/hotel-plaza-sol-veracruz-bocadel?share',
    codigo: "'Bautizo Ruben Chinchillas Rodriguez'"
};

var mesas_regalos_liverpool = '50907696';
var hashtag = '#Bautizo_Rubencito';


invitado.innerText = id;
//datos_bancarios.style.display = 'none';
cantidad_ticket.innerText = cantidad;


function cargaDatosLugares(){
  var  festejado_nombre = document.getElementById('nombre_festejado');
    var salon_img = document.getElementById('salon_img');
    var salon_nombre = document.getElementById('salon_nombre');
    var fecha_salon = document.getElementById('fecha_salon');
    var direccion_salon = document.getElementById('direccion_salon');
    var salon_mapa = document.getElementById('salon_mapa');

    var hashtag_id = document.getElementById('hashtag');

    var iglesia_img = document.getElementById('iglesia_img');
    var iglesia_nombre = document.getElementById('iglesia_nombre');
    var fecha_iglesia = document.getElementById('fecha_iglesia');
    var direccion_iglesia = document.getElementById('direccion_iglesia');
    var iglesia_mapa = document.getElementById('iglesia_mapa');


    var hotel_img = document.getElementById('hotel_img');
    var hotel_nombre = document.getElementById('hotel_nombre');
    var direccion_hotel = document.getElementById('direccion_hotel');
    var codigo_hotel = document.getElementById('codigo_hotel');

    var hotel_mapa = document.getElementById('hotel_mapa');

    
    festejado_nombre.innerHTML = nombre_festejado;

    iglesia_nombre.innerHTML = iglesia.nombre;
    fecha_iglesia.innerHTML = iglesia.fecha;
    direccion_iglesia.innerHTML = iglesia.direccion;
    iglesia_mapa.href = iglesia.url_mapa;

    salon_nombre.innerHTML = salon.nombre;
    fecha_salon.innerHTML = salon.fecha;
    direccion_salon.innerHTML = salon.direccion;

    salon_mapa.href = salon.url_mapa;
    hashtag_id.innerHTML += hashtag;

    hotel_nombre.innerHTML = hospedaje.nombre;
    direccion_hotel.innerHTML = hospedaje.direccion;
    codigo_hotel.innerHTML = hospedaje.codigo;

    hotel_mapa.href = hospedaje.url_mapa;



}

function mesa_regalo_liverpool(){
    window.location='https://mesaderegalos.liverpool.com.mx/milistaderegalos/'+mesas_regalos_liverpool;
}
function hashtag_instagram(){
    var link_hastag = hashtag.split("#");
    console.log(link_hastag);

    window.location='https://www.instagram.com/explore/tags/'+link_hastag[1];
}
function whatsapp(){
var mensaje= 'text="'+id+'"%20confirma%20asistencia%20muchas%20gracias.';
var link_whatsapp = 'https://wa.me/52'+whatsapp_confirma_asistencia+'/?'+mensaje;
window.location= link_whatsapp;
}


function cuenta_bancaria(){
    this.flag = !flag;

    if(flag){
        datos_bancarios.style.display = 'flex';
    }else {
        datos_bancarios.style.display = 'none';
    }
}

cargaDatosLugares();
cuenta_bancaria();
