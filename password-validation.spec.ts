import { expect, jest, test, describe, it } from '@jest/globals';
import { passwordValidation } from './password-validation';
import { AT_LEAST_2_NUM, AT_LEAST_8_CHAR, IS_NOT_EMPTY, IS_NOT_STRING } from './message.error';

describe("Password validation", function () {

    it("should throw error when input is not valid", function () {
        expect(() => passwordValidation(null as unknown as string)).toThrow(Error(IS_NOT_STRING))
    });

    it("should return every error when input is empty string", function () {
        const response = passwordValidation('');
        expect(response.result).toBeFalsy();
        expect(response.errorMessage).toEqual(expect.arrayContaining([
            IS_NOT_EMPTY,
            AT_LEAST_8_CHAR,
            AT_LEAST_2_NUM
        ]));
    });

    it("should return error at least 8 char when input.length = 3", function () {
        const response = passwordValidation('33m');
        expect(response.result).toBeFalsy();
        expect(response.errorMessage).toEqual(expect.arrayContaining([
            AT_LEAST_8_CHAR
        ]));
    });

    it("should return error at least 2 num when input not contain any num", function () {
        const response = passwordValidation('fnalwjfn');
        expect(response.result).toBeFalsy();
        expect(response.errorMessage).toEqual(expect.arrayContaining([
            AT_LEAST_2_NUM
        ]));
    });

    it("should return serveral error messages when password fail serveral validations", function () {
        const response = passwordValidation('1njdfff');
        expect(response.result).toBeFalsy();
        expect(response.errorMessage).toEqual([
            AT_LEAST_8_CHAR, AT_LEAST_2_NUM
        ]);
    });


});
