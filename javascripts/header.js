function sticky_relocate() {
  var window_top = $(window).scrollTop();
  var div_top = $('#sticky-anchor').offset().top;
  if (window_top > div_top)
    $('#sticky').addClass('stick')
  else
    $('#sticky').removeClass('stick');
  }

$(function() {
  $(window).scroll(sticky_relocate);
  sticky_relocate();
  });


document.write('<div id="sticky-anchor"></div>'); 
document.write('<div id="sticky">'); 
document.write('<p class="vet groot"><a href="/">OBRECHTKERK</a></p><p class="normaal">');
document.write('<a href="/" >Home</a> | '); 
document.write('<a href="agenda.htm" >Agenda</a> | '); 
document.write('<a href="contact.htm" >Informatie & Contact</a> | '); 
document.write('<a href="foto.htm" >Foto\'s</a><br/>'); 
document.write('<a href="werkgroepen.htm" >Catechese & Werkgroepen</a> | '); 
document.write('<a href="http://www.katholiekinzuid.nl" target="_blank">Jeugd & Jongeren</a> | '); 
document.write('<a href="pci.htm">PCI</a><br/>'); 


document.write('<a href="obrechtkoor.htm" >Obrechtkoor</a> | '); 
document.write('<a href="gebouw.htm" >Kerkgebouw</a> | '); 
document.write('<a href="kunst.htm" >Kunst & Orgel</a>'); 
//document.write('<a href="kunst.htm" >Kunst & Orgel | '); 
//document.write('<a href="muziekenzin" >Muziek en Zin</a>'); 


document.write('</p></div>'); 
