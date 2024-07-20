import React, { useState, useEffect } from "react";
import "../Style/feedback.css";

const FeedbackModal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [rating, setRating] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingChange = (value) => {
    setRating(value === rating ? null : value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    // Send the data to Formspree
    fetch('https://formspree.io/f/xeojeqoa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        rating: rating,
        feedback: feedback,
        _replyto: email
      })
    })
    .then(response => {
      if (response.ok) {
        setIsSubmitted(true);
        window.alert("Thank you for your feedback!");

        // Reset form fields
        setRating(null);
        setName("");
        setEmail("");
        setFeedback("");
      } else {
        window.alert("There was an error submitting your feedback. Please try again.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      window.alert("There was an error submitting your feedback. Please try again.");
    });
  };

  return (
    <div className="feedback-wrapper">
      <div className="feedback-form">
        <div>
          <h2>We'd Love Your Thoughts!</h2>
          <p className="para">
            Your feedback is important. Let us know your thoughts and how <strong>CareerZunction</strong> can do better.
          </p>
          <div>
            <p className="rate-para">
              <strong>Rate Your Experience</strong>
            </p>
            <div className="rating-container">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={value <= rating ? "active" : ""}
                  onClick={() => handleRatingChange(value)}
                >
                  {value <= rating ? "★" : "☆"}
                </button>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Type your name here..."
              required
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email..."
              required
            />
            <label htmlFor="feedback">Feedback</label>
            <textarea
              id="feedback"
              rows="4"
              value={feedback}
              onChange={handleFeedbackChange}
              placeholder="Let us know your thoughts, suggestions, or concerns..."
              required
            ></textarea>
            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
