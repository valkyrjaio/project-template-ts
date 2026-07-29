/*
 * This file is part of the Valkyrja package.
 *
 * (c) Melech Mizrachi <melechmizrachi@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { describe, expect, it } from 'vitest';

import { TemplateInfo } from '../../../../../src/Template/Constant/TemplateInfo.ts';

describe('TemplateInfo', () => {
    it('exposes the version', () => {
        expect(TemplateInfo.VERSION).toBe('1.0.0');
    });

    it('exposes the version build date time', () => {
        expect(TemplateInfo.VERSION_BUILD_DATE_TIME).toBe('January 1 2025 00:00:00 MST');
    });
});
