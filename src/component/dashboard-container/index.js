import React from 'react'

import {connect} from 'react-redux'

import {
  categoryCreate as categoryActionCreate,
  categoryUpdate as categoryActionUpdate,
  categoryDelete as categoryActionDelete,
} from '../../action/category-actions.js'

import CategoryForm from '../category-form'

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
    categoryCreate: (category) => dispatch(categoryActionCreate(category)),
    categoryUpdate: (category) => dispatch(categoryActionUpdate(category)),
    categoryDelete: (category) => dispatch(categoryActionDelete(category)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer)
