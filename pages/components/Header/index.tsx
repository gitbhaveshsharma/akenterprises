import React from 'react';
import Link from 'next/link';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Header = () => {
  return (
    <div className="bg-blue-600 h-[25px] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full text-xs sm:text-sm">
          <div className="text-white">
            <span>Phone: +91 9660162221</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-white">
              <TrendingUpIcon fontSize="small" className="mr-2" />
              <Link
                href="https://economictimes.indiatimes.com/commoditysummary/symbol-ALUMINIUM.cms?from=mdr"
                className="hover:text-gray-200 transition-colors"
              >
                <span className="hidden sm:inline">MARKET PRICE AL</span>
              </Link>
            </div>
            {/* <div className="flex items-center text-white">
              <TrendingUpIcon fontSize="small" className="mr-2" />
              <Link
                href="https://economictimes.indiatimes.com/commoditysummary/symbol-COPPER.cms?from=mdr"
                className="hover:text-gray-200 transition-colors"
              >
                <span className="hidden sm:inline">MARKET PRICE CU</span>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
