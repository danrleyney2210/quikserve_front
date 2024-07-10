export interface IMenu {
  id: number
  name: string
  type: string
  collapse: number
  sections: Section[]
}

export interface Section {
  id: number
  name: string
  description?: unknown
  position: number
  visible?: number
  images: Image[]
  items: Item[]
}

export interface Image {
  id: number
  image: string
}

export interface Item {
  id: number
  name: string
  description?: string
  alcoholic: number
  price: number
  position: number
  visible?: number
  availabilityType: string
  sku?: string
  images?: Image2[]
  available: boolean
  modifiers?: Modifier[]
}

export interface Image2 {
  id: number
  image: string
}

export interface Modifier {
  id: number
  name: string
  minChoices: number
  maxChoices: number
  items: Item2[]
}

export interface Item2 {
  id: number
  name: string
  price: number
  maxChoices: number
  position: number
  visible: number
  availabilityType: string
  available: boolean
  qty?: number
}

export interface Product {
  id: number
  name: string;
  quantity: number;
  description: string;
  meat: number;
  price: number;
  total: number
}

export interface Cart {
  products: Item[];
}

export interface ICart {
  products: Product[];
}
