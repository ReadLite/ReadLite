import React from 'react';
import { FontOption, fontOptions } from '../../../config/ui';
import { LanguageCode } from '../../../utils/language';

interface FontFamilySectionProps {
  sectionClassName: string;
  titleClassName: string;
  colors: {
    bg: string;
    text: string;
    border: string;
    highlight: string;
    buttonBg: string;
    buttonText: string;
  };
  settings: any;
  t: (key: string) => string;
  uiLanguage: LanguageCode;
  detectedLanguage: LanguageCode | null;
  updateSettings: (settings: any) => void;
}

/**
 * Font family selection section in the settings panel
 */
const FontFamilySection: React.FC<FontFamilySectionProps> = ({
  sectionClassName,
  titleClassName,
  colors,
  settings,
  t,
  uiLanguage,
  detectedLanguage,
  updateSettings
}) => {
  // Font family selection handler
  const changeFontFamily = (fontFamily: string) => {
    updateSettings({ fontFamily });
  };

  // Get button class based on active state
  const getButtonClass = (isActive: boolean) => {
    return `border rounded cursor-pointer p-1.5 transition-all text-xs
            ${isActive ? 
              `border-[${colors.highlight}] bg-[${settings.theme === "dark" ? "rgba(76,139,245,0.1)" : "rgba(0,119,255,0.05)"}] text-[${colors.highlight}]` : 
              `border-[${colors.border}] bg-transparent text-[${colors.text}]`}`;
  };

  // Split fonts into two columns
  const midPoint = Math.ceil(fontOptions.length / 2);
  const firstColumnFonts = fontOptions.slice(0, midPoint);
  const secondColumnFonts = fontOptions.slice(midPoint);

  // Render a single font option
  const renderFontOption = (font: FontOption) => {
    const isActive = settings.fontFamily === font.value;
    const displayName = uiLanguage === 'zh' ? font.label.zh : font.label.en;
    const isRecommended = detectedLanguage && 
      font.compatibleLanguages && 
      font.compatibleLanguages.includes(detectedLanguage);
    
    return (
      <div 
        key={font.value}
        onClick={() => changeFontFamily(font.value)}
        className={`mb-1 ${getButtonClass(isActive)} flex items-center justify-between`}
      >
        <div className="flex items-center overflow-hidden">
          {/* Font preview */}
          <span 
            className="text-sm mr-2 min-w-[24px] flex-shrink-0"
            style={{ fontFamily: font.value.split(',')[0] }}
          >
            Aa
          </span>
          
          {/* Font name with star for recommended */}
          <div className="flex items-center overflow-hidden">
            <span className={`${isActive ? 'font-medium' : ''} truncate`}>
              {displayName}
            </span>
            
            {/* Star icon for recommended fonts */}
            {isRecommended && (
              <span 
                className="ml-1 text-xs flex-shrink-0"
                style={{ color: isActive ? colors.highlight : 'rgba(255, 180, 0, 0.8)' }}
              >
                ★
              </span>
            )}
          </div>
        </div>
        
        {/* Checkmark for active option */}
        {isActive && (
          <span className="text-xs flex-shrink-0" style={{ color: colors.highlight }}>✓</span>
        )}
      </div>
    );
  };

  return (
    <section className={sectionClassName}>
      <h3 className={titleClassName}>{t('fontFamily')}</h3>
      
      {/* Font section description with explanation */}
      {detectedLanguage && (
        <div className="text-[10px] mb-2 opacity-70">
          {uiLanguage === 'zh' ? 
            `★ 表示适合${getLanguageDisplayName(detectedLanguage, uiLanguage)}内容的字体` : 
            `★ indicates fonts optimized for ${getLanguageDisplayName(detectedLanguage, uiLanguage)} content`}
        </div>
      )}
      
      <div className="grid grid-cols-2 gap-x-1.5 mb-1">
        {/* First column */}
        <div className="space-y-1">
          {firstColumnFonts.map(renderFontOption)}
        </div>
        
        {/* Second column */}
        <div className="space-y-1">
          {secondColumnFonts.map(renderFontOption)}
        </div>
      </div>
    </section>
  );
};

// Helper function to get language display name (simplified version)
const getLanguageDisplayName = (langCode: LanguageCode, uiLanguage: LanguageCode): string => {
  if (langCode === 'zh') {
    return uiLanguage === 'zh' ? '中文' : 'Chinese';
  }
  if (langCode === 'en') {
    return uiLanguage === 'zh' ? '英文' : 'English';
  }
  return langCode;
};

export default FontFamilySection; 