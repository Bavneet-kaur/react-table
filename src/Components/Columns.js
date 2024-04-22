export const COLUMNS = [
  {
    Header: "CD RANK",
    Footer: "CD Rank",
    Justify: "center",
    accessor: "id",

    Cell: ({ row }) => {
      return (
        <p className="text-3xl text-center font-sans font-bold text-stone-900">
          {row.original.id}
        </p>
      );
    },
    disableFilters: true,
  },

  {
    Header: "Colleges",
    Footer: "Colleges",
    accessor: "collegeName",
    Cell: ({ row }) => {
      return (
        <div className="relative flex w-full max-w-[96rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 md-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-lg bg-clip-border">
            <img
              src={row.original.thumb}
              alt={row.original.collegeName}
              className="relative inline-block h-[100px] w-[100px]  object-cover object-center"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h3 className="block font-sans text-3xl antialiased font-bold leading-snug tracking-wide text-teal-600">
                  {row.original.collegeName}
                </h3>
              </div>
              <div className="inline-flex space-x-48">
                <p className="font-sans text-2xl antialiased font-light leading-normal text-blue-gray-900">
                  {row.original.collegeAddress}
                </p>
                <span className="flex">
                  {row.original.feature === true ? (
                    <button
                      type="button"
                      className="text-white text-xl bg-rose-500 dark:bg-rose-400 place-items-end cursor-not-allowed font-semibold rounded-lg py-2 px-3 text-center"
                      disabled
                    >
                      FEATURED
                    </button>
                  ) : (
                    <span style={{ color: "red" }}></span>
                  )}
                  {/* Add badge here */}
                  {row.value === true && (
                    <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300"></span>
                  )}
                </span>
              </div>
            </div>
          </div>

          <br />
          <div className="block align-baseline ">
            <ul className="flex flex-wrap space-x-12 text-2xl dark:text-gray-700">
              <li>
                <a
                  href="#"
                  className="inline-flex me-4  text-amber-600 md:me-6 hover:text-indigo-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-9 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                    />
                  </svg>
                  Apply Now
                </a>
              </li>
              <li>
                <span>
                  <button className="inline-flex me-4 md:me-6 text-teal-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-9 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                    Download Broucher
                  </button>
                </span>
              </li>
              <li>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-7 h-6 border-gray-300 rounded  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="default-checkbox" className="ms-1 text-stone-800">
                  Add to Compare
                </label>
              </li>
            </ul>
          </div>
        </div>
      );
    },
  },
  {
    Header: "Course Fee",
    Footer: "Course fee",
    accessor: "courseFee",

    Cell: function Fee({ row }) {
      return (
        <div className="relative flex justify-evenly w-full max-w-[24rem] flex-col bg-transparent bg-clip-border text-gray-700 shadow-none">
          <p className="inline-flex place-content-start font-sans text-3xl antialiased font-bold leading-snug tracking-wide text-teal-600">
            {row.original.courseFee}
          </p>
          <p className="text-stone-500 text-2xl">{row.original.subject}</p>
          <p className="text-stone-500 text-2xl">- 1st year Fee</p>
          <br />
          <a
            href="#"
            className="inline-flex me-4  md:me-6  align-baseline text-xl text-amber-500 hover:text-rose-600"
          >
            <svg
              class="h-7 w-9 text-amber-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <polyline points="15 4 19 4 19 8" />{" "}
              <line x1="14.75" y1="9.25" x2="19" y2="4" />{" "}
              <line x1="5" y1="19" x2="9" y2="15" />{" "}
              <polyline points="15 19 19 19 19 15" />{" "}
              <line x1="5" y1="5" x2="19" y2="19" />
            </svg>
            Compare Course Fee
          </a>
        </div>
      );
    },
  },
  {
    Header: "Placements",
    Footer: "Placements",
    accessor: "placementRate",

    Cell: function placement({ row }) {
      return (
        <div className="relative flex justify-evenly w-full max-w-[24rem] flex-col bg-transparent bg-clip-border text-gray-700 shadow-none">
          <p className="inline-flex text-teal-600 text-3xl font-sans font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="red"
              className="w-9 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 18.75 7.5-7.5 7.5 7.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 7.5-7.5 7.5 7.5"
              />
            </svg>

            {row.original.maxiSalary}
          </p>
          <p className="text-stone-500 text-2xl"> Maximum Salary</p>

          <p className="text-indigo-400 text-center font-inter font-bold text-2xl">
            <b>Placement Rate - {row.original.placementRate}%</b>
          </p>

          <p className="inline-flex text-teal-600 text-3xl font-sans font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="red"
              className="w-9 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>

            {row.original.miniSalary}
          </p>
          <p className="text-stone-500 text-2xl">Minimum Salary</p>
          <br />
          <a
            href="#"
            className=" inline-flex me-4  md:me-6  align-baseline text-xl text-amber-500 hover:text-rose-600"
          >
            <svg
              class="h-7 w-9 text-amber-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <polyline points="15 4 19 4 19 8" />{" "}
              <line x1="14.75" y1="9.25" x2="19" y2="4" />{" "}
              <line x1="5" y1="19" x2="9" y2="15" />{" "}
              <polyline points="15 19 19 19 19 15" />{" "}
              <line x1="5" y1="5" x2="19" y2="19" />
            </svg>
            Compare Placement
          </a>
        </div>
      );
    },
  },
  {
    Header: "User Reviews",
    Footer: "User Reviews",
    accessor: "userReview",
    Cell: function user({ row }) {
      return (
        <div className="relative justify-evenly w-full max-w-[24rem] flex-col bg-transparent bg-clip-border text-gray-700 shadow-none">
          <p className="inline-flex font-sans text-3xl antialiased font-semibold leading-snug tracking-wide text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-9 h-8 fill-amber-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            {row.original.userReview}
          </p>
          <p className="text-stone-500 text-2xl">{row.original.reviewBase}</p>
          <br />
          <center>
            <button
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              className="inline-flex text-rose-500 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-semibold rounded-lg text-2xl px-5 py-2.5 me-2 mb-2"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="green"
                className="w-10 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>

              {row.original.reviewbtn}
              <svg
                class="h-7 w-9 text-rose-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </center>
        </div>
      );
    },
  },

  {
    Header: "Rankings",
    Footer: "Rankings",
    accessor: "ranking",
    Cell: function ranking({ row }) {
      return (
        <div className="relative flex justify-evenly w-full max-w-[24rem] flex-col bg-transparent bg-clip-border text-gray-700 shadow-none">
          <p className="text-gray-900 text-2xl">
            {row.original.ranking} - <b>TIMES WEEK</b>
          </p>
          <br />
          <br />
          <div className="flex -space-x-4 rtl:space-x-reverse">
            <img
              className="w-14 h-13 border-2 border-white rounded-full dark:border-gray-800"
              src="https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=1024&format=png&auto=webp&s=c4e9abc47d193474a2fa1a7e337d9d9340dce947"
              alt=""
            />
            <img
              className="w-14 h-13 border-2 border-white rounded-full dark:border-gray-800"
              src="https://i.stack.imgur.com/5Kgaq.jpg?s=256&g=1"
              alt=""
            />
            <img
              className="w-14 h-13 border-2 border-white rounded-full dark:border-gray-800"
              src="https://images.generated.photos/H82ToIBkQCgmHQKJj_3V6ublzTFpUT3Ph5rluKCG5RE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTQzNjgyLmpwZw.jpg"
              alt=""
            />
            <img
              className="w-14 h-13 border-2 border-white rounded-full dark:border-gray-800"
              src="https://openexpoeurope.com/wp-content/uploads/2017/05/thomas-person.jpg"
              alt=""
            />
            <a
              className="flex items-center justify-center w-14 h-13 text-xl font-semibold text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
              href="#"
            >
              +99
            </a>
          </div>
        </div>
      );
    },
  },
];
