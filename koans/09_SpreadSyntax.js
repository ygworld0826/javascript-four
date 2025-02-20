describe('Spread syntax에 대해 학습합니다.', function () {
  it('전개 문법(spread syntax)을 학습합니다.', function () {
    const spread = [1, 2, 3];
    // TODO: 전개 문법을 사용해 테스트 코드를 완성합니다. spread를 지우지 않고 해결할 수 있습니다.
    const arr = [0, ...spread, 4];
    expect(arr).to.deep.equal([0, 1, 2, 3, 4]);
  });

  it('빈 배열에 전개 문법을 사용할 경우, 아무것도 전달되지 않습니다.', function () {
    const spread = [];
    // TODO: 전개 문법을 사용해 테스트 코드를 완성합니다. spread를 지우지 않고 해결할 수 있습니다.
    const arr = [0, ...spread, 1];
    expect(arr).to.deep.equal([0, 1]);
  });

  it('여러 개의 배열을 이어붙일 수 있습니다.', function () {
    const arr1 = [0, 1, 2];
    const arr2 = [3, 4, 5];
    const concatenated = [...arr1, ...arr2]; // ✅ 전개 연산자를 사용하여 배열 합치기
    expect(concatenated).to.deep.equal([0, 1, 2, 3, 4, 5]);
  });

  it('여러 개의 객체를 병합할 수 있습니다.', function () {
    const section1 = {
      cohort: 7,
      duration: 4,
      mentor: 'hongsik',
    };

    const me = {
      time: '0156',
      status: 'sleepy',
      todos: ['javascript', 'koans'],
    };

    const merged = { ...section1, ...me }; // ✅ 객체 병합
    expect(merged).to.deep.equal({
      cohort: 7,
      duration: 4,
      mentor: 'hongsik',
      time: '0156',
      status: 'sleepy',
      todos: ['javascript', 'koans'],
    });
  });

  it('Rest Parameter는 함수의 인자를 배열로 다룰 수 있게 합니다.', function () {
    function returnFirstArg(firstArg) {
      return firstArg;
    }
    expect(returnFirstArg('first', 'second', 'third')).to.equal('first');

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }
    expect(returnSecondArg('only give first arg')).to.equal(undefined); // ✅ 두 번째 인자가 없음

    function getAllParamsByRestParameter(...args) {
      return args;
    }

    function getAllParamsByArgumentsObj() {
      return arguments;
    }

    const restParams = getAllParamsByRestParameter('first', 'second', 'third');
    const argumentsObj = getAllParamsByArgumentsObj('first', 'second', 'third');

    expect(restParams).to.deep.equal(['first', 'second', 'third']); // ✅ rest parameter는 배열
    expect(Object.keys(argumentsObj)).to.deep.equal(['0', '1', '2']); // ✅ arguments 객체의 키
    expect(Object.values(argumentsObj)).to.deep.equal(['first', 'second', 'third']); // ✅ arguments 객체의 값

    expect(restParams === argumentsObj).to.deep.equal(false); // ✅ rest parameter는 배열, arguments는 객체
    expect(typeof restParams).to.deep.equal('object'); // ✅ 배열은 객체 타입
    expect(typeof argumentsObj).to.deep.equal('object'); // ✅ arguments도 객체 타입
    expect(Array.isArray(restParams)).to.deep.equal(true); // ✅ rest parameter는 배열
    expect(Array.isArray(argumentsObj)).to.deep.equal(false); // ✅ arguments는 배열이 아님

    const argsArr = Array.from(argumentsObj);
    expect(Array.isArray(argsArr)).to.deep.equal(true); // ✅ Array.from()을 사용해 배열로 변환
    expect(argsArr).to.deep.equal(['first', 'second', 'third']); // ✅ 변환된 배열 확인
    expect(argsArr === restParams).to.deep.equal(false); // ✅ 새로운 배열이므로 false
  });

  it('Rest Parameter는 인자의 수가 정해져 있지 않은 경우에도 유용하게 사용할 수 있습니다.', function () {
    function sum(...nums) {
      let sum = 0;
      for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
      }
      return sum;
    }
    expect(sum(1, 2, 3)).to.equal(6); // ✅ 1+2+3 = 6
    expect(sum(1, 2, 3, 4)).to.equal(10); // ✅ 1+2+3+4 = 10
  });

  it('Rest Parameter는 인자의 일부에만 적용할 수도 있습니다.', function () {
    function getAllParams(required1, required2, ...args) {
      return [required1, required2, args];
    }
    expect(getAllParams(123)).to.deep.equal([123, undefined, []]); // ✅ required2가 없으므로 undefined

    function makePizza(dough, name, ...toppings) {
      const order = `You ordered ${name ? name : 'unknown'} pizza with ${dough} dough and ${toppings.length} extra toppings!`;
      return order;
    }
    expect(makePizza('original')).to.equal('You ordered unknown pizza with original dough and 0 extra toppings!'); // ✅ 이름 없음
    expect(makePizza('thin', 'pepperoni')).to.equal('You ordered pepperoni pizza with thin dough and 0 extra toppings!'); // ✅ 추가 토핑 없음
    expect(makePizza('napoli', 'meat', 'extra cheese', 'onion', 'bacon')).to.equal(
      'You ordered meat pizza with napoli dough and 3 extra toppings!'
    ); // ✅ 추가 토핑 3개
  });
});
