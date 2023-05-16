# Hooks란?

![Hooks란](https://github.com/YEOM0625/TICTACTOE_ReactHooks/assets/109888011/fe0042c8-fe3b-4bc5-99c9-336b569eed50)

# JSX Key 속성 이해하기

JSX Key 속성은 무엇인가?

리액트에서 요서의 리스트를 나열할 때는 Key를 넣어줘야함.

키는 React가 변경, 추가 또는 제거된 항목을 식별하는 데 도움이 됩니다. 요소에 안정적인 ID를 부여하려면 배열 내부의 요소에 키를 제공해야 합니다.

# Key와 가상돔

Key를 이용해서 어떠한 부분이 바뀌었는지 인식할 수 있음.

Key에는 유니크한 값을 넣어준다!(index는 비추천!)

index도 0부터 시작해서 유니크한 값을 가지지만 만약 리스트가 추가되거나 제거되면 해당 리스트들의 key값도 바뀌게 됨.



