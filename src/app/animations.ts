import { animate, animateChild, group, query as q, style, transition, trigger } from "@angular/animations";

export function query(s: any, a: any) {
    return q(s, a, {optional: true});
}

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('LandingPage => MainPage', [
        query(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('800ms linear', style({ transform: 'translateY(-150%)' }))
        ]),        
        query(':enter', [
            style({ 'display': 'none', 'opacity': '0'})
        ]),
    ]),
    transition('* => *', [
        query(':leave', [
            style({ opacity: 1 }),
            animate('100ms linear', style({ opacity: 0 }))
        ]),        
        query(':enter', [
            style({ 'display': 'none', 'opacity': '0'}),
            animate('100ms linear', style({ opacity: 1 }))
        ]),
    ])    
  ]);