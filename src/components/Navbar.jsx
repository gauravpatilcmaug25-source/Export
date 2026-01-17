import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Leaf } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [productDropdownOpen, setProductDropdownOpen] = useState(false);
    const [mobileProductDropdownOpen, setMobileProductDropdownOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const isTransparent = isHome && !scrolled;

    const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${isTransparent
        ? 'bg-gradient-to-b from-black/60 to-transparent py-4'
        : 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3'
        }`;

    const linkClasses = (path) => `px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 tracking-wide flex items-center gap-1 ${isTransparent
        ? isActive(path) ? 'bg-white text-green-700' : 'text-white hover:bg-white/20'
        : isActive(path) ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
        }`;

    const isActive = (path) => location.pathname === path || (path === '/products' && location.pathname.startsWith('/products'));

    const logoTextMain = isTransparent ? 'text-white' : 'text-green-700';
    const logoTextSub = isTransparent ? 'text-green-300' : 'text-green-500';
    const logoBg = isTransparent ? 'bg-white/10 backdrop-blur-sm' : 'bg-green-50';
    const logoIcon = isTransparent ? 'text-white' : 'text-green-600';

    const products = [
        { name: 'Vegetables', path: '/products/vegetables' },
        { name: 'Fruits', path: '/products/fruits' },
        { name: 'Spices', path: '/products/spices' },
        { name: 'Cereals', path: '/products/cereals' },
        { name: 'Pulses', path: '/products/pulses' },
        { name: 'IQF', path: '/products/iqf' },
        { name: 'Animal Feed', path: '/products/animalFeed' },
        { name: 'Organic Fertilizer', path: '/products/organicFertilizer' },
        { name: 'Flowers', path: '/products/flowers' },
        { name: 'Dairy Products', path: '/products/dairyProducts' },
    ];

    const closeTimeoutRef = useRef(null);

    const menuItems = [
        { name: 'Home', path: '/' },
        // Products is handled separately
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={navbarClasses}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className={`p-2 rounded-xl transition-colors ${logoBg}`}>
                            <Leaf className={`w-6 h-6 ${logoIcon}`} />
                        </div>
                        <span className={`text-2xl font-extrabold tracking-tight ${logoTextMain} drop-shadow-sm uppercase`}>
                            VR<span className={logoTextSub}>AGRICO</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link to="/" className={linkClasses('/')}>Home</Link>

                        {/* Products Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => {
                                if (closeTimeoutRef.current) {
                                    clearTimeout(closeTimeoutRef.current);
                                    closeTimeoutRef.current = null;
                                }
                                setProductDropdownOpen(true);
                            }}
                            onMouseLeave={() => {
                                // small delay to allow pointer to move into dropdown
                                closeTimeoutRef.current = setTimeout(() => setProductDropdownOpen(false), 150);
                            }}
                        >
                            <button
                                className={linkClasses('/products')}
                            >
                                Products <ChevronDown size={14} />
                            </button>
                            <div
                                onMouseEnter={() => {
                                    if (closeTimeoutRef.current) {
                                        clearTimeout(closeTimeoutRef.current);
                                        closeTimeoutRef.current = null;
                                    }
                                    setProductDropdownOpen(true);
                                }}
                                onMouseLeave={() => {
                                    closeTimeoutRef.current = setTimeout(() => setProductDropdownOpen(false), 150);
                                }}
                                className={`absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl py-2 transition-all duration-200 transform origin-top-left border border-gray-100 ${productDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'}`}
                            >
                                {products.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium text-sm transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link to="/about" className={linkClasses('/about')}>About Us</Link>
                        <Link to="/contact" className={linkClasses('/contact')}>Contact</Link>
                    </div>

                    {/* Mobile Menu Button - Always visible on mobile */}
                    <button
                        className={`lg:hidden p-2 transition-colors focus:outline-none z-50 relative ${isTransparent ? 'text-white' : 'text-gray-600'}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Menu Panel - Enhanced visibility with glassmorphism effect */}
            {isOpen && (
                <div
                    className="fixed top-20 right-0 h-screen w-[85vw] sm:w-80 bg-slate-900/95 backdrop-blur-lg z-50 shadow-2xl overflow-y-auto animate-in slide-in-from-right-full duration-300 border-l border-slate-700"
                >
                    <div className="p-4 flex flex-col min-h-full">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-lg font-bold text-white">Menu</span>
                            <button onClick={() => setIsOpen(false)} className="text-white hover:text-slate-200 transition-colors" aria-label="Close menu">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Link to="/" onClick={() => setIsOpen(false)} className="px-4 py-2.5 rounded-lg text-base font-semibold text-white hover:bg-white/30 transition-colors">
                                Home
                            </Link>

                            {/* Mobile Products Dropdown - Clickable, closed by default */}
                            <div className="px-4">
                                <button
                                    onClick={() => setMobileProductDropdownOpen(!mobileProductDropdownOpen)}
                                    className="w-full flex items-center justify-between py-2.5 rounded-lg text-base font-semibold text-white hover:bg-white/30 transition-colors"
                                >
                                    <span>Products</span>
                                    <ChevronDown
                                        size={18}
                                        className={`transition-transform duration-300 ${mobileProductDropdownOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                {/* Products Submenu - Collapse/Expand Animation */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileProductDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="flex flex-col mt-1 pl-3 border-l-3 border-green-400 ml-2 space-y-1 py-2">
                                        {products.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.path}
                                                onClick={() => {
                                                    setIsOpen(false);
                                                    setMobileProductDropdownOpen(false);
                                                }}
                                                className="py-1.5 px-3 text-white hover:text-slate-200 hover:bg-white/30 rounded-md font-medium text-sm transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Link to="/about" onClick={() => setIsOpen(false)} className="px-4 py-2.5 rounded-lg text-base font-semibold text-white hover:bg-white/30 transition-colors">
                                About Us
                            </Link>

                            <Link to="/contact" onClick={() => setIsOpen(false)} className="px-4 py-2.5 rounded-lg text-base font-semibold text-white hover:bg-white/30 transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
