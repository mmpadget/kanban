import React from 'react'

import {connect} from 'react-redux'

import {
  categoryCreate as categoryActionCreate,
} from '../../action/category-actions.js'

import CategoryForm from '../category-form'
import CategoryItem from '../category-item'

class DashboardContainer extends React.Component {
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
          <CategoryItem key={item.id} category={item} />
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
    categoryCreate: (category) => dispatch(categoryActionCreate(category)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer)
