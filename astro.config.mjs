// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeExternalLinks from 'rehype-external-links';

// Логотипы
import logoLight from './src/assets/logo.svg?url';
import logoDark from './src/assets/logo-dark.svg?url';

export default defineConfig({
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    ],
  },
  integrations: [
    starlight({
      title: 'Каталог 2026',
      logo: { light: logoLight, dark: logoDark },
      customCss: ['./src/styles/global.css'],
      head: [
        { tag: 'script', attrs: { type: 'module', src: '/js/lightbox.js' } },
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
      ],
      sidebar: [
        { label: 'Миссия компании', slug: 'missiya-kompanii' },
        { label: 'О компании', slug: 'o-kompanii' },
        { label: 'История', slug: 'istoriya-kompanii' },
        { label: 'Почему мы', slug: 'pochemu-my' },
        {
          label: 'Каталог продукции',
          items: [
            { label: 'Конвекторы ВК', slug: 'katalog/vk' },
            { label: 'Конвекторы ВКВ 24', slug: 'katalog/vkv24' },
            { label: 'Напольные конвекторы ВКН', slug: 'katalog/vkn' },
            { label: 'KRV Mini', slug: 'katalog/krv-mini' },
          ],
        },
        {
          label: 'Специальные исполнения',
          items: [
            { label: 'KRV Plus IP54', slug: 'spetsialnye-ispolneniya/krv-plus-ip54' },
          ],
        },
        {
          label: 'Комплектующие',
          items: [
            { label: 'Аксессуары', slug: 'komplektuyushchie/aksessuary' },
          ],
        },
        {
          label: 'Инструкции',
          items: [
            { label: 'Монтаж', slug: 'instrukcii/montazh' },
          ],
        },
        {
          label: 'Сертификаты',
          items: [
            { label: 'Декларации соответствия', slug: 'sertifikaty/deklaratsii' },
          ],
        },
      ],
    }),
  ],
});
