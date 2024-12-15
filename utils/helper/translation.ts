import { createTranslator } from 'next-intl';

export const getServerTranslations = async () => {
    // Load translations
    const messages = (await import(`../../messages/en.json`)).default;

    // Create a translator
    const t = createTranslator({ locale: 'en', messages });

    return t;
};
