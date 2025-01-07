import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-slate-200 py-4">
            <div className="w-full px-16 flex justify-between items-center">
                <p className="text-sm text-gray-600">
                    &copy; 2023 BuyFit. All rights reserved.
                </p>
                <div className="flex space-x-4">
                    <Link
                        to="/privacy-policy"
                        className="text-sm text-gray-600 hover:text-gray-800"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        to="/terms-of-service"
                        className="text-sm text-gray-600 hover:text-gray-800"
                    >
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
}
