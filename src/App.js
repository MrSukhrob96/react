import React from "react"
import Item from "./Item"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      posts: [
        {
          title: "Hello",
          body: "Hello to someone"
        }, {
          title: "Good Day",
          body: "godd day everyone"
        }
      ]
    };
  }

  handleItemBtnClick = (id) => {
    let item = this.state.posts.find((item, itemid) => {
      return itemid === id
    })

    this.setState(() => ({
      title: item.body
    }))
  }

  inputHandle = (event) => {
    this.setState((state) => (
      {
        title: event.target.value
      }))
  }

  handleItemBtnDelete = (id) => {
    // const item = this.state.posts.filter((item, itemid) => {
    //   return itemid !== id
    // })

    const idx = this.state.posts.findIndex((el, elid) => elid === id);

    const item = [
      ...this.state.posts.splice(0, idx),
      ...this.state.posts.splice(idx + 1)
    ]

    this.setState((state) => ({
      posts: item
    }))

  }


  render() {
    return (
      <div>
        <input type="text" onChange={this.inputHandle} />
        <h3>{this.state.title}</h3>
        {this.state.posts.map((item, id) => {
          return <Item {...item} itemBtnOnClick={() => this.handleItemBtnClick(id)} itemBtnOnDelete={() => this.handleItemBtnDelete(id)} key={id} />
        })}
        <button>{this.state.title === '' ? 'Empty' : 'Not Empty'}</button>
      </div>
    );
  }
}


export default App;
