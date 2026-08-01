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
    // The release workflow rewrites both constants, so assert their shape and never an exact value.
    it('exposes the version', () => {
        expect(TemplateInfo.VERSION).toMatch(/^\d+\.\d+\.\d+$/);
    });

    it('exposes the version build date time', () => {
        expect(TemplateInfo.VERSION_BUILD_DATE_TIME).toMatch(/^[A-Z][a-z]+ \d{1,2} \d{4} \d{2}:\d{2}:\d{2} MST$/);
    });
});
