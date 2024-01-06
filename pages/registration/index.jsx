import React from "react";
import TransitionEffect from "../../components/TransitionEffect";
import Button from "../../components/Button";
import { FaLongArrowAltRight } from "react-icons/fa";
const index = () => {
  return (
    <div className="w-full px-4 lg:px-16 mt-5">
      <TransitionEffect />
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h2>
            Registration <span>Guidelines</span>
          </h2>
        </div>
        <div className="mt-14 justify-center flex text-gray-600 ">
          <table>
            <thead>
              <tr>
                <th></th>
                <th colSpan="2" className="text-lg">
                  For Indian Authors and Deligates (in INR)
                </th>
                <th colSpan="2" className="text-lg">
                  For Foreign Authors and Deligates (in USD)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-lg font-bold">Researchers from Industry</td>
                <td colSpan="2">12,000</td>
                <td>250</td>
              </tr>

              <tr>
                <td className="text-lg font-bold">
                  Faculty from an academic institution
                </td>
                <td colSpan="2">10,000</td>
                <td>200</td>
              </tr>

              <tr>
                <td className="text-lg font-bold">
                  Students (UG/PG)/ Research Scholar
                </td>
                <td colSpan="2">8,000</td>
                <td>150</td>
              </tr>

              <tr>
                <td className="text-lg font-bold">Attendee only</td>
                <td colSpan="2">2,000</td>
                <td>50</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-center mt-3">
          <ul
            role="list"
            className="marker:text-secondary list-disc lg:w-[60rem] text-justify">
            <li>
              If author submit more than one paper, he/she will receive
              significant concession in the second registration. For more
              details please contact Organizing Secretary.
            </li>
            <li>
              Additional Fees will be charged for publication of extended
              version of manuscripts according to the Journal.
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center mt-10">
          <a href="https://forms.gle/jXHp1gtJnaxAhUzP7" target="_blank">
            <Button className="flex items-center gap-2 shadow-md shadow-secondary">
              Click Here to Register <FaLongArrowAltRight size={20} />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
