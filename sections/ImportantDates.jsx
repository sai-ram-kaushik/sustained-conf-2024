import React from "react";

const Dates = () => {
  return (
    <section>
      <div className="text-center">
        <h3>
          Important <span>Dates</span>
        </h3>
      </div>

      <div className="mt-10 justify-center  flex text-gray-600">
        <table className="text-gray-600">
          <tr className="text-2xl">
            <td>Paper Submission Deadline:</td>
            <td>
              25<sup>st</sup> March, 2024
            </td>
          </tr>
          <tr className="text-2xl">
            <td>Acceptance Notification:</td>
            <td>
              25<sup>th</sup> April, 2024
            </td>
          </tr>
          <tr className="text-2xl">
            <td>Camera Ready Paper Submission Deadline:</td>
            <td>
              25<sup>th</sup> May, 2024
            </td>
          </tr>
          <tr className="text-2xl">
            <td>Early Registration Deadline</td>
            <td>
              25<sup>th</sup> June, 2024
            </td>
          </tr>
          <tr className="text-2xl">
            <td>Conference Dates:</td>
            <td>
              30<sup>th</sup> & 31<sup>st</sup> August, 2024
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default Dates;
