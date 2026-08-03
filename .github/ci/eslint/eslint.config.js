/*
 * This file is part of the Project Template package.
 *
 * Copyright (c) 2016-present Melech Mizrachi
 *
 * Released under the MIT License. See LICENSE.md for details.
 */

import path from 'path';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import { CopyrightHeaderFactory } from '@valkyrjaio/ci-eslint';

export default tseslint.config(eslint.configs.recommended, tseslint.configs.strictTypeChecked, {
    languageOptions: {
        parserOptions: {
            // tsconfig.tests.json spans both src and tests, so a single project covers
            // everything linted. projectService would only discover tsconfig.json, which
            // excludes tests, leaving every test file unparseable.
            project: ['./tsconfig.tests.json'],
            tsconfigRootDir: path.resolve(import.meta.dirname, '../../..'),
        },
    },
    plugins: {
        local: { rules: { 'copyright-header': CopyrightHeaderFactory.getRule('Project Template') } },
    },
    rules: {
        'local/copyright-header': 'error',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-unnecessary-type-parameters': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        '@typescript-eslint/no-invalid-void-type': ['error', { allowAsThisParameter: true }],
    },
});
