describe('Array에 대해서 학습합니다.', function () {
  it('Array의 기본을 확인합니다.', function () {
    const emptyArr = [];
    expect(Array.isArray(emptyArr)).to.equal(true); // ✅ 배열인지 확인
    expect(emptyArr.length).to.equal(0); // ✅ 빈 배열이므로 길이는 0

    const multiTypeArr = [
      0,
      1,
      'two',
      function () {
        return 3;
      },
      { value1: 4, value2: 5 },
      [6, 7],
    ];

    expect(multiTypeArr.length).to.equal(6); // ✅ 배열 길이 확인
    expect(multiTypeArr[0]).to.equal(0); // ✅ 첫 번째 요소
    expect(multiTypeArr[2]).to.equal('two'); // ✅ 세 번째 요소
    expect(multiTypeArr[3]()).to.equal(3); // ✅ 네 번째 요소(함수 실행 결과)
    expect(multiTypeArr[4].value1).to.equal(4); // ✅ 다섯 번째 요소의 value1 속성 값
    expect(multiTypeArr[4].value2).to.equal(5); // ✅ 다섯 번째 요소의 value2 속성 값
    expect(multiTypeArr[5][0]).to.equal(6); // ✅ 여섯 번째 요소(배열)의 첫 번째 값
    expect(multiTypeArr[5][1]).to.equal(7); // ✅ 여섯 번째 요소(배열)의 두 번째 값
  });

  it('Array의 요소(element)를 다루는 방법을 확인합니다.', function () {
    const arr = [];
    expect(arr).to.deep.equal([]);

    arr[0] = 1;
    expect(arr).to.deep.equal([1]);

    arr[1] = 2;
    expect(arr).to.deep.equal([1, 2]); // ✅ 두 번째 요소 추가

    arr.push(3);
    expect(arr).to.deep.equal([1, 2, 3]); // ✅ push() 사용 후

    const poppedValue = arr.pop();
    expect(poppedValue).to.equal(3); // ✅ pop()으로 제거된 값 확인
    expect(arr).to.deep.equal([1, 2]); // ✅ pop() 후 배열 확인
  });

  it('Array 메소드 slice를 확인합니다.', function () {
    const arr = ['peanut', 'butter', 'and', 'jelly'];

    expect(arr.slice(1)).to.deep.equal(['butter', 'and', 'jelly']); // ✅ 인덱스 1부터 끝까지
    expect(arr.slice(0, 1)).to.deep.equal(['peanut']); // ✅ 첫 번째 요소만 포함
    expect(arr.slice(0, 2)).to.deep.equal(['peanut', 'butter']); // ✅ 첫 두 개 요소
    expect(arr.slice(2, 2)).to.deep.equal([]); // ✅ 같은 시작, 끝 인덱스 → 빈 배열
    expect(arr.slice(2, 20)).to.deep.equal(['and', 'jelly']); // ✅ 최대 범위를 넘어가도 끝까지 가져옴
    expect(arr.slice(3, 0)).to.deep.equal([]); // ✅ 시작 인덱스가 끝보다 크면 빈 배열
    expect(arr.slice(3, 100)).to.deep.equal(['jelly']); // ✅ 시작 인덱스부터 끝까지 가져옴
    expect(arr.slice(5, 1)).to.deep.equal([]); // ✅ 범위가 잘못되면 빈 배열

    expect(arr.slice(0)).to.deep.equal(['peanut', 'butter', 'and', 'jelly']); // ✅ 전체 배열 복사
  });

  it('Array를 함수의 인자로 전달할 경우, reference가 전달됩니다.', function () {
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five'];

    function passedByReference(refArr) {
      refArr[1] = 'changed in function';
    }
    passedByReference(arr);
    expect(arr[1]).to.equal('changed in function'); // ✅ 함수 내부에서 변경됨

    const assignedArr = arr;
    assignedArr[5] = 'changed in assignedArr';
    expect(arr[5]).to.equal('changed in assignedArr'); // ✅ 같은 배열을 참조

    const copiedArr = arr.slice();
    copiedArr[3] = 'changed in copiedArr';
    expect(arr[3]).to.equal('three'); // ✅ slice()는 새로운 배열을 반환하므로 원본 영향 없음
  });

  it('Array 메소드 shift와 unshift를 확인합니다.', function () {
    const arr = [1, 2];

    arr.unshift(3);
    expect(arr).to.deep.equal([3, 1, 2]); // ✅ 앞에 3 추가됨

    const shiftedValue = arr.shift();
    expect(shiftedValue).to.equal(3); // ✅ shift()로 제거된 값 확인
    expect(arr).to.deep.equal([1, 2]); // ✅ shift() 후 배열 확인
  });
});
