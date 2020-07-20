import React, { Component } from "react"
import axios from "axios"
import Filter from './Filter'

export default class PlantList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plants: [],
      renderPlants: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3333/plants')
      .then(res => {
        console.log(res.data.plantsData)
        this.setState({ plants: res.data.plantsData, renderPlants: res.data.plantsData })
      })
  }

  handleFilter = (e) => {
    console.log(e.target.value)
    this.setState({ renderPlants: this.state.plants.filter(plant => plant.price >= e.target.value) })
  }

  render() {
    return (
      <>
        <Filter handleFilter={this.handleFilter} />
        <main className="plant-list">
          {this.state?.renderPlants?.map((plant) => (
            <div className="plant-card" key={plant.id}>
              <img className="plant-image" src={plant.img} alt={plant.name} />
              <div className="plant-details">
                <h2 className="plant-name">{plant.name}</h2>
                <p className="plant-scientific-name">{plant.scientificName}</p>
                <p>{plant.description}</p>
                <div className="plant-bottom-row">
                  <p>${plant.price}</p>
                  <p>☀️ {plant.light}</p>
                  <p>💦 {plant.watering}x/month</p>
                </div>
                <button
                  className="plant-button"
                  onClick={() => this.props.addToCart(plant)}
                >
                  Add to cart
              </button>
              </div>
            </div>
          ))}
        </main>
      </>
    )
  }
}