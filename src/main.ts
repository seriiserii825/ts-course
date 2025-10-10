// type ContentType = "post" | "page" | "product";
// type ContentType = "post" | "page" | "product" | string;
type ContentType = "post" | "page" | "product" | string & {};

type PostRecord = {
  id: number;
  title: string;
};

function getRecords(type: ContentType): Record<ContentType, PostRecord[]> {
  return {
    post: [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ],
    page: [
      { id: 1, title: "Page 1" },
      { id: 2, title: "Page 2" },
    ],
    product: [
      { id: 1, title: "Product 1" },
      { id: 2, title: "Product 2" },
    ],
    test: [
      { id: 1, title: "Product 1" },
      { id: 2, title: "Product 2" },
    ],
  };
}

const my_records = getRecords("test");
