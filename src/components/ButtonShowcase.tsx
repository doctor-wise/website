'use client';

import React from 'react';
import { Button } from '@/components/ui/Button/Button';

export const ButtonShowcase = () => {
  return (
    <>
      {/* Primary Buttons */}
      <section className="bg-bg-primary rounded-lg p-8">
        <h2 className="text-display-sm font-semibold text-text-primary mb-6">
          Primary Buttons
        </h2>
        
        {/* Button Sizes */}
        <div className="mb-8">
          <h3 className="text-text-lg font-medium text-text-secondary mb-4">Sizes</h3>
          <div className="flex flex-wrap items-end gap-6">
            <div className="text-center">
              <Button size="sm" hierarchy="primary" className="mb-2">Small</Button>
              <div className="text-text-xs text-text-quaternary font-mono">sm (36px)</div>
            </div>
            <div className="text-center">
              <Button size="md" hierarchy="primary" className="mb-2">Medium</Button>
              <div className="text-text-xs text-text-quaternary font-mono">md (40px)</div>
            </div>
            <div className="text-center">
              <Button size="lg" hierarchy="primary" className="mb-2">Large</Button>
              <div className="text-text-xs text-text-quaternary font-mono">lg (44px)</div>
            </div>
            <div className="text-center">
              <Button size="xl" hierarchy="primary" className="mb-2">Extra Large</Button>
              <div className="text-text-xs text-text-quaternary font-mono">xl (48px)</div>
            </div>
          </div>
        </div>

        {/* Button States */}
        <div className="mb-8">
          <h3 className="text-text-lg font-medium text-text-secondary mb-4">States</h3>
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-center">
              <Button hierarchy="primary" className="mb-2">Default</Button>
              <div className="text-text-xs text-text-quaternary">Default state</div>
            </div>
            <div className="text-center">
              <Button hierarchy="primary" loading className="mb-2">Loading</Button>
              <div className="text-text-xs text-text-quaternary">Loading state</div>
            </div>
            <div className="text-center">
              <Button hierarchy="primary" disabled className="mb-2">Disabled</Button>
              <div className="text-text-xs text-text-quaternary">Disabled state</div>
            </div>
          </div>
        </div>

        {/* Buttons with Icons */}
        <div>
          <h3 className="text-text-lg font-medium text-text-secondary mb-4">With Icons</h3>
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-center">
              <Button hierarchy="primary" icon="plus" iconPosition="left" className="mb-2">
                Add Item
              </Button>
              <div className="text-text-xs text-text-quaternary">Icon left</div>
            </div>
            <div className="text-center">
              <Button hierarchy="primary" icon="search_md" iconPosition="right" className="mb-2">
                Search
              </Button>
              <div className="text-text-xs text-text-quaternary">Icon right</div>
            </div>
            <div className="text-center">
              <Button 
                hierarchy="primary" 
                icon="settings_01" 
                iconOnly 
                className="mb-2"
                aria-label="Settings"
              />
              <div className="text-text-xs text-text-quaternary">Icon only</div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Buttons */}
      <section className="bg-bg-primary rounded-lg p-8">
        <h2 className="text-display-sm font-semibold text-text-primary mb-6">
          Secondary Buttons
        </h2>
        
        {/* Button Sizes */}
        <div className="mb-8">
          <h3 className="text-text-lg font-medium text-text-secondary mb-4">Sizes</h3>
          <div className="flex flex-wrap items-end gap-6">
            <div className="text-center">
              <Button size="sm" hierarchy="secondary" className="mb-2">Small</Button>
              <div className="text-text-xs text-text-quaternary font-mono">sm (36px)</div>
            </div>
            <div className="text-center">
              <Button size="md" hierarchy="secondary" className="mb-2">Medium</Button>
              <div className="text-text-xs text-text-quaternary font-mono">md (40px)</div>
            </div>
            <div className="text-center">
              <Button size="lg" hierarchy="secondary" className="mb-2">Large</Button>
              <div className="text-text-xs text-text-quaternary font-mono">lg (44px)</div>
            </div>
            <div className="text-center">
              <Button size="xl" hierarchy="secondary" className="mb-2">Extra Large</Button>
              <div className="text-text-xs text-text-quaternary font-mono">xl (48px)</div>
            </div>
          </div>
        </div>

        {/* Button States */}
        <div className="mb-8">
          <h3 className="text-text-lg font-medium text-text-secondary mb-4">States</h3>
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-center">
              <Button hierarchy="secondary" className="mb-2">Default</Button>
              <div className="text-text-xs text-text-quaternary">Default state</div>
            </div>
            <div className="text-center">
              <Button hierarchy="secondary" loading className="mb-2">Loading</Button>
              <div className="text-text-xs text-text-quaternary">Loading state</div>
            </div>
            <div className="text-center">
              <Button hierarchy="secondary" disabled className="mb-2">Disabled</Button>
              <div className="text-text-xs text-text-quaternary">Disabled state</div>
            </div>
          </div>
        </div>

        {/* Buttons with Icons */}
        <div>
          <h3 className="text-text-lg font-medium text-text-secondary mb-4">With Icons</h3>
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-center">
              <Button hierarchy="secondary" icon="plus" iconPosition="left" className="mb-2">
                Add Item
              </Button>
              <div className="text-text-xs text-text-quaternary">Icon left</div>
            </div>
            <div className="text-center">
              <Button hierarchy="secondary" icon="search_md" iconPosition="right" className="mb-2">
                Search
              </Button>
              <div className="text-text-xs text-text-quaternary">Icon right</div>
            </div>
            <div className="text-center">
              <Button 
                hierarchy="secondary" 
                icon="settings_01" 
                iconOnly 
                className="mb-2"
                aria-label="Settings"
              />
              <div className="text-text-xs text-text-quaternary">Icon only</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tertiary Buttons */}
      <section className="bg-bg-primary rounded-lg p-8">
        <h2 className="text-display-sm font-semibold text-text-primary mb-6">
          Tertiary Buttons
        </h2>
        
        {/* Button Sizes */}
        <div className="mb-8">
          <h3 className="text-text-lg font-medium text-text-secondary mb-4">Sizes</h3>
          <div className="flex flex-wrap items-end gap-6">
            <div className="text-center">
              <Button size="sm" hierarchy="tertiary" className="mb-2">Small</Button>
              <div className="text-text-xs text-text-quaternary font-mono">sm (36px)</div>
            </div>
            <div className="text-center">
              <Button size="md" hierarchy="tertiary" className="mb-2">Medium</Button>
              <div className="text-text-xs text-text-quaternary font-mono">md (40px)</div>
            </div>
            <div className="text-center">
              <Button size="lg" hierarchy="tertiary" className="mb-2">Large</Button>
              <div className="text-text-xs text-text-quaternary font-mono">lg (44px)</div>
            </div>
            <div className="text-center">
              <Button size="xl" hierarchy="tertiary" className="mb-2">Extra Large</Button>
              <div className="text-text-xs text-text-quaternary font-mono">xl (48px)</div>
            </div>
          </div>
        </div>

        {/* Button States */}
        <div className="mb-8">
          <h3 className="text-text-lg font-medium text-text-secondary mb-4">States</h3>
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-center">
              <Button hierarchy="tertiary" className="mb-2">Default</Button>
              <div className="text-text-xs text-text-quaternary">Default state</div>
            </div>
            <div className="text-center">
              <Button hierarchy="tertiary" loading className="mb-2">Loading</Button>
              <div className="text-text-xs text-text-quaternary">Loading state</div>
            </div>
            <div className="text-center">
              <Button hierarchy="tertiary" disabled className="mb-2">Disabled</Button>
              <div className="text-text-xs text-text-quaternary">Disabled state</div>
            </div>
          </div>
        </div>

        {/* Button Icons */}
        <div>
          <h3 className="text-text-lg font-medium text-text-secondary mb-4">With Icons</h3>
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-center">
              <Button hierarchy="tertiary" icon="plus" iconPosition="left" className="mb-2">
                Add Item
              </Button>
              <div className="text-text-xs text-text-quaternary">Icon left</div>
            </div>
            <div className="text-center">
              <Button hierarchy="tertiary" icon="search_md" iconPosition="right" className="mb-2">
                Search
              </Button>
              <div className="text-text-xs text-text-quaternary">Icon right</div>
            </div>
            <div className="text-center">
              <Button 
                hierarchy="tertiary" 
                icon="settings_01" 
                iconOnly 
                className="mb-2"
                aria-label="Settings"
              />
              <div className="text-text-xs text-text-quaternary">Icon only</div>
            </div>
          </div>
        </div>
      </section>

      {/* Link Color Buttons */}
      <section className="bg-bg-primary rounded-lg p-8">
        <h2 className="text-display-sm font-semibold text-text-primary mb-6">
          Link Color Buttons
        </h2>
        
        {/* Button Sizes */}
        <div className="mb-8">
          <h3 className="text-text-lg font-medium text-text-secondary mb-4">Sizes</h3>
          <div className="flex flex-wrap items-end gap-6">
            <div className="text-center">
              <Button size="sm" hierarchy="link-color" className="mb-2">Small</Button>
              <div className="text-text-xs text-text-quaternary font-mono">sm (14px)</div>
            </div>
            <div className="text-center">
              <Button size="md" hierarchy="link-color" className="mb-2">Medium</Button>
              <div className="text-text-xs text-text-quaternary font-mono">md (14px)</div>
            </div>
            <div className="text-center">
              <Button size="lg" hierarchy="link-color" className="mb-2">Large</Button>
              <div className="text-text-xs text-text-quaternary font-mono">lg (16px)</div>
            </div>
            <div className="text-center">
              <Button size="xl" hierarchy="link-color" className="mb-2">Extra Large</Button>
              <div className="text-text-xs text-text-quaternary font-mono">xl (18px)</div>
            </div>
          </div>
        </div>

        {/* Button States */}
        <div className="mb-8">
          <h3 className="text-text-lg font-medium text-text-secondary mb-4">States</h3>
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-center">
              <Button hierarchy="link-color" className="mb-2">Default</Button>
              <div className="text-text-xs text-text-quaternary">Default state</div>
            </div>
            <div className="text-center">
              <Button hierarchy="link-color" loading className="mb-2">Loading</Button>
              <div className="text-text-xs text-text-quaternary">Loading state</div>
            </div>
            <div className="text-center">
              <Button hierarchy="link-color" disabled className="mb-2">Disabled</Button>
              <div className="text-text-xs text-text-quaternary">Disabled state</div>
            </div>
          </div>
        </div>

        {/* Button Icons */}
        <div>
          <h3 className="text-text-lg font-medium text-text-secondary mb-4">With Icons</h3>
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-center">
              <Button hierarchy="link-color" icon="plus" iconPosition="left" className="mb-2">
                Add Item
              </Button>
              <div className="text-text-xs text-text-quaternary">Icon left</div>
            </div>
            <div className="text-center">
              <Button hierarchy="link-color" icon="search_md" iconPosition="right" className="mb-2">
                Search
              </Button>
              <div className="text-text-xs text-text-quaternary">Icon right</div>
            </div>
            <div className="text-center">
              <Button 
                hierarchy="link-color" 
                icon="settings_01" 
                iconOnly 
                className="mb-2"
                aria-label="Settings"
              />
              <div className="text-text-xs text-text-quaternary">Icon only</div>
            </div>
          </div>
        </div>
      </section>

      {/* Link Gray Buttons */}
      <section className="bg-bg-primary rounded-lg p-8">
        <h2 className="text-display-sm font-semibold text-text-primary mb-6">
          Link Gray Buttons
        </h2>
        
        {/* Button Sizes */}
        <div className="mb-8">
          <h3 className="text-text-lg font-medium text-text-secondary mb-4">Sizes</h3>
          <div className="flex flex-wrap items-end gap-6">
            <div className="text-center">
              <Button size="sm" hierarchy="link-gray" className="mb-2">Small</Button>
              <div className="text-text-xs text-text-quaternary font-mono">sm (14px)</div>
            </div>
            <div className="text-center">
              <Button size="md" hierarchy="link-gray" className="mb-2">Medium</Button>
              <div className="text-text-xs text-text-quaternary font-mono">md (14px)</div>
            </div>
            <div className="text-center">
              <Button size="lg" hierarchy="link-gray" className="mb-2">Large</Button>
              <div className="text-text-xs text-text-quaternary font-mono">lg (16px)</div>
            </div>
            <div className="text-center">
              <Button size="xl" hierarchy="link-gray" className="mb-2">Extra Large</Button>
              <div className="text-text-xs text-text-quaternary font-mono">xl (18px)</div>
            </div>
          </div>
        </div>

        {/* Button States */}
        <div className="mb-8">
          <h3 className="text-text-lg font-medium text-text-secondary mb-4">States</h3>
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-center">
              <Button hierarchy="link-gray" className="mb-2">Default</Button>
              <div className="text-text-xs text-text-quaternary">Default state</div>
            </div>
            <div className="text-center">
              <Button hierarchy="link-gray" loading className="mb-2">Loading</Button>
              <div className="text-text-xs text-text-quaternary">Loading state</div>
            </div>
            <div className="text-center">
              <Button hierarchy="link-gray" disabled className="mb-2">Disabled</Button>
              <div className="text-text-xs text-text-quaternary">Disabled state</div>
            </div>
          </div>
        </div>

        {/* Button Icons */}
        <div>
          <h3 className="text-text-lg font-medium text-text-secondary mb-4">With Icons</h3>
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-center">
              <Button hierarchy="link-gray" icon="plus" iconPosition="left" className="mb-2">
                Add Item
              </Button>
              <div className="text-text-xs text-text-quaternary">Icon left</div>
            </div>
            <div className="text-center">
              <Button hierarchy="link-gray" icon="search_md" iconPosition="right" className="mb-2">
                Search
              </Button>
              <div className="text-text-xs text-text-quaternary">Icon right</div>
            </div>
            <div className="text-center">
              <Button 
                hierarchy="link-gray" 
                icon="settings_01" 
                iconOnly 
                className="mb-2"
                aria-label="Settings"
              />
              <div className="text-text-xs text-text-quaternary">Icon only</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};