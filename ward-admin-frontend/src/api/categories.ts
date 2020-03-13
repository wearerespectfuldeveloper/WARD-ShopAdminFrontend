import axios from "axios";

export async function getCategories() {
  const response = await axios.get<Category[]>(
    "http://api.ward-study.com/categories"
  );
  return response.data;
}

export async function createCategory(categoryName: string) {
  await axios.post("http://api.ward-study.com/categories", {
    categoryName: categoryName
  });
  return categoryName;
}

export async function updateCategory(payload: {
  categoryIdx: string | number;
  categoryName: string;
}) {
  await axios.put(
    `http://api.ward-study.com/categories/${payload.categoryIdx}`,
    { categoryName: payload.categoryName }
  );
  return payload;
}

export async function moveCategory(payload: {
  destIdx: number | string;
  sequence: number | string;
  targetIdx: number | string;
}) {
  await axios.put(`http://api.ward-study.com/categories/move`, {
    destIdx: payload.destIdx,
    sequence: payload.sequence,
    targetIdx: payload.targetIdx
  });
  return payload;
}


// Product 객체는 반드시 idx, name, description 속성을 가지고 있어야 하지만 나머지 속성은 들어가있지 않아도 됩니다.
// 만일 imageResource 속성에 아무것도 없으면 imaFile 속성의 내용을 이용해서 이미지를 렌더링하고 그것도 없으면 이미지를 렌더링하지 않습니다.

export interface Category {
  idx: number;
  name: string;
  childCategories: Array<Category>;
}