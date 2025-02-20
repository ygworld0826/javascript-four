describe('구조 분해 할당(Destructuring Assignment)에 관해서', () => {
  it('배열을 분해합니다', () => {
    const array = ['rocket', 'boost', 'im', 'course'];

    const [first, second] = array;
    expect(first).to.eql('rocket'); // ✅ 첫 번째 요소
    expect(second).to.eql('boost'); // ✅ 두 번째 요소

    const result = [];
    function foo([first, second]) {
      result.push(second);
      result.push(first);
    }

    foo(array);
    expect(result).to.eql(['boost', 'rocket']); // ✅ 예상 결과
  });

  it('rest/spread 문법을 배열 분해에 적용할 수 있습니다', () => {
    const array = ['rocket', 'boost', 'im', 'course'];
    const [start, ...rest] = array;
    expect(start).to.eql('rocket'); // ✅ 첫 번째 요소
    expect(rest).to.eql(['boost', 'im', 'course']); // ✅ 나머지 요소들
  });

  it('객체의 단축(shorthand) 문법을 익힙니다', () => {
    const name = 'eliceKim';
    const age = 28;

    const person = {
      name,
      age,
      level: 'Junior',
    };
    expect(person).to.eql({ name: 'eliceKim', age: 28, level: 'Junior' }); // ✅ 객체 단축 문법
  });

  it('객체를 분해합니다', () => {
    const student = { name: 'bobLee', major: '물리학과' };

    const { name } = student;
    expect(name).to.eql('bobLee'); // ✅ 객체 속성 분해
  });

  it('rest/spread 문법을 객체 분해에 적용할 수 있습니다 #1', () => {
    const student = { name: 'carolChoi', major: '물리학과' };
    const { name, ...args } = student;

    expect(name).to.eql('carolChoi'); // ✅ name만 추출
    expect(args).to.eql({ major: '물리학과' }); // ✅ 나머지 속성
  });

  it('rest/spread 문법을 객체 분해에 적용할 수 있습니다 #2', () => {
    const student = {
      name: 'carolChoi',
      major: '물리학과',
      lesson: '양자역학',
      grade: 'B+',
    };

    function getSummary({ name, lesson: course, grade }) {
      return `${name}님은 ${grade}의 성적으로 ${course}을 수강했습니다`;
    }

    expect(getSummary(student)).to.eql('carolChoi님은 B+의 성적으로 양자역학을 수강했습니다'); // ✅ 문자열 구성 확인
  });

  it('rest/spread 문법을 객체 분해에 적용할 수 있습니다 #3', () => {
    const user = {
      name: 'eliceKim',
      company: {
        name: 'Rocket boost',
        department: 'Development',
        role: {
          name: 'Blockchain Engineer',
        },
      },
      age: 35,
    };

    const changedUser = {
      ...user,
      name: 'bobLee',
      age: 20,
    };

    const overwriteChanges = {
      name: 'bobLee',
      age: 20,
      ...user,
    };

    const changedDepartment = {
      ...user,
      company: {
        ...user.company,
        department: 'Marketing',
      },
    };

    expect(changedUser).to.eql({
      name: 'bobLee',
      company: {
        name: 'Rocket boost',
        department: 'Development',
        role: { name: 'Blockchain Engineer' },
      },
      age: 20,
    });

    expect(overwriteChanges).to.eql({
      name: 'eliceKim', // ✅ 기존 user의 name으로 덮어씀
      company: {
        name: 'Rocket boost',
        department: 'Development',
        role: { name: 'Blockchain Engineer' },
      },
      age: 35, // ✅ 기존 user의 age로 덮어씀
    });

    expect(changedDepartment).to.eql({
      name: 'eliceKim',
      company: {
        name: 'Rocket boost',
        department: 'Marketing', // ✅ department 변경
        role: { name: 'Blockchain Engineer' },
      },
      age: 35,
    });
  });
});
