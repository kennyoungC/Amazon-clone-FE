import React, { useState } from "react"

const ReviewsForm = (props) => {
  const [review, setReview] = useState({
    rate: "",
    comment: "",
  })
  const { id } = props

  const handleSubmit = async (e) => {
    e.preventDefault()
    const apiUrl = `${process.env.REACT_APP_BE_URL}/reviews/${id}`
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      })
      if (response.ok) {
        const newReview = await response.json()
        props.onSetNewReview(newReview)
      } else {
        throw new Error("Something went wrong")
      }
    } catch (error) {
      console.log(error)
    }
    setReview({
      rate: "",
      comment: "",
    })
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-full max-w-xl bg-white rounded-lg px-4 pt-2"
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <h2 className=" pt-3 pb-2 text-gray-800 text-lg">Add a new Review</h2>
        <div className="w-full md:w-full  mb-2 mt-2">
          <textarea
            className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            name="comment"
            placeholder="Type Your Comment"
            required
            onChange={(e) => setReview({ ...review, comment: e.target.value })}
            value={review.comment}
          ></textarea>
        </div>

        <label htmlFor="rating">rating</label>
        <input
          onChange={(e) => setReview({ ...review, rate: +e.target.value })}
          value={review.rate}
          name="rating"
          type="number"
          className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          id="exampleNumber0"
          placeholder="Rate from 1-5"
          min={1}
          max={5}
        />
        <div className="w-full flex items-start md:w-full px-3">
          <div className="ml-auto py-3">
            <input
              type="submit"
              className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
              value="Post Review"
            />
          </div>
        </div>
      </div>
    </form>
  )
}

export default ReviewsForm
