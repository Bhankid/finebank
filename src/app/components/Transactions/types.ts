export interface Transaction {
  id: string;
  icon: string;
  item: string;
  shopName: string;
  date: string;
  paymentMethod: string;
  amount: string;
  type: 'revenue' | 'expense';
}
