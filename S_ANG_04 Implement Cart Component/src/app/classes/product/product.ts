export class Product {
  _id: string;
  category_id: string;
  name: string;
  image: string;
  price: number;
  discount: number;
  rating: number;
  ratingCount: number;
  is_featured: boolean;
  is_recent: boolean;
  description: string;
  color: string;
  size: string;

  constructor(
    _id: string,
    category_id: string,
    name: string,
    image: string,
    price: number,
    discount: number,
    rating: number,
    ratingCount: number,
    is_featured: boolean,
    is_recent: boolean,
    description: string,
    color: string,
    size: string
  ) {
    this._id = _id
    this.category_id = category_id
    this.name = name
    this.image = image
    this.price = price
    this.discount = discount
    this.rating = rating
    this.ratingCount = ratingCount
    this.is_featured = is_featured
    this.is_recent = is_recent
    this.description = description
    this.color = color
    this.size =size
  }
}
