import { Component, Input } from '@angular/core';

export type allSvg = 'link' | 'arrow-back' | 'users' | 'check' | 'sharp' | 'star' | 'clock' | 'notification' | 'plus' |  'search' |''

@Component({
  selector: 'shared-svg',
  templateUrl: './svg.component.html',
  styleUrl: './svg.component.scss'
})
export class SvgComponent {
  @Input() icon: allSvg = ''
  @Input() width = 24
  @Input() height = 24
}
