import {Component, Host, h, Prop, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'ssp-button',
  styleUrl: 'ssp-button.scss',
  shadow: true,
})
export class SspButton {
  /**
   * The button type ('simple-button', 'button-with-icon', 'button-link' or 'button-link-with-icon')
   * */
  @Prop() type: string;

  /**
   * The button label
   * */
  @Prop() label: string;

  /**
   * The position of the icon
   * */
  @Prop() position: string;

  /**
   * The icon name
   * */
  @Prop() icon: string;

  /**
   * The event emitter on button click
   * */
  @Event() buttonEvent: EventEmitter<boolean>;

  private getClassByType(): string {
    return {
      'simple-button': 'simple-button',
      'button-with-icon': 'button-with-icon',
      'button-link': 'button-link',
      'button-link-with-icon': 'button-link-with-icon'
    }[this.type];
  }

  private getIconSource(): string {
    return {
      stencil: '/assets/img/logo.png'
    }[this.icon];
  }

  emitEvent(): void {
    this.buttonEvent.emit(true);
  }

  render() {
    return (
      <Host>
        <slot>
          <button class={ `${this.getClassByType()} ${this.position}` } onClick={ () => this.emitEvent() }>
            {this.icon && this.position === 'start' ? <img src={this.getIconSource()} alt={'logo'}/> : ''}
            {this.label}
            {this.icon && this.position === 'end' ? <img src={this.getIconSource()} alt={'logo'}/> : ''}
          </button>
        </slot>
      </Host>
    );
  }

}
