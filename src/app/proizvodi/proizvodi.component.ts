import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proizvodi',
  templateUrl: './proizvodi.component.html',
  styleUrls: ['./proizvodi.component.css']
})
export class ProizvodiComponent implements OnInit {


/* objekat sa podacima za proizvode */

prodaja = [
  {
    naziv: 'Gelender FUNK',
    cijena: '2.8KM',
    opis: 'Session piva u bukvalnom prevodu bi bila piva za cijeli dan. Nešto niži udio alkohola od uobičejnog za ovaj stil, lakše tijelo i svijetlija boja sa lepršavom završnicom koja naglašava doživljaj prijatne gorčine i puno arome koje dolaze od američkih hmeljeva Chinook, Amarillo i Mosaic. Postojanost pjene koja se spušta do dna čaše i savršeno ibzalansirane arome dinje, borovnice, papaye, ruže, kajsije i breskve, oduševit če vas od prvog do zadnjeg gutljaja. Naizgled umiljata i sočna poput voćnok soka, ipak će vas razgibati i pripremiti sva vaša čula za plesni podij.',
    vrsta: 'Session IPA',
    slika: 'assets/gelender-pivo-funk.png'
  },
  {
    naziv: 'Gelender NUIT',
    cijena: '2.5KM',
    opis: 'Svilenkasta, tamna boja sa kremastom pjenom rezultat je pažljivo odabranih 5 vrsta specijalnih sladova. Okus je sladak sa snažnom aromom čokolade, kafe i biskvita. Puno tijelo i nešto viši udio alkohola, ugrijati će vas u hladnijim danima.  Savršena je kombinacija uz jaču hranu, odrezak ili pizzu.',
    vrsta: 'Robust Porter',
    slika: 'assets/gelender-pivo-nuit.png'
  },
  {
    naziv: 'Gelender WHITE',
    cijena: '2.3KM',
    opis: 'Belgijsko pšenično pivo, poznato kao bijelo pivo, zvaničnog naziva stila Witbier, odnosno Wit. Za razliku od poznatijih, njemačkih pšeničnih piva odnosno weizen- a i hefeweizen- a belgijska odlikuje svijetlo žuta, gotovo bijela boja, niže tijelo i veća suhoća. Sav okus dolazi od posebnih belgijskih kvasaca, koja za razliku od njemačkih ne naglašuju estere banane, već prijatnu citrusnu kiselost. Također odlikuje ih korištenje začina od kojih su najčešći korijander i kora od naranče.',
    vrsta: 'Witbier',
    slika: 'assets/gelender-pivo-white.png'
  },
  {
    naziv: 'Gelender VASCO DA GAMA',
    cijena: '2.8KM',
    opis: 'Ovo je specijalno pivo tamno jantarne boje, punog tijela, izrazite gorčine i pahuljasto bijele pjene koja ostavlja trag do dna čaše. Specifični deskriptori aroma uključuju crni papar, slatki korijen, curry i suptilni dodir citrusa u kombinaciji s mentom, ananasom i mentolom. Aroma grejpa i borovine u pozadini i aftertaste- u, rezultat su posebne tehnike dodavanja velikih količina hmelja Columbus i Polaris u već gotovo, dozrelo pivo, što je daje specifican okus pivama ovog stila…',
    vrsta: 'India Pale Ale',
    slika: 'assets/gelender-vasco-da-gama.png'
  },
  {
    naziv: 'Gelender RASTA',
    cijena: '2.5KM',
    opis: 'Nešto svijetlije zlatne boje, slabijeg tijela i sa nižim udjelom alkohola, pravo je ljetno osvježenje. Svilenkast okus na nepcu i prijatna gorčina naglašavaju arome tropskog voća, koje dolaze od hmeljeva Columbus i Simcoe. Vaša nova, ljetna romansa…',
    vrsta: 'American Pale Ale',
    slika: 'assets/gelender-pivo-rasta.png'
  },
   {
    naziv: 'Gelender NONCHALANT',
    cijena: '2.5KM',
    opis: 'Ovo je divan primjer klasičnog pale ale stila. Duboke jantarne boje i iznimno punog tijela, složenog karaktera. Mirisni buke i pikantni okus rezultat su velikodušnog korištenja najsvježijeg, tipičnog američkog hmelja Cascade. Floralne, spicy, piney i citrusne arome preovladavaju u mirisu i aftertaste- u.',
    vrsta: 'American Pale Ale',
    slika: 'assets/gelender-pivo-nonchalant.png'
  },
  {
    naziv: 'NOVA RUNDA C4',
    cijena: '5KM',
    opis: 'Ako smo APA-a zahmeljili, onda je bio red da IPA-u još više zahmeljimo, EKSPLOZIVNO čak! Upravo je eksploziv jedan od razloga zašto je C4 dobio ime. Drugo značenje C4 IPA-e je kombinacija hmeljeva koji su korišteni u ovom pivu - Cascade, Centennial, Chinook i Citra čine 4C kvadrofoniju u ovoj hmeljnoj bombi koja je vrlo brzo iz sezonske ponude prešla u našu stalnu ponudu uz bok APA-i. Ako želite osjetiti potpuni #DoživiHmelj ugođaj kroz dominaciju američkih hmeljeva, onda je C4 idealan izbor - zahmeljena tropska bomba!  ',
    vrsta: 'INDIA PALE ALE',
    slika: 'assets/c4.jpg'
  },
  {
    naziv: 'THROATTWISTER',
    cijena: '5.5KM',
    opis: 'Žestoki groove metal koji dečki sviraju se dobro spojio s koktelom hmeljeva u ovom pivu i tako je stvorena ThroaTTwisteR Double/Imperial IPA (često zvana Tetejac :) ). Pivo nije za podcjenjivanje i budite jako oprezni u konzumaciji. Ovo pivo često prate hashtagovi #LjudiPijteVode i #ISeeDeadPeople na socijalnim kanalima i to s razlogom - pivo ima 9% alkohola koji se uopće ne osjeti i može vas fino sašit ukoliko ne pazite. Preporučamo da paralelno uz ovo pivo pijete i vodu, vjerujte nam, nećete pogriješiti.',
    vrsta: 'Imperial IPA',
    slika: 'assets/throattwister.jpg'
  },
  {
    naziv: 'BOH: BEGINNING',
    cijena: '6KM',
    opis: 'Ovo prvo pivo iz serije Brotherhood Of Hops smo odlučili nazvati jednostavno - Beginning. Početak simbolizira i izradu našeg prvog piva u stilu New England IPA (NEIPA) koje do tada nismo nikad radili. Kako su Alen i Gregor ipak majstori New England stilova, odlučili smo se držati tog puta i s Beginningom. Od hmeljeva smo koristili fini hoppy trio - Simcoe, Citru i Mosaic, ali s tim da smo i po prvi put dodali Simcoe i Mosaic u CRYO obliku (Lupulin koncentrat u prahu). Beginning je NEIPA sa 6,7% alkohola, iznimno juicy, pitko i sa samo 15 IBU-a. Inače stil karakterizira iznimna mutnoća, ali nama je pivo ispalo malo bistrije i zbog toga je gornja uzrečica na početku opisa piva ;).  ',
    vrsta: 'NEW ENGLAND IPA',
    slika: 'assets/boh-beginning.png'
  },
    ];


  constructor() { }

  ngOnInit(): void {
  }

}
