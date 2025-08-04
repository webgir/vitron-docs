// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import logoLight from './src/assets/logo.svg?url';
import logoDark from './src/assets/logo-dark.svg?url';

// https://astro.build/config
export default defineConfig({
integrations: [
    starlight({
title: 'Каталог 2026',
		logo: {
    light: logoLight,
    dark: logoDark,
	},
    social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
    ],
    sidebar: [
        {
        label: 'О компании',
        items: [
            { label: 'Введение', slug: 'o-kompanii/vvedenie' },
            { label: 'История', slug: 'o-kompanii/istoriya' },
        ],
        },
        {
        label: 'Каталог продукции',
        items: [
            { label: 'Конвекторы ВК', slug: 'katalog/vk' },
            { label: 'Конвекторы ВКВ 24', slug: 'katalog/vkv24' },
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
