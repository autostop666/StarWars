import type { DataType } from "./App";

interface ChildProps {
  data: DataType;
}

interface BigDataType {
  user: UserType,
  orders: OrdersType,
  subscriptions: ,
  logs: ,
  settings: ,
  backupCodes: string
}

interface UserType {
  id: number,
  name: string,
  preferences: PrefType,
  addresses: AddressType[]
}


interface AddressType {}
interface PrefType {}



const Child: React.FC<ChildProps> = ({ data }) => {
  return <div>{data.car}</div>;
};
export default Child;
