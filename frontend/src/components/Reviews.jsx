import styled from "styled-components";

export const Reviews = () => {
  const reviews = [
    {
      name: "Emily Vidal",
      date: "March 15, 2020",
      text: "Fantastic stay! Wonderful service and beautiful views. Highly recommend Sunside Hotel.",
    },
    {
      name: "Michael Smith",
      date: "April 2, 2021",
      text: "Impeccable rooms and friendly staff. Our stay at Sunside was perfect!",
    },
    {
      name: "Jessica Dahlin",
      date: "May 10, 2022",
      text: "Loved the ambiance and hospitality. Sunside Hotel exceeded all our expectations.",
    },
    {
      name: "David Williams",
      date: "May 25, 2023",
      text: "Great location and excellent amenities. We had a fantastic time at Sunside.",
    },
    {
      name: "Sarah Huang",
      date: "June 1, 2024",
      text: "Amazing experience! Clean, comfortable, and welcoming. Sunside is the best hotel ever.",
    },
  ];

  return (
    <ReviewContainer>
      {reviews.map((review, index) => (
        <ReviewItem key={index}>
          <Quotes>
            <ReviewText>{review.text}</ReviewText>
          </Quotes>
          <br />
          <ReviewerInfo>
            {review.name} - {review.date}
          </ReviewerInfo>
        </ReviewItem>
      ))}
    </ReviewContainer>
  );
};

// Styled components
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  padding: 30px 0;
  border-radius: 8px;
  max-width: 1200px;
  margin: 20px auto;
  `;

const Quotes = styled.div`
  position: relative;
  margin: 10px 20px;
  
  :before {
    position: absolute;
    color: #d3af97;
    content: open-quote;
    font-size: 4em;
    margin-left: -0.6em;
    margin-top: -0.4em;
  }
  
  :after {
    position: absolute;
    content: close-quote;
    color: #d3af97;
    font-size: 4em;
    bottom: 0;
    right: 20px;
    margin-right: -0.6em;
    margin-bottom: -0.8em;
  }
  `;

const ReviewItem = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: #44554b;
  border: 0px solid #faf9f9;
  border-radius: 8px;
  height: 100%;
  margin: 20px;
  padding: 20px;
  width: 300px;
  min-height: 210px;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ReviewText = styled.p`
  display: inline;
  font-size: 1rem;
  color: #333;
  font-style: italic;
`;

const ReviewerInfo = styled.div`
  font-size: 0.875rem;
  color:#d3af97;
  text-align: right;
`;
