describe('expect에 대해서 학습합니다.', function () {

  it('테스트하는 값(expect의 인자)이 true인지의 여부를 검사합니다.', function () {
    // ✅ false를 true로 수정하여 테스트 통과
    expect(true).to.be.true;
  });

  it('테스트하는 값(expect의 인자)이 falsy 여부를 검사합니다.', function () {
    // ✅ true를 false로 수정하여 테스트 통과
    expect(false).to.be.false;
  });

  it("'테스트하는 값'을 '기대하는 값'과 비교한 결과가 참 인지 확인합니다.", function () {
    let actualValue = 1 + 1;
    let expectedValue = 2; // ✅ FILL_ME_IN을 2로 변경하여 테스트 통과
    expect(actualValue === expectedValue).to.be.true;
  });

  it('Matcher .equal 의 사용법을 학습합니다.', function () {
    let expectedValue = 2; // ✅ FILL_ME_IN을 2로 변경하여 테스트 통과
    expect(1 + 1).to.equal(expectedValue);
  });

  it('Matcher .equal의 사용법을 학습합니다.', function () {
    let actualValue = (1 + 1).toString();
    expect(actualValue).to.equal("2"); // ✅ FILL_ME_IN을 "2"로 변경하여 테스트 통과
  });

});
