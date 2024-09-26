import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const AskedQuestion = () => {
  const [visibleQuestion, setVisibleQuestion] = useState(null);

  const handleData = (questionIndex) => {
    setVisibleQuestion(
      visibleQuestion === questionIndex ? null : questionIndex
    );
  };

  return (
    <div className="asked-question-container">
      <div>
        <h2 onClick={() => handleData(1)}>
          How does the free trial work?
          <span className="icon">
            {visibleQuestion === 1 ? (
              <RiArrowDropUpLine />
            ) : (
              <RiArrowDropDownLine />
            )}
          </span>
        </h2>
        {visibleQuestion === 1 && (
          <p>
            Audible is a membership service that provides customers with a huge
            selection of audiobooks as well as podcasts, exclusive originals,
            and more. If you're new to Audible, you can take a free membership
            trial for 30 days. Your membership will automatically continue for
            ₹199/month after the first 30 days, and you can cancel anytime.
            Download the free Audible app to start listening on your iOS or
            Android device. You can also listen on any Alexa-enabled device.
          </p>
        )}
      </div>

      <div>
        <h2 onClick={() => handleData(2)}>
          What is included with my Audible Premium Plus membership?
          <span className="icon">
            {visibleQuestion === 2 ? (
              <RiArrowDropUpLine />
            ) : (
              <RiArrowDropDownLine />
            )}
          </span>
        </h2>
        {visibleQuestion === 2 && (
          <p>
            As an Audible member, your subscription includes:
            <ul>
              <li>
                1 credit a month to use on any title of your choice—yours to
                keep.
              </li>
              <li>
                Access to the Plus Catalogue—thousands of Audible Originals,
                audiobooks, and podcasts, including exclusive series.
              </li>
              <li>
                In addition, you can get exclusive access to our member-only
                sales and deals.
              </li>
            </ul>
          </p>
        )}
      </div>

      <div>
        <h2 onClick={() => handleData(3)}>
          Are there additional benefits for Amazon Prime members?
          <span className="icon">
            {visibleQuestion === 3 ? (
              <RiArrowDropUpLine />
            ) : (
              <RiArrowDropDownLine />
            )}
          </span>
        </h2>
        {visibleQuestion === 3 && (
          <p>
            Amazon Prime members can take a free 30-day trial and receive 2
            credits that can be used on any 2 titles of their choice. After the
            trial period, membership is ₹199/month for 1 credit per month.
          </p>
        )}
      </div>

      <div>
        <h2 onClick={() => handleData(4)}>
          What happens if I want to cancel?
          <span className="icon">
            {visibleQuestion === 4 ? (
              <RiArrowDropUpLine />
            ) : (
              <RiArrowDropDownLine />
            )}
          </span>
        </h2>
        {visibleQuestion === 4 && (
          <p>
            You can cancel your membership anytime at no cost. Titles added to
            your Library with a credit are yours to keep, even if you cancel.
          </p>
        )}
      </div>
    </div>
  );
};

export default AskedQuestion;
