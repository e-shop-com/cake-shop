import request from './request'

async function getProductDetail(id) {
  const res = await request.get(`/product/detail/${id}`)
  return res
}

async function getAllProducts() {
  const res = await request.get(`/product`)
  return res
}

async function getProducts(sort = -1) {
  const res = await request.get(`/product/${sort}`)
  return res
}

async function togglePublishProduct(id, publish) {
  console.log(publish)
  const res = await request.put(`/product/${id}`, { updates: { publish } })
  return res
}

async function addProduct(product) {
  const res = await request.post('/product', product)
  return res
}

async function editProduct(id, updates) {
  const res = await request.put(`/product/${id}`, { updates })
  return res
}

async function removeProduct(id) {
  const res = await request.delete(`/product/${id}`)
  return res
}

export default {
  getProductDetail,
  getProducts,
  getAllProducts,
  togglePublishProduct,
  addProduct,
  editProduct,
  removeProduct
}
