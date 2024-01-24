export interface TypeProduct {
  id: string
  title: string
  image: string
  description: string
  price: number
  category: Category
  rate: number
}

export interface TypeCategory {
  name: string
  img: string
}
