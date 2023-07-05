import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const revealElements = document.querySelectorAll<HTMLElement>(".gs_reveal");
    revealElements.forEach(function (elem: HTMLElement) {
      hide(elem); // assure that the element is hidden when scrolled into view

      ScrollTrigger.create({
        trigger: elem,
        // markers: true,
        onEnter: function () { animateFrom(elem) },
        onEnterBack: function () { animateFrom(elem, -1) },
        onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });

    function animateFrom(elem: HTMLElement, direction: number = 1): void {
      let x = 0;
      let y = direction * 100;

      if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
      } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
      }

      elem.style.transform = `translate(${x}px, ${y}px)`;
      elem.style.opacity = "0";

      gsap.fromTo(elem, { x, y, autoAlpha: 0 }, {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
      });
    }

    function hide(elem: HTMLElement): void {
      gsap.set(elem, { autoAlpha: 0 });
    }
  }
}


