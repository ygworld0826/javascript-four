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
expect(multiTypeArr[0]).to.equal(0); // ✅ 첫 번째 요소: 숫자 0
expect(multiTypeArr[2]).to.equal('two'); // ✅ 세 번째 요소: 문자열 "two"
expect(multiTypeArr[3]()).to.equal(3); // ✅ 네 번째 요소: 함수 실행 결과 3
expect(multiTypeArr[4].value1).to.equal(4); // ✅ 다섯 번째 요소의 value1 속성 값
expect(multiTypeArr[4].value2).to.equal(5); // ✅ 다섯 번째 요소의 value2 속성 값
expect(multiTypeArr[5][1]).to.equal(7); // ✅ 여섯 번째 요소(배열)의 두 번째 값
