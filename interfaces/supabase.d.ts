export interface IPost {
  id: number;
  title: string;
  status: 'published' | 'draft' | 'rejected';
  createdAt: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'user';
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string;
  category_id: number;
  createdAt: string;
  updatedAt: string;
  store_id: number;
  rating: number;
  type: string;
  category: ICategory;
}

export interface ICategory {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  icon: string;
  click_count: number;
  total_product: number;
  createdBy: IUser;
  modifiedBy: IUser;
}

export interface IStore {
  id: number;
  user_id: number;
  name: string;
  description: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  createdBy: IUser;
  modifiedBy: IUser;
  phones: string;
  banner: string;
  logo: string;
  email: string;
  fb: string;
  rating: number;
  view_count: number;
  is_verified: boolean;
  cid: string;
  category: ICategory;
}

export interface IOwner {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  full_name: string;
  email: string;
  address: string;
  pic: string;
  sex: string;
  dob: string;
  phones: string;
  age: number;
}
