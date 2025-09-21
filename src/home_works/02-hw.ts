export default function secondHomework() {
  type TSuccess<T> = {
    res: true;
    data: T;
  };

  type TError = {
    res: false;
    error: string;
  };

  type TResult<T> = TSuccess<T> | TError;

  type TProduct = {
    id: number;
    title: string;
    price: number;
    rest: number;
  };

  async function getJson<T>(url: string): Promise<TResult<T>> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        // не кидаем «как есть», а сразу возвращаем TError
        return {
          res: false,
          error: `Ошибка по адресу ${url}, статус ${response.status}`,
        };
      }
      const data = (await response.json()) as T;
      return { res: true, data };
    } catch (err: unknown) {
      // корректно работаем с unknown
      const msg = err instanceof Error ? err.message : "Неизвестная ошибка запроса";
      return { res: false, error: msg };
    }
  }
  async function getData() {
    const result = await getJson<TProduct[]>("https://faceprog.ru/reactcourseapi/products/");

    if (result.res) {
      // здесь result: TSuccess<TProduct[]>
      console.log(result.data, "data");
    } else {
      // здесь result: TError
      console.error(result.error, "error");
    }
  }
  getData();
}
