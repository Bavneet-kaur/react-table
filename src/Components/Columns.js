import "./tableStyle.css";
// import { BsArrowRightCircle } from "react-icons/bs";
import { CiSaveDown2 } from "react-icons/ci";
import {
  BsArrowReturnRight,
  BsCaretUpFill,
  BsCaretDownFill,
} from "react-icons/bs";
import { GiRoundStar } from "react-icons/gi";

export const COLUMNS = [
  {
    Header: "CD Rank",
    Footer: "CD Rank",
    id: "id",
    accessor: "id",
    disableFilters: true,
  },
  {
    Header: "Colleges",
    Footer: "Colleges",
    accessor: "collegeName",
    id: "college",
    Cell: ({ row }) => {
      return (
        <>
          <div className="card-header">
            <img
              height={140}
              width={140}
              src="https://static.thenounproject.com/png/213486-200.png"
              alt={row.original.collegeName}
            />
            <div className="card-body">
              <h2 className="card-title">{row.original.collegeName}</h2>
              <p className="card-text">{row.original.collegeAddress}</p>
              {/* <button class="btn">
                
                {<span class="ribbon">Featured</span>}
              </button> */}
            </div>
            <div className="card-footer">
              <ul className="nav">
                <li className="nav-item">
                  <BsArrowReturnRight />
                  <a className="nav-link" href="#">
                    Apply Now
                  </a>
                </li>
                <li className="nav-item">
                  <CiSaveDown2 />
                  <a className="nav-link" href="#">
                    Download Broucher
                  </a>
                </li>
                <li className="nav-item">
                  <form>
                    <input
                      type="checkbox"
                      id="compare"
                      name="compare"
                      value="compare"
                    />
                    <label for="compare">Add to Compare</label>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </>
      );
    },
  },
  {
    Header: "Course Fee",
    Footer: "Course fee",
    accessor: "courseFee",
    id: "fee",
  },
  {
    Header: "Placements",
    Footer: "Placements",
    accessor: "placementRate",
    id: "placements",
    Cell: function placement({ row }) {
      return (
        <div className="placements">
          <ul className="salary">
            <li>
              <BsCaretUpFill className="up" style={{ color: "red" }} />
              {row.original.highestSalary}
              <h3 style={{ textAlign: "center" }}>Highest Package</h3>
            </li>
            <li>
              <p
                className="placementRate"
                style={{ textAlign: "center", color: "blue" }}
              >
                {row.original.placementRate}% PR
              </p>
            </li>
            <li>
              <BsCaretDownFill className="down" style={{ color: "red" }} />
              {row.original.highestSalary}
              <h3 style={{ textAlign: "center" }}>Median Package</h3>
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    Header: "User Reviews",
    Footer: "User Reviews",
    accessor: "userReview",
    id: "reviews",
    Cell: function user({ row }) {
      return (
        <div className="user">
          {row.original.userReview}
          <GiRoundStar style={{ color: "yellow" }} />
          <br />
          <span className="review">#2 out of world in 2023</span>
        </div>
      );
    },
  },

  {
    Header: "Rankings",
    Footer: "Rankings",
    accessor: "ranking",
    id: "ranking",
    disableFilters: true,
  },
];
