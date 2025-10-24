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
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeKatex,
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
            { label: 'ВК - базовые', slug: 'katalog/vk' },
            { label: 'ВК ЭКО - эконом', slug: 'katalog/vk-eko' },
            { label: 'ВКВ 24 - 24 В', slug: 'katalog/vkv24' },
            { label: 'ВКН - напольные', slug: 'katalog/vkn' },
            { label: 'ВКВН 24 - напольные', slug: 'katalog/vkvn' },
            { label: 'ВКН ЭКО - эконом', slug: 'katalog/vkn-eco' },
            { label: 'ВКЭН - электро', slug: 'katalog/vken' },
            { label: 'ВКЭ - в пол (ест.)', slug: 'katalog/vke' },
            { label: 'ВКВЭ - в пол (вент.)', slug: 'katalog/vkve' },
            { label: 'ВКВ+ВКЭ - комбинир.', slug: 'katalog/vkv-vke' },
            { label: 'ВКС - настенные', slug: 'katalog/vks' },
            { label: 'ВКС ЭКО - настенные', slug: 'katalog/vks-eco' },
            { label: 'ВКС Vert - вертикальные', slug: 'katalog/vks-vert' },
            { label: 'ВКВЭС - настенные эл.', slug: 'katalog/vkves' },
            { label: 'ВКСК - скамья', slug: 'katalog/vksk' },
            { label: 'ВКВП - подоконные', slug: 'katalog/vkvp' },
            { label: 'ВКВМ - мебельные', slug: 'katalog/vkvm' },
            { label: 'Регулирование', slug: 'katalog/regulirovanie' }
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
