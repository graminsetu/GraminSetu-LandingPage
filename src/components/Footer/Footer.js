import React from 'react';
// import Logo from '../Logo/Logo';
import { footerContent } from '../../constants/footerContent';

function Footer() {
    return (
        <footer id="contact" className="bg-gramin-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-lg font-semibold mb-2">{footerContent.newsletter.title}</h3>
                        <p className="text-gramin-300 mb-3">{footerContent.newsletter.subtitle}</p>
                        <form className="flex flex-col sm:flex-row items-center gap-3" onSubmit={async (e) => {
                            e.preventDefault();
                            const email = e.target.email.value;
                            await fetch('/api/newsletter/subscribe', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ email }),
                            });
                            alert(footerContent.newsletter.success);
                            e.target.reset();
                        } }>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Your email address"
                                className="flex-1 px-4 py-3 rounded-lg border border-gramin-200 focus:ring-2 focus:ring-gramin-400" />
                            <button
                                type="submit"
                                className="bg-gramin-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gramin-700 transition"
                            >
                                {footerContent.newsletter.button}
                            </button>
                        </form>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {footerContent.quickLinks.map(link => (
                                <li key={link.href}><a href={link.href} className="text-gramin-300 hover:text-white transition-colors">{link.label}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Need Help?</h3>
                        <ul className="space-y-3">
                            {footerContent.helpLinks.map(link => (
                                <li key={link.href}>
                                    <a href={link.href} className="flex items-center space-x-2 text-gramin-300 hover:text-white transition-colors">
                                        <span role="img" aria-label={link.label.toLowerCase().replace(/ /g, '-')}>{link.icon}</span>
                                        <span>{link.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Our Team</h3>
                        <p className="text-gramin-300">{footerContent.teamNote}</p>
                    </div>
                </div>
                <div className="border-t border-gramin-800 mt-12 pt-8 text-center">
                    <p className="text-gramin-400">{footerContent.copyright}</p>
                    <p className="text-gramin-500 text-xs mt-2">{footerContent.mission}</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
