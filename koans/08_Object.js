describe('Object에 대해서 학습합니다.', function () {
  it('Object를 함수의 인자로 전달할 경우, reference가 전달됩니다.', function () {
    const obj = {
      mastermind: 'Joker',
      henchwoman: 'Harley',
      relations: ['Anarky', 'Duela Dent', 'Lucy'],
      twins: {
        'Jared Leto': 'Suicide Squad',
        'Joaquin Phoenix': 'Joker',
        'Heath Ledger': 'The Dark Knight',
        'Jack Nicholson': 'Tim Burton Batman',
      },
    };

    // 1️⃣ 객체를 함수의 인자로 전달하여 속성을 변경 (참조가 유지됨)
    function passedByReference(refObj) {
      refObj.henchwoman = 'Adam West';
    }
    passedByReference(obj);
    expect(obj.henchwoman).to.equal('Adam West'); // ✅ 참조로 전달되어 원본이 변경됨

    // 2️⃣ 같은 객체를 참조하는 변수 할당 → 변경 시 원본도 영향을 받음
    const assignedObj = obj;
    assignedObj.relations = [1, 2, 3];
    expect(obj.relations).to.deep.equal([1, 2, 3]); // ✅ 참조된 객체이므로 변경됨

    // 3️⃣ Object.assign()을 사용한 얕은 복사 (Shallow Copy)
    const copiedObj = Object.assign({}, obj);
    copiedObj.mastermind = 'James Wood';
    expect(obj.mastermind).to.equal('Joker'); // ✅ 얕은 복사라 원본은 영향 없음

    // 4️⃣ 얕은 복사 문제 해결: 내부 객체는 그대로 공유됨
    obj.henchwoman = 'Harley';
    expect(copiedObj.henchwoman).to.equal('Adam West'); // ✅ 내부 객체는 여전히 공유됨

    // 5️⃣ 내부 객체가 공유되는 문제를 확인
    delete obj.twins['Jared Leto'];
    expect('Jared Leto' in copiedObj.twins).to.equal(true); // ✅ 얕은 복사라 twins는 공유됨

    // 6️⃣ 깊은 복사(Deep Copy) 적용하여 해결
    const deepCopiedObj = JSON.parse(JSON.stringify(obj));
    deepCopiedObj.mastermind = 'New Mastermind';
    expect(obj.mastermind).to.equal('Joker'); // ✅ 깊은 복사라 원본은 영향 없음

    delete deepCopiedObj.twins['Heath Ledger'];
    expect('Heath Ledger' in obj.twins).to.equal(true); // ✅ 깊은 복사된 객체에서 삭제해도 원본 유지
  });
});
