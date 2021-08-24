# Renewal Nomflix

> Just more practical react tutorials for me 💨

> Learn react and make movie app 🚀

> with [NomadCoders React Course](https://nomadcoders.co/react-for-beginners)

> [Demo](https://gracious-saha-987b9e.netlify.app)

## Preview

![preview](/screenshots/preview.gif)

## Tech Stack

- React
- Styled Components
- React Router
- Axios
- React Hooks

## Site Contents and Structures

### Contents

- Home page

  > Contains three part, `1️⃣1️now playing movies` `2️⃣upcoming movies` `3️⃣airing today TVs`

- Movie page

  > Contains two part, `1️⃣popular movies`, `2️⃣top rated movies`

- TV page

  > Contains three pard, `1️⃣popular TVs`, `2️⃣top rated TVs`, `3️⃣on the air TVs in the next 7 days`

- Actor page

  > Can show `actor information`

- Search page

  > Can `look for` movie or TV

- Moive/TV detail page

  > Contains `Each movie or TV details`

- Collection page

  > Contains details about `movie series` such as `The Lord of the Rings` series

- TV series page

  > Contains `TV series list`

  > Contains `still-cut` of each season

### Directory Structure

```
    src
    |-- assets
    |-- Components
    |    |--Actor.js
    |    |--Episodes.js
    |    |--Genres.js
    |    |--GlobalStyles.js
    |    |--Item.js
    |    |--Loader.js
    |    |--MovieContent.js
    |    |--TVContent.js
    |    |--Navigation.js
    |    |--Rank.js
    |    |--Router.js
    |    |--Section.js
    |    |--Stars.js
    |    |--Videos.js
    |-- Routers
    |    |--Actor
    |    |--Collection
    |    |--Detail
    |    |--Home
    |    |--Movie
    |    |--Search
    |    |--Season
    |    |--Seasons
    |    |--TV
    |-- api.js
    |-- App.js
    |-- index.js
```

# Install and Setup

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

`git clone https://github.com/jjanmo/renewal-nomflix.git`

Installation:

`npm install`

# Run

To Start Server:

`npm start`

# Reflection

> 프로젝트를 통해 느낀 점을 정리한다.

## My First React App

말 그대로 처음으로 만드는 리액트 앱이였다. 이번 리액트 프로젝트를 하면서 느낀 점 중에서 가장 절실하게 느낀 것은 바로 `자바스크립트의 개념에 대한 중요성` 이다. 이 프로젝트는 위에서 레퍼런스를 달아놓았듯이 노마드코더에서 함께 진행한 온라인 챌린지의 **졸업 작품**이다. 정확히 7~8개월 전, **자바스크립트를 알면 리액트가 쉬워진다는 말** 을 듣고 `자바스크립트에 대한 무모한 자신감`으로 <u>리액트도 모른 채</u> 도전했던 적이 있다.

**💥 BUT 💥**

아니나 다를까 `매일 오는 과제`는 매번 밤을 꼬박새도 풀리지 않는 수수께끼와 같았고, 강의에서의 `니코의 말`은 시간이 지날수록 아랍어를 방불케했다. 그리고 결과는 **중도포기😨** 그 때는 도저히 끝까지 할 자신이 없었다. 그렇게 내가 가진 자바스크립트는 `진짜 자바스크립트가 아님`을 느끼고 나의 자신감의 근원은 `자만심`이였음을 깨닫게 되는 첫번째 도전이였다.

그렇게 6개월여 동안 여러 자바스크립트의 개념들을 정리하고 여러 개의 아기자기한 작은 프로젝트들을 통해서 자바스크립트와 친숙해지는 시간을 가졌다. 드디어 그날이 되었다, **재도전의 시간**. 반드시 수료하겠다는 굳은 의지💢로 말이다.

**💫 매우 놀라운 일이 벌어졌다 💫**

그것은 내가 따로 리액트를 학습하거나 그런적이 없음에도 리액트를 바라보는 관점이 몇개월 전와 판이하게 달라져 있었다.

> 사실 원래 계획은 한 번 보고 들어가려고 했지만, 시간상의 여유가 없어서 챌린지와 동시에 학습을 시작했다.😅

어떻게 보면 매우 신기한 상황이였다. 반드시 <u>리액트를 보기 전에 자바스크립트를 좀 더 명확하게 알고 들어가라</u> 라는 말을 몸소 체험하는 시간이였다. 그럼에도 2주간의 챌린지는 어려웠다. 왜냐하면 매일 나에게 주어진 과제는 내가 태어나서 처음 받아보는 과제이고, 만약에 아는 내용일지라도 리액트로 구현하는 것 역시 처음이기 때문이었다.

이런 과정들을 하나 하나 극복하고 난 후에 5~7일 정도의 시간 동안 탄생한 **나의 첫번째 리액트 앱이 바로 이것**이다. 주어진 시간 동안 내가 이 프로젝트를 마무리 할 수 있었던 근본적인 힘은 리액트가 아니라 `자바스크립트`라고 생각한다.

### 여기서 잠깐💨

> '어떤 자바스크립트의 개념들이 프로젝트를 진행할 때나 챌린지를 헤쳐나갈 때 필요했을까' 에 대해서 생각해보았다.

`class` :

보통 클래스라고 하면, 'ES6에서 새롭게 등장한 개념이고 자바나 일반적으로 보아온 클래스와 별반 다르지 않다. 그렇기 때문에 syntax를 알면 된다' 고 생각하는 경우가 많다. 하지만 생각보다 그렇지 않다. 자바스크립트의 클래스는 기본적으로 `prototype` 기반인 자바스크립트를 좀 더 익숙한 클래스를 `문법적 설탕(syntax sugar)` 이상의 것을 지니고 있다. 그렇기 때문에 자바스크립트의 기저에서 작동하고 있는 `prototype`에 대해서도 알아야 하고 클래스에서 새롭게 추가된 부분도 알아야한다. 그래야 클래스 컴퍼넌트의 동작 방식과 사용법에 대해서 이해가 될 것이다.

`this` :

자바스크립트에서 this라는 개념은 매우 심오하다. `this는 함수가 어떻게 호출되는지에 따라서 달라진다. 즉 this를 알기 위해서 this가 속해있는 함수가 어떻게 호출되었는지를 찾으면 된다.` 라고 설명하면 말은 뭔가 쉽다. <u>하지만</u> 실제로 코드상에서 this의 의미를 정확히 찾는 것은 말만큼 쉽지 않다. 특정예제를 통해서 찾는 것은 짧은 코드에서 일어나는 현상이기 때문에 어렵지 않을 수 있다. 반면, 전반적으로 퍼져있는 코드, 여기 저기서 호출하는 함수들과 그 함수들 안에서 바인딩되는 컨텍스트들의 관계를 차근차근 따져서 this의 의미를 해석하는 것은 참 쉽지 않은 것 같다. 여기에 <u>자체적인 this가 존재하지 않는</u> `화살표 함수`까지 더해지면서, 상황에 따라서 나타나는 에러는 **💥멘붕💥**을 유발하기 딱이다. 그런데 클래스 컨퍼넌트를 사용하는 리액트의 경우엔 이러한 this의 사용이 필수적이기에 좀 더 명확하게 정리할 필요가 있다고 생각한다.

> `리액트 후크(React Hooks)`의 등장으로 (특정 성능이 매우 필요로하는 경우를 제외하고) 함수형 컴퍼넌트로도 클래스 컴퍼넌트에서 할 수 있는 모든 것을 할 수 있다고 한다.

`function`:

자바스크립트에서 가장 중요한 것은 `함수`라고 많이 이야기한다. 저는 사실 처음에 왜 함수가 가장 중요한건지에 대해서 전혀, 네이버(?) 이해하지 못했다. 그런데 자바스크립트를 지속적으로 학습하다 보면 자바스크립트의 함수는 다른 언어에서의 함수 이상의 능력을 지닌 `슈퍼맨`과 같은 느낌이다.

자바스크립트의 함수는 **일급객체**이다. `변수에 담을 수 있고, 파라미터로 넘겨줄 수 있고, 반환값으로 사용될 수 있는 특성`을 가질 때, 우리는 이것을 일급객체라고 한다. 위 3가지의 특성을 자바스크립트 코드를 작성할 때 함수에서 사용했던 기억이 날 것이다. 여기서 이제 고차함수라는 개념이 나온다. **고차함수**는 `함수를 파라미터로 받거나 함수를 반환하는 함수를 말한다`. 이렇게 말하면, 기억나는 것들이 좀 있을 것이다. 특히 Array 관련 메서드들이다. 리액트에서는 map, filter 등의 메서드를 많이 이용한다. 여기서 좀 더 나가면, HoC라는 개념이 등장한다.

> 사실 아직 나도 이 개념에 대해서 정확히 이해한 것은 아니다.

`withRouter`를 사용할 때 이 개념이 등장했었다. **HoC**는 `컴퍼넌트를 파라미터로 받아서 새로운 컴퍼넌트를 만들어서 그 컴퍼넌트에 파라미터롤 받아온 컴퍼넌트를 랜더링하는 것`을 말한다. 사실 이렇게 말로 설명하는 것은 의미가 없다고 생각한다. 직접 부딪쳐보고 만들어보고 하는 것이 이것을 이해하는데 좀 더 필요할 것이라고 생각한다.어쨌든 이 부분에 있어서도 결국 (함수형) 컴퍼넌트도 함수이기 때문에 고차함수를 정확히 이해한다면 이런 부분도 좀 더 수월하게 이해 할 수 있지 않을까 하는 생각이 든다.

<br />

## Challenge

> 프로젝트 중에서 어려웠던 부분이나 해결하지 못한 부분에 대해서 정리해본다.

> 이 부분에 대해서 좀 더 명확하고 구체적으로 쓰고 싶었지만, 프로젝트를 급박하게 진행하다보니 이런 부분을 일일히 체크를 할 수 없었다. 그리고 이 글을 쓰는 시점이 프로젝트를 진행하고 시간이 지난 시점이라 모든 것을 상세히 기억하지 못하는 것이 아쉽다.

> 추후 진행되는 프로젝트에 대해서는 이러한 부분에 대한 기록을 좀 더 명확히 하는 습관을 갖는 것이 중요할 것 같다.

### Search Router

원래 구현하고자 했던 부분은 이러했다. header에 검색창을 집어넣어서 검색을 하기 위해서 페이지를 이동하는 불편함(?)을 덜고자 했다. 그런데 문제가 생겼다. 이 기본적으로 함수형 컴퍼넌트에서는 랜더링을 제외한 기능을 구현할 수가 없었다. 물론 리액트 후크로 가능했지만, 클래스 컴퍼넌트와 함수형 컴퍼넌트를 동시에 사용할 때 특정한 추가 작업이 필요한건지 혹은 사용할 수 없는 건지 등등에 대한 `막연함`이 존재했다.

> 이것을 구현할 때는 리액트 후크에 대한 이해가 부족한 상태였다.🥵

또한 리액트 후크로 구현하다보니까 라이프 사이클에 대한 오류를 여러 번 겪게 되었다. 그 부분에 대한 처리를 명확하게 할 수 없었고, 그로 인해 결과값이 제대로 나타나지 않았다. 그래서 결국 이 부분에 대한 문제는 해결하지 못하고 원래 작업한 상태로 진행하게 되었다.

### Do Repeat Yourself 😵 : Detail page

이 프로젝트에는 무비컨텐츠와 TV컨텐츠가 존재한다. 이 두 컴퍼넌트는 많이 중복되는 부분이다. 받아오는 정보가 다른 부분에 대한 처리를 어떻게 하여서 합칠 것인지에 대한 고민을 하는 와중에 `한 부분만 우선은 만들고 보자`라는 생각에 완성을 시켰다. 그런데 그러고 보니 내가 생각했던 것보다 영화와 TV에서 다른 부분들이 많이 존재한다는 사실을 알게 되었다. 이와 동시에 비슷한 부분 역시 많이 존재했다. 그 순간 고민을 했다.

`첫번째 선택:`

> 완성된 부분이 있으니, 그 부분을 `복붙`하여 만들고 서로 다른 부분들만 완성하도록하자.

`두번째 선택:`

> 완성된 부분을 토대로 같은 부분은 통합하고 어떻게 하면 다른 부분들을 좀 더 추상화하여 조작할 것인지를 생각하여 완성시키자.

나의 선택은 안타깝게도 첫번째였다. 그 이유는 첫번째로 하는 것이 좀 더 빠르게 프로젝트를 완성시키는 방법이라는 착각을 하고 말았다. 이런 것이 `초보자들의 생각`인 것 같다. 이렇게 완성시킨 후에 <u>많은 리팩토링 및 많은 버그 수정</u>을 할 때 **이것이 잘못되었음**을 몸소 체험하게 되었다. 가장 중요하고 많은 기능이 들어있는 상세 페이지에서의 버그 수정을 할 때면 <u>항상 영화와 TV에 걸쳐서 두 번씩 수행하였다.</u>

**좀 다른 `DRY`** 인 `Do Repeat Yourself`를 몸소 실천한 셈이다.

> 원래 `DRY`는 `Do not Repeat Yourself` 이다.

> "😈 : 동무!! 반복되는 코드를 작성하지 말라우" 라고 말하는 것!!

이렇게 몸소 체험하였으니, 구조적으로 리팩토링 할 시간이다. 이 부분을 하나로 합쳐서 좀 더 유연하고 추상적인 컴퍼넌트로 만들어야 할 것이다.

### Season page

이 부분을 만들 때는 어려웠지만 가장 재미있었다. 뭔가 `색다른 것`을 넣고 싶다는 생각에서 시작된 부분이였다. 구현 내용은 이렇다.

```
각 드라마 시즌별로 클릭을 하면 그 시즌에 해당하는 페이지로 이동하게 되고 그 시즌 페이지에서는 각각의 에피소드를 클릭하면
그 에피소드에 대한 줄거리와 스틸 컷을 보여줄 수 있게 만들자. 그렇게 하기 위해선 우선 전체적인 에피소트와 각각의 스틸컷에 대한 정보를
리스트업 해야한다. 거기에 각각의 에피소드와 스틸컷을 매칭시켜줘야 한다. 그리고 리액트 후크를 사용해보자.
```

이러한 `전반적인 계획`을 가지고 시작하였다.

첫번째로 어려웠던 점은 큰 구조를 잡는 것이였다. HTML과 CSS를 통해서 한 페이지 안에서 스크롤 없이 볼 수 있는 구조를 만들고 싶었다. 물론 에피소드는 (내부 스크롤이 가능한) 리스트로서 구현하였다. 우선 많은 데이터들을 하나의 인덱스로 매칭시키는 구조를 어떻게 만들 것인였다. 마치 `캐러셀 슬라이드`와 같은 구조를 만들어야 했다.

두번째는 `state 관리`와 `CSS in JS` 였다. 이 프로젝트에서는 Styled Component를 사용한다. 그렇기 때문에 상태변화에 따른 스타일 변화를 주기 위해선 prop을 통해서 스타일의 변화를 인지할 수 있도록 알려주어야만 했다. 문제는 `어디서 어떤 prop을 어떻게 전달해줘야할지`에 대한 고민이 많았다. 또한 어떤 변수를 prop으로서 사용할 때 그 변수는 사실상 중복되는 것 아닌가? 라는 의문이 들 때도 있었다.

`state 통해서 index가 관리`되고 그 `index를 통해서 스타일이 바뀌는 일련의 과정`을 어떻게 하면 효율적으로 구성할 수 있을지에 대해서 고민하였다.

여러 고민 끝에 index 하나만으로 이를 해결할 수 있는 방법에 대해서 생각할 수 있었다. 클릭여부에 대한 새로운 state를 만드는 것이 아니라 현재 클릭된 index를 통해서 에피소드가 클릭되었는지 여부를 알 수 있게 만들었고, 이를 통해서 CSS의 prop으로 그 결과를 전달해줄 수 있었다.

```javascript
//currentIndex는 useState에 의해서 관리된다

isClicked={Number(index) === Number(currentIndex)}
```

이와 같은 과정을 통해서 자바스크립와 CSS를 컴퍼넌트 단위로 생각하고 어떻게 연결지을지에 대해서 조금이나마 느끼는 기회가 되었던 것 같다.

<br/>

# Improvement

> 사이트를 좀 더 개선시킬 수 있는 방법에 대한 리스트

## 반응형

- [ ] 현재 노트북에서 보는 것까지는 미디어쿼리가 작성되어 있습니다. `좀 더 다양한 기기`에서 볼 수 있도록 `미디어 쿼리`를 작성해보자

## 검색

- [ ] 현재 검색창을 `헤더에 넣음`으로서 언제나 어느 페이지에서나 접근이 가능하도록 만들기

- [ ] 검색 후에 되돌아왔을 때(or 새로고침 후) `원래 검색상태`를 유지하도록 구현하기

- [ ] 검색 결과에 대한 `무한 스크롤` 기능 구현하기

## 섹션페이지

- [ ] `페이징` 구현하기

  > 현재는 20개의 영화나 드라마를 보여주고 있다. 이것을 100개까지 보여주게 수정을 하고자한다. 여기서는 한 페이지 안에 2개 이상의 섹션이 존재하기 때문에 `페이징`을 통해서 구현하는 것이 적합하다고 생각한다.

- [ ] 한 페이지 안에 여러개의 섹션이 존재하는데, 각각의 섹션에 좀 더 빠르게 접근할 수 있는 `shorthand` 버튼 추가하기

## 배우페이지

- [ ] 배우들의 `필모그래프`를 추가하기

## 구조

- [ ] 중복되는 구조 제거하기
