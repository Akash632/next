import React from 'react'

type params = {
    params : {
        productId : string
        reviewId : string
    }
}
const ReviewsDetails = ({params} : params) => {
  return (
    <div>
        <h1>Reviews {params.reviewId}</h1>
    </div>
  )
}

export default ReviewsDetails