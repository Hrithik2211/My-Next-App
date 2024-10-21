import React from 'react';
import Image from 'next/image';
import AdmitSpotLogo from '../svgfiles/AdmitSpotLogo';
import Location from '../svgfiles/Location';
import Phone from '../svgfiles/Phone';
import Email from '../svgfiles/Email';
import Linkedin from '../svgfiles/Linkedin';
import Instagram from '../svgfiles/Instagram';
import Whatsapp from '../svgfiles/Whatsapp';
import Facebook from '../svgfiles/Facebook';
import Youtube from '../svgfiles/Youtube';
import Tiktok from '../svgfiles/Tiktok';
function Footer() {
  return (
    <div>
      <Image
        src="/assets/footerImage.png"
        alt="Footer Image"
        width={1280}
        height={212}
        quality={100}
        className="hidden md:block"
      />

      <footer className="bg-gray-800 text-white py-8 px-10 ">
        <div className="container mx-auto grid w-full grid-cols-1 md:grid-cols-5 gap-8 px-4">
          {/* First Column - Company Info */}
          <div>
            <div className="flex items-center space-x-2">
              <AdmitSpotLogo />
              <span className="font-bold text-lg">AdmitSpot</span>
            </div>
            <p className="mt-2">© 2023 AdmitSpot, Inc. All rights reserved.</p>

            {/* Social Media Icons for Mobile */}
            <div className="flex justify-center space-x-6 mt-4 md:hidden">
              <a href="#" className="hover:text-blue-300">
                <Linkedin />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Instagram />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Whatsapp />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Facebook />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Youtube />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Tiktok />
              </a>
            </div>

            <div className="mt-4">
              <div className="flex items-start space-x-2">
                <Location />
                <p>
                  Ontario, Canada{' '}
                  <a href="#" className="text-blue-300">
                    Get Directions
                  </a>
                </p>
              </div>

              <div className="flex items-start space-x-2 mt-2">
                <Location />
                <p>
                  New Brunswick, Canada{' '}
                  <a href="#" className="text-blue-300">
                    Get Directions{' '}
                  </a>
                </p>
              </div>

              <div className="flex items-start space-x-2 mt-2">
                <Phone />
                <p>+1-9057837708</p>
              </div>

              <div className="flex items-start space-x-2 mt-2">
                <Email />
                <p>info@admitspot.com</p>
              </div>
            </div>
          </div>

          {/* Second Column - Company */}
          <div>
            <h3 className="font-semibold mb-4 text-blue-300">Company</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-300">
                  About us
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-blue-300">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column - Solutions */}
          <div>
            <h3 className="font-semibold mb-4 text-blue-300">Solutions</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Students
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-blue-300">
                  Universities
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-blue-300">
                  Employers
                </a>
              </li>
            </ul>
          </div>
          {/* Solutions 2 */}

          {/* Fourth Column - Support */}
          <div>
            <h3 className="font-semibold mb-4 text-blue-300">Support</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Immigration services
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-blue-300">
                  Blogs
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-blue-300">
                  Virtual offices
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-blue-300">Legal</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Terms and Conditions
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-blue-300">
                  Privacy Policy
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-blue-300">
                  Cookies Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons for Desktop */}
        <div className="container mx-auto flex justify-center space-x-6 mt-8 hidden md:flex">
          <a href="#" className="hover:text-blue-300">
            <Linkedin />
          </a>
          <a href="#" className="hover:text-blue-300">
            <Instagram />
          </a>
          <a href="#" className="hover:text-blue-300">
            <Whatsapp />
          </a>
          <a href="#" className="hover:text-blue-300">
            <Facebook />
          </a>
          <a href="#" className="hover:text-blue-300">
            <Youtube />
          </a>
          <a href="#" className="hover:text-blue-300">
            <Tiktok />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
