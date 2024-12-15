import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from '@nextui-org/navbar';
import { link as linkStyles } from '@nextui-org/theme';
import NextLink from 'next/link';
import clsx from 'clsx';

import LogoutButton from '../reusable/LogoutButton';

import { siteConfig } from '@/config/site';
import { getServerTranslations } from '@/utils/helper/translation';

export const Navbar = async () => {
  const t = await getServerTranslations();

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <div className="flex justify-start items-center gap-1">
            <p className="font-bold text-inherit">{t('brand')}</p>
          </div>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium',
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <LogoutButton />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
