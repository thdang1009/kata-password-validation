import { expect, jest, test, describe, it } from '@jest/globals';
import { passwordValidation } from './password-validation';
import { AT_LEAST_2_NUM, AT_LEAST_8_CHAR, IS_NOT_EMPTY, IS_NOT_STRING } from './message.error';

describe("Password validation", function () {

    it("should throw error when input is not valid", function () {
        expect(() => passwordValidation(null as unknown as string)).toThrow(Error(IS_NOT_STRING));
    });

    it("should throw error when input is empty string", function () {
        expect(() => passwordValidation('')).toThrow(Error(IS_NOT_EMPTY));

    });

    it("should return Password must be at least 8 characters when input = 'famlwk'", function () {
        expect(() => passwordValidation('famlwk')).toThrow(Error(AT_LEAST_8_CHAR));
    });

    it("should return Password must be at least 8 characters when input = '1njdfffj'", function () {
        expect(() => passwordValidation('1njdfffj')).toThrow(Error(AT_LEAST_2_NUM));
    });


});
