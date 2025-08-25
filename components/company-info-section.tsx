import type React from "react"

const CompanyInfoSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Welcome Section */}
          <div className="lg:pr-8">
            <div className="mb-8">
              <h2 className="text-sm text-gray-600 mb-2 uppercase tracking-wide">WELCOME TO</h2>
              <h3 className="text-4xl font-bold text-green-800 mb-6">PuraVida</h3>
            </div>
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                <strong>PuraVida</strong> is manufacturer and supplier of a wide array of{" "}
                <strong>Premium Health Products, Natural Supplements and many more.</strong>{" "}
                <a href="/about" className="text-green-800 hover:text-green-600">
                  Read More...
                </a>
              </p>
            </div>
            <div>
              <p className="text-gray-800 font-semibold mb-4">GET IN TOUCH WITH US FOR BEST DEALS</p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition-colors font-semibold">
                Contact Us
              </button>
            </div>
          </div>

          {/* Company Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nature of Business */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-800 flex items-center">
              <div className="w-16 h-16 mr-4 flex-shrink-0 flex items-center justify-center">
                <svg width="51" height="39" viewBox="0 0 51 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.313 11.7863C24.5948 11.7866 23.8789 11.706 23.1788 11.546L19.5765 16.0489C19.4363 16.2239 19.3601 16.4416 19.3606 16.6658C19.3611 16.8901 19.4382 17.1074 19.5791 17.2818C19.7201 17.4562 19.9164 17.5772 20.1356 17.6247C20.3547 17.6722 20.5835 17.6434 20.784 17.5431L28.9409 13.4647C29.0346 13.4169 29.1369 13.3881 29.2417 13.3801C29.3466 13.372 29.452 13.3847 29.5519 13.4176C29.6518 13.4505 29.7442 13.5028 29.8238 13.5715C29.9034 13.6403 29.9686 13.7241 30.0156 13.8182C30.0627 13.9122 30.0906 14.0147 30.0979 14.1196C30.1051 14.2245 30.0916 14.3298 30.0579 14.4295C30.0243 14.5291 29.9712 14.6211 29.9019 14.7002C29.8325 14.7792 29.7482 14.8438 29.6538 14.8901L25.3301 17.0516L35.0405 26.762C35.0641 26.7856 35.0867 26.8098 35.1091 26.8341L42.1884 20.0765L38.9812 9.38574C38.9411 9.39214 38.9005 9.39548 38.8599 9.3957H31.6305C29.8875 10.9378 27.6402 11.7882 25.313 11.7863Z"
                    fill="#F5F5F5"
                    stroke="#2d5c00"
                    strokeWidth="2.7"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xs text-gray-600 mb-1 uppercase font-medium">Nature of Business</h2>
                <h3 className="text-lg font-bold text-green-800">Manufacturer & Supplier</h3>
              </div>
            </div>

            {/* Number of Employees */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-800 flex items-center">
              <div className="w-16 h-16 mr-4 flex-shrink-0 flex items-center justify-center">
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.0301 13.633C11.6772 13.633 13.2103 12.9788 14.3533 11.7913C14.6443 11.2119 15.0151 10.6794 15.4521 10.2088C15.838 9.39969 16.0341 8.53208 16.0341 7.62899C16.0341 4.31839 13.3407 1.625 10.0301 1.625C6.71952 1.625 4.02612 4.31839 4.02612 7.62899C4.02612 10.9396 6.71952 13.633 10.0301 13.633Z"
                    stroke="#2d5c00"
                    strokeWidth="3"
                  />
                  <path
                    d="M20.4378 20.8381C23.7484 20.8381 26.4418 18.1447 26.4418 14.8341C26.4418 11.5235 23.7484 8.83008 20.4378 8.83008C17.1272 8.83008 14.4338 11.5235 14.4338 14.8341C14.4338 18.1447 17.1272 20.8381 20.4378 20.8381Z"
                    stroke="#2d5c00"
                    strokeWidth="3"
                  />
                  <path
                    d="M26.5206 11.7913C27.6636 12.9788 29.1967 13.633 30.8438 13.633C34.1544 13.633 36.8478 10.9396 36.8478 7.62899C36.8478 4.31839 34.1544 1.625 30.8438 1.625C27.5332 1.625 24.8398 4.31839 24.8398 7.62899C24.8398 8.532 25.0359 9.39953 25.4218 10.2086C25.8588 10.6793 26.2296 11.2118 26.5206 11.7913Z"
                    stroke="#2d5c00"
                    strokeWidth="3"
                  />
                  <path
                    d="M30.8442 14.4336C29.5751 14.4336 28.3598 14.708 27.2279 15.2492C27.0643 17.9515 25.3168 20.2317 22.9036 21.1738C26.7861 22.2546 29.6434 25.8217 29.6434 30.044V31.2448H39.2498V22.8392C39.2498 18.2043 35.4791 14.4336 30.8442 14.4336Z"
                    stroke="#2d5c00"
                    strokeWidth="3"
                  />
                  <path
                    d="M17.9712 21.1738C15.558 20.2316 13.8105 17.9515 13.6468 15.2492C12.515 14.708 11.2997 14.4336 10.0306 14.4336C5.39575 14.4336 1.625 18.2043 1.625 22.8392V31.2448H11.2314V30.044C11.2314 25.8217 14.0887 22.2546 17.9712 21.1738Z"
                    stroke="#2d5c00"
                    strokeWidth="3"
                  />
                  <path
                    d="M20.4383 21.6377C15.8035 21.6377 12.0327 25.4085 12.0327 30.0433V38.4489H28.8439V30.0433C28.8439 25.4085 25.0732 21.6377 20.4383 21.6377Z"
                    stroke="#2d5c00"
                    strokeWidth="3"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xs text-gray-600 mb-1 uppercase font-medium">Total Number of Employees</h2>
                <h3 className="text-lg font-bold text-green-800">26 to 50 People</h3>
              </div>
            </div>

            {/* Year of Establishment */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-800 flex items-center">
              <div className="w-16 h-16 mr-4 flex-shrink-0 flex items-center justify-center">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.5326 35.8138H18.5757L18.4548 12.5745L10.1127 9.73412L2.375 12.5745V35.8138H14.1024V5.34447L22.2027 2.375L30.1822 5.34447V35.8138H36.2272L36.1063 16.3186L30.1822 14.382L23.5326 16.1895V35.8138Z"
                    stroke="#2d5c00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xs text-gray-600 mb-1 uppercase font-medium">Year of Establishment</h2>
                <h3 className="text-lg font-bold text-green-800">2018</h3>
              </div>
            </div>

            {/* Legal Status */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-800 flex items-center">
              <div className="w-16 h-16 mr-4 flex-shrink-0 flex items-center justify-center">
                <svg width="39" height="41" viewBox="0 0 39 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M37.2136 20.5051H36.6078L31.5565 6.05999H32.3586C32.5607 6.05999 32.7546 5.9797 32.8975 5.83677C33.0404 5.69385 33.1207 5.5 33.1207 5.29787C33.1207 5.09575 33.0404 4.9019 32.8975 4.75898C32.7546 4.61605 32.5607 4.53576 32.3586 4.53576H20.201V1.88712C20.201 1.68499 20.1207 1.49114 19.9778 1.34822C19.8349 1.20529 19.641 1.125 19.4389 1.125C19.2368 1.125 19.0429 1.20529 18.9 1.34822C18.7571 1.49114 18.6768 1.68499 18.6768 1.88712V4.53576H6.56044C6.35831 4.53576 6.16446 4.61605 6.02154 4.75898C5.87861 4.9019 5.79832 5.09575 5.79832 5.29787C5.79832 5.5 5.87861 5.69385 6.02154 5.83677C6.16446 5.9797 6.35831 6.05999 6.56044 6.05999H7.32256L2.30517 20.5051H1.66301C1.55791 20.5062 1.45408 20.5282 1.35756 20.5698C1.26104 20.6114 1.17376 20.6718 1.10081 20.7474C0.17754 21.7107 1.98409 28.7721 8.40334 28.7721C15.1885 28.7721 17.2313 20.5063 15.1437 20.5063H14.5378L9.48775 6.05999H18.6768V33.3848H8.68565C8.48352 33.3848 8.28967 33.4651 8.14675 33.608C8.00382 33.751 7.92353 33.9448 7.92353 34.1469V38.8008C7.92353 39.003 8.00382 39.1968 8.14675 39.3397C8.28967 39.4827 8.48352 39.5629 8.68565 39.5629H30.1922C30.3943 39.5629 30.5882 39.4827 30.7311 39.3397C30.874 39.1968 30.9543 39.003 30.9543 38.8008V34.1821C30.9543 33.9799 30.874 33.7861 30.7311 33.6432C30.5882 33.5002 30.3943 33.4199 30.1922 33.4199H20.201V6.05999H29.3901L24.3739 20.5051C23.8517 20.5051 23.5258 20.4252 23.2107 20.7474C22.2475 21.7107 24.0589 28.7721 30.4733 28.7721C31.4591 28.7737 32.4356 28.5807 33.3467 28.2042C34.2578 27.8277 35.0856 27.275 35.7827 26.5779C36.4798 25.8808 37.0325 25.053 37.409 24.1419C37.7855 23.2308 37.9785 22.2543 37.977 21.2685C37.9771 21.1682 37.9575 21.0688 37.9192 20.9761C37.8809 20.8835 37.8246 20.7993 37.7537 20.7283C37.6828 20.6574 37.5986 20.6012 37.5059 20.5629C37.4132 20.5246 37.3139 20.505 37.2136 20.5051ZM2.5063 22.0294H14.3428C13.4195 28.972 3.38838 28.8509 2.5063 22.0294ZM3.91059 20.5051L8.40455 7.62543L12.8985 20.5051H3.91059ZM29.4252 37.9987H9.44777V34.909H29.4252V37.9987ZM30.4684 7.62422L34.9624 20.5039H25.9793L30.4684 7.62422ZM24.5787 22.0294H36.4151C35.5282 28.972 25.4571 28.8509 24.5787 22.0294Z"
                    fill="#2d5c00"
                    stroke="#2d5c00"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xs text-gray-600 mb-1 uppercase font-medium">Legal Status of Firm</h2>
                <h3 className="text-lg font-bold text-green-800">Private Limited Company</h3>
              </div>
            </div>

            {/* Annual Turnover */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-800 flex items-center">
              <div className="w-16 h-16 mr-4 flex-shrink-0 flex items-center justify-center">
                <svg width="50" height="40" viewBox="0 0 57 47" fill="none">
                  <path
                    d="M42.0076 39.8927L42.0547 39.8534C42.0964 39.8417 42.1681 39.8291 42.2671 39.8274C42.2782 39.8351 42.2978 39.851 42.322 39.8799L42.3446 39.9071L42.3686 39.9332C42.3874 39.9537 42.4069 39.9895 42.4016 40.0539C42.3957 40.1247 42.363 40.1738 42.3363 40.1961L42.3363 40.196L42.3284 40.2027C38.3957 43.5261 33.3489 45.3576 28.1908 45.3576C16.0435 45.3576 6.2323 35.5415 6.2323 23.4584V21.622V20.122H4.7323H1.60476L6.36912 12.5784C6.37526 12.5779 6.38252 12.5775 6.39098 12.5775C6.3992 12.5775 6.40691 12.5776 6.41411 12.5778L11.2939 20.1812H8.16813H6.66813V21.6812V23.5176C6.66813 35.3644 16.2847 44.981 28.1315 44.981C33.2345 44.981 38.1337 43.1316 42.0076 39.8927ZM42.0292 39.8618C42.0281 39.8623 42.0275 39.8625 42.0273 39.8626C42.0271 39.8627 42.0276 39.8624 42.0292 39.8618Z"
                    stroke="#2d5c00"
                    strokeWidth="3"
                  />
                  <path
                    d="M50.0307 25.2948V26.7948H51.5307H54.7162L49.8721 34.3743L44.9682 26.6764H48.0948H49.5948V25.1764V23.34C49.5948 11.4932 39.9783 1.8766 28.1315 1.8766C23.0285 1.8766 18.1293 3.72604 14.2553 6.96489L14.2291 6.98683L14.2039 7.00995C14.1833 7.02876 14.1475 7.0483 14.0832 7.04293C14.0124 7.03703 13.9633 7.00438 13.941 6.97769L13.9183 6.95048L13.8944 6.92438C13.8756 6.90385 13.8561 6.86804 13.8614 6.80371C13.8673 6.7329 13.9 6.68376 13.9267 6.66152L13.9267 6.66154L13.9346 6.65488C17.8672 3.33151 22.9141 1.5 28.0722 1.5C40.2146 1.5 50.0307 11.3704 50.0307 23.4585V25.2948Z"
                    stroke="#2d5c00"
                    strokeWidth="3"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xs text-gray-600 mb-1 uppercase font-medium">Annual Turnover</h2>
                <h3 className="text-lg font-bold text-green-800">5 - 10 Cr</h3>
              </div>
            </div>

            {/* Import Export Code */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-800 flex items-center">
              <div className="w-16 h-16 mr-4 flex-shrink-0 flex items-center justify-center">
                <svg width="30" height="28" viewBox="0 0 20 18" fill="none">
                  <path
                    d="M0 6.5V1C0 0.44772 0.44772 0 1 0H19C19.5523 0 20 0.44772 20 1V6.5C18.6193 6.5 17.5 7.6193 17.5 9C17.5 10.3807 18.6193 11.5 20 11.5V17C20 17.5523 19.5523 18 19 18H1C0.44772 18 0 17.5523 0 17V11.5C1.38071 11.5 2.5 10.3807 2.5 9C2.5 7.6193 1.38071 6.5 0 6.5ZM2 4.96776C3.48172 5.70411 4.5 7.2331 4.5 9C4.5 10.7669 3.48172 12.2959 2 13.0322V16H18V13.0322C16.5183 12.2959 15.5 10.7669 15.5 9C15.5 7.2331 16.5183 5.70411 18 4.96776V2H2V4.96776ZM7 6H13V8H7V6ZM7 10H13V12H7V10Z"
                    fill="#2d5c00"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xs text-gray-600 mb-1 uppercase font-medium">Import Export Code (IEC)</h2>
                <h3 className="text-lg font-bold text-green-800">PURPV2018H</h3>
              </div>
            </div>

            {/* GST Number */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-800 flex items-center">
              <div className="w-16 h-16 mr-4 flex-shrink-0 flex items-center justify-center">
                <svg width="30" height="28" viewBox="0 0 20 18" fill="none">
                  <path
                    d="M0 6.5V1C0 0.44772 0.44772 0 1 0H19C19.5523 0 20 0.44772 20 1V6.5C18.6193 6.5 17.5 7.6193 17.5 9C17.5 10.3807 18.6193 11.5 20 11.5V17C20 17.5523 19.5523 18 19 18H1C0.44772 18 0 17.5523 0 17V11.5C1.38071 11.5 2.5 10.3807 2.5 9C2.5 7.6193 1.38071 6.5 0 6.5ZM2 4.96776C3.48172 5.70411 4.5 7.2331 4.5 9C4.5 10.7669 3.48172 12.2959 2 13.0322V16H18V13.0322C16.5183 12.2959 15.5 10.7669 15.5 9C15.5 7.2331 16.5183 5.70411 18 4.96776V2H2V4.96776ZM7 6H13V8H7V6ZM7 10H13V12H7V10Z"
                    fill="#2d5c00"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xs text-gray-600 mb-1 uppercase font-medium">GST No.</h2>
                <h3 className="text-lg font-bold text-green-800">27PURPV2018H1ZX</h3>
              </div>
            </div>

            {/* Certification */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-800 flex items-center">
              <div className="w-16 h-16 mr-4 flex-shrink-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
              </div>
              <div>
                <h2 className="text-xs text-gray-600 mb-1 uppercase font-medium">ISO Certified</h2>
                <h3 className="text-lg font-bold text-green-800">Quality Assured</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyInfoSection
