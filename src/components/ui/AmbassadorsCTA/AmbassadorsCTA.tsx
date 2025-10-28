'use client';

import React from 'react';
import { Button } from '../Button';

export function AmbassadorsCTA() {
  return (
    <section id="cta-section" className="bg-bg-primary w-full py-spacing-9xl overflow-hidden">
      <div className="max-w-3xl mx-auto px-spacing-4xl">
        <div className="bg-bg-secondary rounded-2xl p-spacing-7xl flex flex-col gap-spacing-4xl items-center">
          {/* Heading and Text */}
          <div className="flex flex-col gap-spacing-2xl items-center text-center max-w-xl w-full">
            <h2 className="text-display-md font-semibold tracking-[-0.02em] text-text-primary">
              Torne-se um embaixador
            </h2>
            <p className="text-text-xl text-text-tertiary">
              Clique no botão abaixo e cadastre-se!
            </p>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            hierarchy="primary" 
            icon="arrow_right" 
            iconPosition="right"
          >
            Quero ser embaixador
          </Button>
        </div>
      </div>
    </section>
  );
}

