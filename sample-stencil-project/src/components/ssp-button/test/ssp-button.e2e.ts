import { newE2EPage } from '@stencil/core/testing';

describe('ssp-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ssp-button></ssp-button>');

    const element = await page.find('ssp-button');
    expect(element).toHaveClass('hydrated');
  });
});
