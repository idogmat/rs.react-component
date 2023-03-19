import React from "react";
import { SearchBar } from "../SearchBar";
import Instance from "../../api";
import { IProduct } from "../../api/types";
import { Product } from "../Product";
import s from "./MainPage.module.scss";
interface IState {
  inputValue: string | number | readonly string[] | undefined;
  products: IProduct[];
}
export class MainPage extends React.Component<unknown, IState> {
  constructor(props: unknown) {
    super(props);
    const lsValue = localStorage.getItem("value");
    this.state = {
      inputValue: !!lsValue ? lsValue : "",
      products: [] as IProduct[],
    };
  }
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
    localStorage.setItem("value", event.target.value);
  };
  getProducts = async (): Promise<{ data: IProduct[] }> => {
    return await Instance.get("products");
  };
  async UNSAFE_componentWillMount() {
    const { data } = await this.getProducts();
    this.setState((state) => ({ ...state, products: data }));
  }

  render() {
    return (
      <div>
        <h1>MainPage</h1>
        <SearchBar value={this.state.inputValue} onChange={this.handleChange} />
        <div className={s.main}>
          {this.state.products.length &&
            this.state.products.map((e: IProduct) => (
              <Product key={e.id} {...e} />
            ))}
        </div>
      </div>
    );
  }
}
