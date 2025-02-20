describe('type에 대해서 학습합니다.', function () {
  it("비교연산자 '=='는 두 값의 일치 여부를 느슨하게 검사(loose equality)합니다.", function () {
    let actualValue = 1 + 1;
    let expectedValue = "2"; // ✅ 문자열 '2'도 테스트 통과
    expect(actualValue == expectedValue).to.be.true;
  });

  it("비교연산자 '==='는 두 값의 일치 여부를 엄격하게 검사(strict equality)합니다.", function () {
    let actualValue = 1 + 1;
    let expectedValue = 2; // ✅ 숫자 2만 통과
    expect(actualValue === expectedValue).to.be.true;
  });

  it('expect의 인자로 들어간 표현식의 평가(evaluation) 결과를 예측해 봅니다.', function () {
    expect(1 + '1').to.equal("11"); // ✅ 숫자 + 문자열 → 문자열 "11"
  });

  it('expect의 인자로 들어간 표현식의 평가(evaluation) 결과를 예측해 봅니다.', function () {
    expect(123 - '1').to.equal(122); // ✅ 문자열 '1'이 숫자로 변환되어 123 - 1 = 122
  });

  it('expect의 인자로 들어간 표현식의 평가(evaluation) 결과를 예측해 봅니다.', function () {
    expect(1 + true).to.equal(2); // ✅ true가 1로 변환되어 1 + 1 = 2
  });

  it('expect의 인자로 들어간 표현식의 평가(evaluation) 결과를 예측해 봅니다.', function () {
    expect('1' + true).to.equal("1true"); // ✅ 문자열 + 불리언 → 문자열 "1true"
  });
});
