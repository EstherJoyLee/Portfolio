///// Component /////
export class Component {
  constructor(payload = {}) {
    const { tagName = "div", state = {}, props = {} } = payload;
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;
    this.render();
  }
  render() {
    // ...
  }
}

function routeRender(routes) {
  if (!location.hash) {
    history.replaceState(null, "", "/#/");
  }
  const routerView = document.querySelector("router-view");
  const [hash, queryString = ""] = location.hash.split("?"); // 물음표를 기준으로 해시 정보와 쿼리스트링을 구분

  // 1) 쿼리스트링을 객체로 변환해 히스토리의 상태에 저장
  const query = queryString.split("&").reduce((acc, cur) => {
    const [key, value] = cur.split("=");
    acc[key] = value;
    return acc;
  }, {});

  history.replaceState(query, "");

  // 2) 현재 라우트 정보를 찾아서 렌더링!
  const currentRoute = routes.find((route) =>
    new RegExp(`${route.path}/?$`).test(hash)
  );
  routerView.innerHTML = "";
  routerView.append(new currentRoute.component().el);

  // 3) 화면 출력 후 스크롤 위치 복구!
  window.scrollTo({
    top: 0,
    left: 0,
  });
}

export function createRouter(routes) {
  // 원하는(필요한) 곳에서 호출할 수 있도록 함수 데이터를 반환!
  return function () {
    window.addEventListener("popstate", () => {
      routeRender(routes);
    });
    routeRender(routes);
  };
}

///// Store /////
export class Store {
  constructor(state) {
    this.state = {};
    this.observers = {};
    for (const key in state) {
      Object.defineProperty(this.state, key, {
        get: () => state[key],
        set: (val) => {
          state[key] = val;
          if (Array.isArray(this.observers[key])) {
            this.observers[key].forEach((observer) => observer(val));
          }
        },
      });
    }
  }
  subscribe(key, cb) {
    Array.isArray(this.observers[key])
      ? this.observers[key].push(cb)
      : (this.observers[key] = [cb]);
  }
}
