import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[widget]'
})


export class WidgetDirective implements OnInit {
    $el: any;

    constructor(el: ElementRef) {
        this.$el = jQuery(el.nativeElement);
        jQuery.fn.widgster.Constructor.DEFAULTS.bodySelector = '.card-body';

        jQuery(document).on('close.widgster', (e) => {
            let $colWrap = jQuery(e.target).closest(' [class*="col-"]:not(.widget-container)');
            if (!$colWrap.find('.widget').not(e.target).length) {
                $colWrap.remove();
            }
        });

        jQuery(document).on("fullscreened.widgster", (e) => {
            jQuery(e.target).find('div.card-body').addClass('scrolling');
        }).on("restored.widgster", (e) => {
            jQuery(e.target).find('div.card-body').removeClass('scrolling');
        });
    }

    ngOnInit(): void {
        this.$el.widgster();
    }
}
