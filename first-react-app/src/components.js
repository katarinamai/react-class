import React from 'react';
import { Product } from "./mock";

export class FilterableProductTable extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      stocked: false
    };

  }

    render() {
        return (
            <div>
                <SearchBar/>
                <ProductTable product={Product}/>
            </div>
        );
    }
}

export class SearchBar extends React.Component {
    render() {
        return (
            <div> 
                <input type='text' placeholder='Search...'/>
                <p><input type='checkbox'/> Somente produtos em estoque</p>
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
        const rows = [];
        let lastCategory = null;

        this.props.product.forEach(product => {
            if(product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>)
            }
            rows.push(<ProductRow product={product} key={product.name} />)
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
        )
    }
}

