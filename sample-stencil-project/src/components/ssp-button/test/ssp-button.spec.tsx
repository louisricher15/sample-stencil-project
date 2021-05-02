import { newSpecPage } from '@stencil/core/testing';
import { SspButton } from '../ssp-button';

describe('ssp-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SspButton],
      html: `<ssp-button></ssp-button>`,
    });
    expect(page.root).toEqualHtml(`
      <ssp-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ssp-button>
    `);
  });
});
