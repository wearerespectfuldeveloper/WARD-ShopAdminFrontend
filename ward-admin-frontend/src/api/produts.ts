import axios from "axios";

export async function getProducts(
  categoryIdx: string | number,
  createdDate: string
) {
  const response = await axios.get<Product[]>(
    `http://api.ward-study.com/products?Idx=${categoryIdx}&createdDate=${createdDate}`
  );
  return response.data;
}

export async function createProduct(product: ProductObj) {
  await axios.post("http://api.ward-study.com/products", product);
}

export async function updateProduct(product: ProductObj) {
  await axios.put(`http://api.ward-study.com/products/${product.idx}`, product);
}

export async function deleteProduct(productIdx: number | string) {
  await axios.delete(`http://api.ward-study.com/products/${productIdx}`);
}

// Product 객체는 반드시 idx, name, description 속성을 가지고 있어야 하지만 나머지 속성은 들어가있지 않아도 됩니다.

export interface Product {
  idx: number;
  name: string;
  description: string;
  imageResource?: string;
  price?: number;
  stockQuantity?: number;
}

// ProductObj 객체는 렌더링에 활용되지 않고 오직 서버에 요청을 보낼 떄만 사용하는 객체입니다. 이미지 링크 문자열을 넣지 않고 실제 이미지 파일을 넣는 속성이 있습니다.
export interface ProductObj {
  idx: number;
  name: string;
  description: string;
  imgFile?: unknown;
  price?: number;
  stockQuantity?: number;
}
