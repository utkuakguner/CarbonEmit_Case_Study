import { createTranslator } from 'next-intl';

export const getServerTranslations = async () => {
    const messages = (await import(`../../messages/en.json`)).default;

    const t = createTranslator({ locale: 'en', messages });

    return t;
};
