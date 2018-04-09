import React from 'react'

import {connect} from 'react-redux'

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js'

import CategoryForm from '../category-form'

class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.categoryCreate({title: '1'})
    this.props.categoryCreate({title: '2'})
    this.props.categoryCreate({title: '3'})
    this.props.categoryCreate({title: '4'})
  }

  render() {
    console.log('categories', this.props.categories)
    return (
      <main className='dashboard-container'>
        <h2> Dashboard </h2>
        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate}
        />

        {this.props.categories.map((item) =>
          <div key={item.id}>
            <h3> {item.title} </h3>
          </div>
        )}
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state,
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
