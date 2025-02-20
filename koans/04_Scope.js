describe("'const'에 대해서 학습합니다.", function () {
  it("'const'로 선언된 변수에는 재할당(reassignment)이 금지됩니다.", function () {
    // ✅ 재할당이 문제 되는 부분 삭제
    const constNum = 0;
    expect(constNum).to.equal(0);

    const constString = 'I am a const';
    expect(constString).to.equal('I am a const');
  });

  it("'const'로 선언된 배열의 경우 새로운 요소를 추가하거나 삭제할 수 있습니다.", function () {
    const arr = [];
    const toBePushed = 42; // ✅ FILL_ME_IN을 42로 변경하여 테스트 통과
    arr.push(toBePushed);
    expect(arr[0]).to.equal(42);

    // ✅ 배열의 참조 자체를 변경하는 것은 불가능
    // arr = [1, 2, 3]; (불가능)
  });

  it("'const'로 선언된 객체의 경우, 속성을 추가하거나 삭제할 수 있습니다.", function () {
    const obj = { x: 1 };
    expect(obj.x).to.equal(1); // ✅ FILL_ME_IN을 1로 변경

    delete obj.x;
    expect(obj.x).to.equal(undefined); // ✅ 속성을 삭제했으므로 undefined로 변경

    // ✅ 객체의 참조 자체를 변경하는 것은 불가능
    // obj = { x: 123 }; (불가능)

    obj.occupation = 'SW Engineer'; // ✅ FILL_ME_IN을 'SW Engineer'로 변경
    expect(obj['occupation']).to.equal('SW Engineer');
  });
});
