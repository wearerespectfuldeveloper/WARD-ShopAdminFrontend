import axios from "axios";

export async function getProducts(payload: {categoryIdx: string | number,
  createdDate: string}) {
  const response = await axios.get<Product[]>(
    `http://api.ward-study.com/products?Idx=${payload.categoryIdx}&createdDate=${payload.createdDate}`
  );
  
  return response.data;
}

export async function createProduct(product: Product) {
  await axios.post("http://api.ward-study.com/products", product, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
  return product;
}

export async function updateProduct(product: Product) {
  await axios.put(`http://api.ward-study.com/products/${product.idx}`, product);
  return product;
}

export async function deleteProduct(productIdx: number | string) {
  await axios.delete(`http://api.ward-study.com/products/${productIdx}`);
  return productIdx;
}

// Product 객체는 반드시 idx, name, description 속성을 가지고 있어야 하지만 나머지 속성은 들어가있지 않아도 됩니다. 
// 만일 imageResource 속성에 아무것도 없으면 imaFile 속성의 내용을 이용해서 이미지를 렌더링하고 그것도 없으면 이미지를 렌더링하지 않습니다.

export interface Product {
  idx?: number | string;
  name: string;
  description: string;
  imageResource?: string;
  categoryIdx?: string | number;
  imgFile?: unknown;
  price?: number | string;
  stockQuantity?: number | string;
  createdDate?: any;
}
