// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

// Логотипы
import logoLight from './src/assets/vtrn.png?url';
import logoDark from './src/assets/vtrn.png?url';

export default defineConfig({
  site: 'https://vitron.ru',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeKatex,
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    ],
  },
  integrations: [
    starlight({
      title: 'Каталог Vitron 2026',
      description: 'Полный каталог конвекторов Vitron. Российское производство отопительного оборудования.',
      logo: { light: logoLight, dark: logoDark },
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Русский',
          lang: 'ru',
        },
      },
      customCss: ['./src/styles/global.css'],
      head: [
        { tag: 'script', attrs: { type: 'module', src: '/js/lightbox.js' } },
        { tag: 'script', attrs: { src: '/js/catalog-styles.js' } },
        { tag: 'script', attrs: { src: '/js/timeline-nav.js' } },
        { tag: 'script', attrs: { src: '/js/metrika.js' } },
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Vitron',
            url: 'https://vitron.ru',
            logo: 'https://vitron.ru/logo.png',
            description: 'Российский производитель внутрипольных, напольных и настенных конвекторов',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'RU',
              addressLocality: 'Москва'
            },
            foundingDate: '2002',
            sameAs: [
              'https://vitron.ru/'
            ]
          })
        },
        {
          tag: 'meta',
          attrs: { name: 'keywords', content: 'конвекторы, внутрипольные конвекторы, напольные конвекторы, настенные конвекторы, отопление, vitron, витрон, конвекторы для дома' }
        },
        {
          tag: 'meta',
          attrs: { property: 'og:type', content: 'website' }
        },
        {
          tag: 'meta',
          attrs: { property: 'og:site_name', content: 'Vitron' }
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:card', content: 'summary_large_image' }
        }
      ],
      social: [
        { icon: 'external', label: 'Сайт Vitron', href: 'https://vitron.ru/' },
      ],
      sidebar: [
        { label: 'Миссия', slug: 'missiya-kompanii' },
        { label: 'О нас', slug: 'o-kompanii' },
        { label: 'История', slug: 'istoriya-kompanii' },
        { label: 'Почему мы', slug: 'pochemu-my' },
        {
          label: 'Каталог',
          items: [
            {
              label: 'Внутрипольные',
              collapsed: false,
              items: [
                { label: 'ВК - базовые', slug: 'katalog/vk' },
                { label: 'ВК ЭКО - эконом', slug: 'katalog/vk-eko' },
                { label: 'ВКВ 24 - 24 В', slug: 'katalog/vkv24' },
                { label: 'ВКЭ - в пол (ест.)', slug: 'katalog/vke' },
                { label: 'ВКВЭ - в пол (вент.)', slug: 'katalog/vkve' },
                { label: 'ВКВ+ВКЭ - комбинир.', slug: 'katalog/vkv-vke' },
              ],
            },
            {
              label: 'Напольные',
              collapsed: false,
              items: [
                { label: 'ВКН - напольные', slug: 'katalog/vkn' },
                { label: 'ВКВН 24 - напольные', slug: 'katalog/vkvn' },
                { label: 'ВКН ЭКО - эконом', slug: 'katalog/vkn-eco' },
                { label: 'ВКЭН - электро', slug: 'katalog/vken' },
              ],
            },
            {
              label: 'Настенные',
              collapsed: false,
              items: [
                { label: 'ВКС - настенные', slug: 'katalog/vks' },
                { label: 'ВКС ЭКО - настенные', slug: 'katalog/vks-eco' },
                { label: 'ВКС Vert - вертикальные', slug: 'katalog/vks-vert' },
                { label: 'ВКВЭС - настенные эл.', slug: 'katalog/vkves' },
              ],
            },
            {
              label: 'Специальные',
              collapsed: false,
              items: [
                { label: 'ВКСК - скамья', slug: 'katalog/vksk' },
                { label: 'ВКВП - подоконные', slug: 'katalog/vkvp' },
                { label: 'ВКВМ - мебельные', slug: 'katalog/vkvm' },
              ],
            },
            { label: 'Регулирование', slug: 'katalog/regulirovanie' },
          ],
        },
        {
          label: 'Спецрешения',
          items: [
            { label: 'Все спецрешения', slug: 'spetsialnye-ispolneniya/spec' },
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
            { label: 'Монтаж ВКС', slug: 'instrukcii/montazh-vks' },
            { label: 'Установка ВКН', slug: 'instrukcii/montazh-vkn' },
          ],
        },
        {
          label: 'Сертификаты',
          items: [
            { label: 'Декларации', slug: 'sertifikaty/deklaratsii' },
          ],
        },
      ],
    }),
  ],
});
