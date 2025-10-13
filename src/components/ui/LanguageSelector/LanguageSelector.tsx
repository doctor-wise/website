'use client';

import React from 'react';
import { createPortal } from 'react-dom';

export interface LanguageSelectorProps {
  className?: string;
}

type Language = {
  code: string;
  label: string;
  flag: string;
};

const availableLanguages: Language[] = [
  { code: 'pt', label: 'Português', flag: '/Assets/Misc-assets/Country-icons/BR.svg' },
  { code: 'en', label: 'English', flag: '/Assets/Misc-assets/Country-icons/US.svg' },
];

export function LanguageSelector({
  className = '',
}: LanguageSelectorProps): React.ReactElement {
  const [selectedLanguage, setSelectedLanguage] = React.useState<Language>(availableLanguages[0]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [coords, setCoords] = React.useState<{ top: number; left: number } | null>(null);

  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const dropdownRef = React.useRef<HTMLDivElement | null>(null);
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/pt';

  React.useEffect(() => {
    const parts = pathname.split('/').filter(Boolean);
    const code = parts[0] === 'en' ? 'en' : 'pt';
    const found = availableLanguages.find((l) => l.code === code) ?? availableLanguages[0];
    setSelectedLanguage(found);
  }, [pathname]);

  const displayedLanguages = availableLanguages.filter((lang) => lang.code !== selectedLanguage.code);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const updatePosition = React.useCallback(() => {
    if (!buttonRef.current || !dropdownRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const dropdownRect = dropdownRef.current.getBoundingClientRect();
    const margin = 8; // spacing-md

    const top = buttonRect.bottom + margin;
    const left = buttonRect.left + (buttonRect.width / 2) - (dropdownRect.width / 2);

    setCoords({
      top,
      left,
    });
  }, []);

  React.useEffect(() => {
    if (!isOpen) return;
    updatePosition();
    const handlers = [
      ['scroll', updatePosition],
      ['resize', updatePosition],
    ] as const;
    handlers.forEach(([evt, fn]) => window.addEventListener(evt, fn));
    return () => handlers.forEach(([evt, fn]) => window.removeEventListener(evt, fn));
  }, [isOpen, updatePosition]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // Navigate to same path under selected locale prefix
    try {
      const parts = pathname.split('/').filter(Boolean);
      if (parts.length > 0 && (parts[0] === 'pt' || parts[0] === 'en')) parts.shift();
      const basePath = '/' + parts.join('/');
      const target = `/${language.code}${basePath}`;
      window.location.assign(target);
    } finally {
      buttonRef.current?.focus();
    }
  };

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        id="language-selector"
        className={`inline-flex items-center gap-spacing-xs rounded-full border border-border-primary bg-bg-primary px-spacing-lg py-spacing-md text-text-secondary hover:text-text-secondary-hover transition-colors ${className}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={handleButtonClick}
        data-name="Language selector button"
        data-node-id="13337:6055"
      >
        <div className="relative shrink-0 size-[20px] overflow-clip">
          <img
            src={selectedLanguage.flag}
            alt={selectedLanguage.code}
            className="block size-full"
          />
        </div>

        <span className="text-text-sm font-semibold">
          {selectedLanguage.label}
        </span>
      </button>

      {mounted && isOpen && createPortal(
        <div
          ref={dropdownRef}
          role="listbox"
          aria-label="Select language"
          style={{
            position: 'fixed',
            top: coords?.top ?? -9999,
            left: coords?.left ?? -9999,
            zIndex: 9999,
          }}
          className="bg-white border border-[rgba(0,0,0,0.08)] rounded-2xl shadow-[0px_12px_32px_rgba(10,13,18,0.08),0px_2px_6px_rgba(10,13,18,0.05),0px_4px_8px_rgba(10,13,18,0.06)] transition-opacity duration-150"
          data-name="Language dropdown menu"
          data-node-id="13337:5824"
        >
          <div className="flex flex-col items-start overflow-clip rounded-[inherit] w-full">
            <div className="flex flex-col items-start px-none py-spacing-xs w-full" data-name="Menu items">
              {displayedLanguages.map((language) => {
                return (
                  <div
                    key={language.code}
                    className="flex items-center px-spacing-sm py-[1px] rounded-full w-full"
                    data-name="Dropdown list item wrapper"
                  >
                    <button
                      type="button"
                      role="option"
                      aria-selected={false}
                      onClick={() => handleLanguageSelect(language)}
                      className="flex-1 flex gap-spacing-lg items-center overflow-clip px-[10px] py-spacing-md rounded-full transition-colors hover:bg-bg-primary-hover"
                      data-name="Dropdown list item content"
                      data-node-id="13337:5827"
                    >
                      <div className="flex gap-spacing-md items-center flex-1" data-name="Icon and text">
                        <div className="relative shrink-0 size-[16px] overflow-clip">
                          <img
                            src={language.flag}
                            alt={language.code}
                            className="block size-full"
                          />
                        </div>
                        <p className="flex-1 font-['Inter:Semibold',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px]" data-node-id="I13337:5827;3281:382848">
                          {language.label}
                        </p>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

