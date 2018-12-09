import { Component } from '@angular/core';
import * as $ from 'jquery'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  ngOnInit(){
    $(document).ready(function () {
      $('.slider').each(function () {              // Dla każdej grupy slajdów.
        var $this = $(this);                    // Pobranie bieżącej grupy slajdów.
        var $group = $this.find('.slide-group'); // Pobranie elementu o klasie slide-group (kontener).
        var $slides = $this.find('.slide');       // Obiekt jQuery przechowujący wszystkie slajdy.
        var buttonArray = [];                    // Utworzenie tablicy na przyciski nawigacyjne.
        var currentIndex = 0;                     // Numer indeksu bieżącego slajdu.
        var timeout;                              // Zmienna do przechowywania licznika czasu.

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        function move(newIndex) {          // Przejście ze starego do nowego slajdu.

          var animate;     // Deklaracja zmiennych.
          advance();                       // Podczas przejścia slajdów należy ponownie wywołać funkcję advance().
          if ($group.is(':animated') || currentIndex === newIndex) {
            return;             // Jeżeli wyświetlany jest bieżący slajd lub odtwarzana jest animacja slajdu, to nie podejmujemy żadnych działań.
          }

          //      buttonArray[currentIndex].removeClass('active'); // Usunięcie klasy z elementu.
          //     buttonArray[newIndex].addClass('active');        // Dodanie klasy do nowego elementu.
          animate = '0%';                                      // Animacja bieżącej grupy.
          $slides.eq(newIndex).fadeIn(400);                     // pojawianie

          $group.animate({left: animate}, function () {    // Animacja slajdu
            $slides.eq(currentIndex).fadeOut(500);       // zanikanie

            currentIndex = newIndex;               // Ustawienie zmiennej currentIndex wartości nowego obrazu.
          });
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        function advance() {                     // Ustawienie czasu wyświetlania slajdu.
          clearTimeout(timeout);                 // Wyzerowanie licznika czasu w zmiennej timeout.
          timeout = setTimeout(function () {      // Ustawienie nowego licznika.
            if (currentIndex < ($slides.length - 1)) { // Jeżeli to nie jest ostatni slajd.
              move(currentIndex + 1);            // Przejście do następnego slajdu.
            } else {                             // W przeciwnym razie.
              move(0);                           // Przejście do pierwszego slajdu.
            }
          }, 3500);                              // Czas oczekiwania wyrażony w milisekundach
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        $.each($slides, function (index) {
          // Utworzenie elementu <button> dla przycisku.
          //  var $button = $('<button type="button"    >&bull;</button>');
//
          // $button.addClass('slide-btn');
          // style="background: none" style="color: #000000" style="line-height: 0.5em" style="font-size: 200%" style="border: none"
          // if (index === currentIndex) {    // Jeżeli indeks wskazuje na element bieżący.
          //   $button. addClass('active');    // Dodanie klasy active.
          //
          //
          // }
          // // $button.on('click', function () { // Utworzenie procedury obsługi zdarzeń dla przycisku.
          //   move(index);                   // Wywołanie funkcji move().
          // }).appendTo('.slide-buttons');   // Dodanie do elementu zawierającego przyciski.
          //     buttonArray.push($button);       // Dodanie przycisków do tablicy.
        });

        advance();                          // Skrypt jest już skonfigurowany, można wywołać funkcję advance().

      });

    });
  }



}
