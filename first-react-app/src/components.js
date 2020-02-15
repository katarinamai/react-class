import React from 'react';
import { Product } from "./mock";

export class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        filterText: "",
        stocked: false
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange(stocked) {
    this.setState({
      stocked: stocked
    })
  }

    render() {
        return (
            <div>
                <SearchBar
                inputValue={this.state.filterText}
                checkStocked={this.state.stocked}
                onFilterTextChange={this.handleFilterTextChange}
                onInStockChange={this.handleInStockChange}/>
                <ProductTable 
                product={Product} 
                inputValue={this.state.filterText}
                checkStocked={this.state.stocked}/>
            </div>
        );
    }
}

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
    render() {
      const inputValue = this.props.filterText;
      const checkStocked = this.props.stocked;

        return (
            <div> 
                <input 
                type='text' 
                placeholder="search ..."
                value={this.props.filterText}
                onChange={this.handleFilterTextChange}/>
                <p>
                  <input 
                    type='checkbox' 
                    checked={checkStocked}
                    onChange={this.handleInStockChange}/> Somente produtos em estoque
                </p>
            </div>
        )
    }
}

// export class ProductRow extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     name = props.Product.name;
//     price = props.Product.price;

//     render() {
//         return(
//             <tr>
//                 <td>{name}</td> 
//                 <td>{price}</td>
//             </tr>
//         )
//     }
// }



class ProductRow extends React.Component {
    render() {
      const product = this.props.product;
  
      const name = product.stocked ? (
        product.name
      ) : (
        <span style={{ color: "red" }}>{product.name}</span>
      );
      return (
        <tr>
          <td>{name}</td>
          <td>{product.price}</td>
        </tr>
      );
    }
  }

// export class ProductCategoryRow extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     category = props.product.category;

//     render() {
//         return (
//             <th>{category}</th>
//         )
//     }
// }

const ProductCategoryRow = ({category}) => {
    return(
        <tr>
            <th colSpan='2'>{category}</th>
        </tr>
    );
};

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.stocked;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}


