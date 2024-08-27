import React from 'react';
import Heading from '../components/common/Heading';

export default function TermAndCondition() {
  return (
    <>
     
        <Heading heading="BOOKING TERMS AND CONDITIONS" title="Home" subtitle="CHECK IN AND CHECK OUT" />
        <div className="container-xxl">
          <section className="terms-section">
            <h2 className="terms-subtitle">Check In and Check Out</h2>
            <p>
              In respect of confirmed accommodation, check-in time is 14:00 hours and check-out time is 12:00 (Noon). 
              Failure to comply with these times without the consent of the Hotel may result in incurring an additional 
              charge of another full night's stay.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-subtitle">Cancellation Policy for Individual and Group Reservation</h2>
            <p>
              If the Client cancels individual reservations made before 24 hours prior to the arrival of the guest, then there shall 
              be no charge. Where individual reservations are cancelled in less than 24 hours before the arrival, then the Client shall 
              be charged one night no shows charge even if the guests have not arrived.
            </p>
            <p>
              Our cancellation policy for group reservation based on the arrival date is detailed as follows:
            </p>
            <ul className="terms-list">
              <li>One month before the arrival date: No charge</li>
              <li>In less than one month but before 21 days: 25% of the total one night cancellation charge shall apply</li>
              <li>In less than 21 days but before 14 days: 50% of the total one night cancellation charge shall apply</li>
              <li>In less than 14 days but before 7 days: 75% of the total one night cancellation charge shall apply</li>
              <li>In less than seven days: 100% of the total one night cancellation charge shall apply</li>
            </ul>
          </section>
        </div>
      
    </>
  );
}
