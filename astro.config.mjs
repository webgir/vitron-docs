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
            { label: 'Конвекторы ВК ЭКО', slug: 'katalog/vk-eko' },
            { label: 'Конвекторы ВКВ 24', slug: 'katalog/vkv24' },
            { label: 'Напольные конвекторы ВКН', slug: 'katalog/vkn' },
            { label: "Конвекторы напольные с принудительной конвекцией 24В (ВКВН)", slug: "katalog/vkvn" },
            { label: "Конвекторы напольные линейки ЭКО (ВКН ЭКО)", slug: "katalog/vkn-eco" },
            { label: "Конвекторы напольные электрические (ВКЭН)", slug: "katalog/vken" },
            { label: "Конвекторы электрические, встраиваемые в пол, с естественной конвекцией (ВКЭ)", slug: "katalog/vke" },
            { label: "Конвекторы электрические, встраиваемые в пол, с принудительной конвекцией (ВКВЭ)", slug: "katalog/vkve" },
            { label: "Конвекторы, встраиваемые в пол, с принудительной конвекцией и электрическим ТЭНом (ВКВ+ВКЭ)", slug: "katalog/vkv-vke" },
            { label: "Конвекторы настенные горизонтальные (ВКС)", slug: "katalog/vks" },
            { label: "Конвекторы настенные горизонтальные линейки ЭКО (ВКС ЭКО)", slug: "katalog/vks-eco" },
            { label: "Конвекторы настенные вертикальные (ВКС)", slug: "katalog/vks-vert" },
            { label: "Конвекторы настенные электрические (ВКВЭС)", slug: "katalog/vkves" },
            { label: "Конвектор скамья отопительная (ВКСК)", slug: "katalog/vksk" },
            { label: "Конвекторы, встраиваемые в подоконник (ВКВП)", slug: "katalog/vkvp" },
            { label: "Конвекторы, встраиваемые в мебель (ВКВМ, ВКВЭМ)", slug: "katalog/vkvm" },
            { label: "Регулирование тепловой мощности конвекторов", slug: "katalog/regulirovanie" }
          ],
        },
        {
          label: 'Специальные исполнения',
          items: [
            { label: 'Специальные исполнения', slug: 'spetsialnye-ispolneniya/spec' },
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
