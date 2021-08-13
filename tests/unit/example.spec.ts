import { shallowMount } from "@vue/test-utils";
import ListItem from "@/components/ListItem.vue";

describe("ListItem.vue", () => {
  // localStorage set etme fonksiyonu
  function setItem(jsonId: any, newJson: any) {
    return localStorage.setItem(jsonId, JSON.stringify(newJson));
  }

  // Testte, öğenin tarayıcının yerel deposuna yerleştirilip yerleştirilmediğini kontrol etmek istiyorum.
  // localStorage taklit edildi ve window nesnesine eklendi
  const localStorageMock = (function () {
    let store: any = {};

    return {
      getItem(key: any) {
        return store[key];
      },
      setItem(key: any, value: any) {
        store[key] = value;
      },
      clear() {
        store = {};
      },
      removeItem(key: any) {
        delete store[key];
      },
      getAll() {
        console.log(store);
      },
    };
  })();

  // localStorageMock, localStorage yerine window nesnesine eklendi
  Object.defineProperty(window, "localStorage", { value: localStorageMock });

  it("sets data into local storage", () => {
    // İstenilirse alt bölüm yorum satırından çıkarılıp listenin localStorage içine eklendiği console da görüntülenebilir.

    // const myData = [
    //   {
    //     myid: "0",
    //     myjson: "Unit test",
    //   },
    //   {
    //     myid: "1",
    //     myjson: "JEST",
    //   },
    //   {
    //     myid: "2",
    //     myjson: "VueJS",
    //   },
    // ];

    // for (let a = 0; a < 3; a++) {
    //   setItem(myData[a].myid, myData[a].myjson);
    // }
    // localStorage.getAll();

    const jsonId = "1";
    const newJson = { data: "json data" };

    setItem(jsonId, newJson);
    // data set edildiğini console dan görebiliriz.
    localStorage.getAll();

    // Set, Get ve remove işlemleri test edildi.
    expect(localStorage.getItem(jsonId)).toEqual(JSON.stringify(newJson));

    expect(localStorage.removeItem(jsonId)).toEqual(localStorage.clear());

    afterEach(() => {
      window.localStorage.clear();
    });

  });
});
