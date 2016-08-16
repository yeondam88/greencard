import {Component, HostListener, Directive} from '@angular/core';

@Directive({
	selector: '[stopPropagation]',
})

export class StopPropagationDirective {
    @HostListener('click', ['$event'])
	stop(e: Event) {
		e.stopPropagation();
	}
}
