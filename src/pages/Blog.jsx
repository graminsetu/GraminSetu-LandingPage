import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import PageTitle from '../components/PageTitle';
import HelpSupportButton from '../components/HelpSupport/HelpSupportButton';
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  Mail,
  X,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  ChevronDown,
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import './Blog.scss';

// --- MOCK DATA ---
const BLOG_POSTS = [
  {
    id: 1,
    title: 'Smart Agriculture: The Future is Here',
    excerpt:
      'How IoT sensors and satellite data are helping farmers in Bihar double their yield while using 30% less water.',
    author: 'Dr. Ramesh Gupta',
    role: 'Senior Agri-Scientist',
    date: 'Dec 12, 2024',
    readTime: '5 min read',
    // Smart Farming: Tablet/Drone
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    content: [
      {
        type: 'paragraph',
        text: 'Agriculture in India is undergoing a massive transformation, driven by the adoption of smart technologies. In the heart of Bihar, a pilot project usage of IoT (Internet of Things) sensors is showing promising results.',
      },
      { type: 'heading', text: 'The Power of Precision Farming' },
      {
        type: 'paragraph',
        text: 'These sensors, placed directly in the soil, monitor moisture levels, nutrient content, and temperature in real-time. This data is then transmitted to a central server where AI algorithms analyze it to provide actionable insights to farmers via their smartphones.',
      },
      {
        type: 'paragraph',
        text: "For instance, instead of watering crops based on a fixed schedule, farmers now water them only when the sensors indicate that the soil moisture has dropped below a certain threshold. This 'precision irrigation' has reduced water usage by nearly 30% in the pilot districts.",
      },
      { type: 'heading', text: 'Satellite Monitoring for Crop Health' },
      {
        type: 'paragraph',
        text: 'Furthermore, satellite imagery is being used to monitor crop health over large areas. Early detection of pest attacks or disease outbreaks allows for targeted interventions, reducing the need for widespread pesticide spraying. This not only saves money but also preserves the ecosystem.',
      },
      {
        type: 'quote',
        text: 'GraminSetu is proud to be partnering with local agritech startups to bring these solutions to the last mile, ensuring that even smallholder farmers can benefit from the digital revolution.',
      },
    ],
    category: 'Technology',
  },
  {
    id: 2,
    title: 'The Rise of Agri-Entrepreneurship',
    excerpt:
      'Young entrepreneurs are returning to their roots. Meet the 25-year-old who started a supply chain for organic turmeric.',
    author: 'Priya Sharma',
    role: 'Investigative Journalist',
    date: 'Dec 10, 2024',
    readTime: '4 min read',
    // Entrepreneurship: Young Indian man / professional
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'A new wave of reverse migration is sweeping through rural India. Educated youth, who once flocked to cities for corporate jobs, are now returning to their villages with a new vision: Agri-Entrepreneurship.',
      },
      { type: 'heading', text: 'From Software to Soil' },
      {
        type: 'paragraph',
        text: "One such story is that of Suresh, a 25-year-old engineering graduate from Pune. Instead of joining an IT firm, he decided to modernize his family's turmeric farm in Satara. He realized that while the produce was high quality, the supply chain was riddled with middlemen who ate into the profits.",
      },
      { type: 'heading', text: 'Direct-to-Consumer Success' },
      {
        type: 'paragraph',
        text: "Using digital platforms like GraminSetu, Suresh set up a direct-to-consumer brand for organic turmeric. He implemented standardized packaging and obtained organic certification. By cutting out the middlemen, he not only increased his family's income by 200% but also created employment for 15 other youths in his village.",
      },
      {
        type: 'quote',
        text: '"The opportunities in rural India are immense if you apply modern management and technology principles," says Suresh.',
      },
    ],
    category: 'Stories',
  },
  {
    id: 3,
    title: 'Government Schemes: A Complete Guide 2024-25',
    excerpt:
      'A simplified breakdown of PM-KISAN and other state-level benefits aiming to boost rural income.',
    author: 'Team GraminSetu',
    role: 'Policy Research',
    date: 'Dec 08, 2024',
    readTime: '8 min read',
    // Govt Schemes: Documents / Pen / Official
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'Navigating the landscape of government schemes can often be daunting for rural citizens. To address this, we have compiled a comprehensive guide to the key initiatives available in the 2024-25 fiscal year.',
      },
      { type: 'heading', text: '1. PM-KISAN Samman Nidhi' },
      {
        type: 'paragraph',
        text: 'The flagship direct cash transfer scheme continues this year. Eligible farmer families receive ₹6,000 per year in three equal installments. E-KYC is now mandatory to receive these benefits.',
      },
      { type: 'heading', text: '2. Agriculture Infrastructure Fund (AIF)' },
      {
        type: 'paragraph',
        text: 'This scheme provides financing for post-harvest management infrastructure. Interest subvention of 3% per annum is available for loans up to ₹2 Crore. This is ideal for village entrepreneurs looking to build warehouses or cold storage units.',
      },
      { type: 'heading', text: '3. Pradhan Mantri Fasal Bima Yojana (PMFBY)' },
      {
        type: 'paragraph',
        text: 'The crop insurance scheme has been revamped to make claim settlements faster. Technology integration now allows for satellite-based crop yield estimation.',
      },
    ],
    category: 'Updates',
  },
  {
    id: 4,
    title: 'Sustainable Farming: The Zero Budget Model',
    excerpt:
      'Why thousands of farmers are switching to ZBNF (Zero Budget Natural Farming) and how it impacts soil health.',
    author: 'Suresh Patil',
    role: 'Agronomist',
    date: 'Nov 28, 2024',
    readTime: '6 min read',
    // Sustainable: Hands holding soil / Growth
    image:
      'https://images.unsplash.com/photo-1628151016005-7ae76c49e13a?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'In the face of rising input costs (fertilizers, pesticides, seeds), farming has become increasingly unviable for small farmers. Enter Zero Budget Natural Farming (ZBNF), a movement that is gaining rapid traction in Maharashtra and Andhra Pradesh.',
      },
      { type: 'heading', text: 'What is ZBNF?' },
      {
        type: 'paragraph',
        text: "ZBNF relies on locally available resources. Instead of buying chemicals, farmers use 'Jeevamrutha'—a fermented mixture of cow dung, cow urine, jaggery, and pulse flour—to enrich the soil. This mixture promotes the activity of earthworms and beneficial microorganisms.",
      },
      { type: 'heading', text: 'Economic Freedom' },
      {
        type: 'paragraph',
        text: "The 'Zero Budget' aspect comes from the fact that no external inputs need to be purchased. This drastically reduces the cost of production and breaks the debt cycle for farmers. Early adopters report that while yield might slightly dip in the first transition year, the soil health improves dramatically over time.",
      },
    ],
    category: 'Agriculture',
  },
  {
    id: 5,
    title: 'Digital Literacy: Bridging the Gap',
    excerpt:
      'Field report on how smartphone penetration in rural households is changing the way business is done.',
    author: 'Anjali Deshmukh',
    role: 'Field Researcher',
    date: 'Nov 15, 2024',
    readTime: '3 min read',
    // Digital Literacy: Hands using smartphone
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: "Digital literacy is no longer a luxury; it's a necessity. Our latest field survey across 500 villages shows that smartphone penetration has crossed 60% in rural households, fueled by affordable data plans.",
      },
      { type: 'heading', text: 'UPI Adoption is Soaring' },
      {
        type: 'paragraph',
        text: 'However, owning a device is just the first step. The real change happens when users know how to leverage it. We found that 40% of rural users now use UPI for daily transactions, a massive jump from just 5% three years ago.',
      },
      {
        type: 'paragraph',
        text: 'Small kirana store owners are using apps to order inventory. Farmers are checking weather forecasts and mandi prices before harvesting. Women in Self Help Groups (SHGs) are using WhatsApp to coordinate meetings and sell products.',
      },
    ],
    category: 'Technology',
  },
  {
    id: 6,
    title: 'GraminSetu Impact Report Q3',
    excerpt:
      'We have connected over 500 villages in the last quarter. Read about the milestones and the road ahead.',
    author: 'The Founders',
    role: 'Leadership Team',
    date: 'Nov 01, 2024',
    readTime: '2 min read',
    // Impact: Hands joining together / Teamwork
    image:
      'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    content: [
      { type: 'heading', text: 'Quarter 3 Highlights' },
      {
        type: 'paragraph',
        text: 'We are thrilled to present our Quarter 3 Impact Report. It has been a period of accelerated growth and meaningful impact on the ground.',
      },
      { type: 'heading', text: 'Key Milestones' },
      {
        type: 'paragraph',
        text: '1. Village Connectivity: We onboarded 523 new villages onto the GraminSetu platform, surpassing our target of 500.',
      },
      {
        type: 'paragraph',
        text: '2. Farmer Income: Data from our pilot districts shows an average increase of 15% in farmer income due to better market linkage.',
      },
      {
        type: 'quote',
        text: 'The road ahead is challenging but exciting. We thank our partners, volunteers, and the rural community for their trust.',
      },
    ],
    category: 'Updates',
  },
];

const CATEGORIES = ['All', 'Technology', 'Stories', 'Agriculture', 'Updates'];

// --- SUB-COMPONENTS ---

const BlogPostModal = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="blog-modal-content animate-slideUp" onClick={(e) => e.stopPropagation()}>
        {/* Header Image */}
        <div className="modal-hero-image">
          <img
            src={post.image}
            alt={post.title}
            onError={(e) =>
              (e.target.src =
                'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop')
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <div className="text-white hidden md:block">
              <span className="bg-gramin-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                {post.category}
              </span>
            </div>
          </div>
          <button onClick={onClose} className="close-btn group">
            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        <div className="modal-body">
          {/* Meta Header */}
          <div className="flex items-center gap-4 mb-6 text-gray-500 text-sm border-b border-gray-100 pb-6">
            <span className="flex items-center gap-1.5 font-medium text-gramin-700 bg-gramin-50 px-3 py-1 rounded-full md:hidden">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={16} className="text-gray-400" /> {post.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={16} className="text-gray-400" /> {post.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Author Section */}
          <div className="flex items-center justify-between mb-10 bg-gray-50 p-4 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gramin-100 to-gramin-200 flex items-center justify-center text-gramin-700 font-bold text-xl shadow-inner">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-base font-bold text-gray-900 leading-none mb-1">{post.author}</p>
                <p className="text-sm text-gray-500 font-medium">{post.role}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:text-[#1877F2] hover:border-[#1877F2] transition-colors">
                <Facebook size={18} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-colors">
                <Twitter size={18} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors">
                <Linkedin size={18} />
              </button>
            </div>
          </div>

          {/* Structured Content Body */}
          <div className="article-content space-y-6">
            {post.content &&
              post.content.map((block, idx) => {
                if (block.type === 'heading') {
                  return (
                    <h3 key={idx} className="text-2xl font-bold text-gray-900 mt-8 mb-2">
                      {block.text}
                    </h3>
                  );
                }
                if (block.type === 'quote') {
                  return (
                    <blockquote
                      key={idx}
                      className="border-l-4 border-gramin-500 pl-6 py-2 my-8 bg-gray-50 italic text-gray-700 text-lg rounded-r-lg"
                    >
                      "{block.text}"
                    </blockquote>
                  );
                }
                return (
                  <p key={idx} className="text-lg text-gray-600 leading-relaxed">
                    {block.text}
                  </p>
                );
              })}
          </div>

          {/* Footer Actions */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 font-medium">Enjoyed reading? Share it now!</p>
            <button
              onClick={onClose}
              className="bg-gramin-600 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-gramin-500/30 hover:bg-gramin-700 transition active:scale-95"
            >
              Back to Articles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const location = useLocation();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter Logic
  const matchesFilter = (post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  };

  const filteredPosts = BLOG_POSTS.filter(matchesFilter);
  const isDefaultView = activeCategory === 'All' && searchQuery === '';
  const featuredPost = isDefaultView ? BLOG_POSTS.find((p) => p.featured) : null;
  const gridPosts = isDefaultView ? filteredPosts.filter((p) => !p.featured) : filteredPosts;

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="blog-page">
      <PageTitle pathname={location.pathname} />
      <Navbar />

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-content">
          <h1 className="mb-6">
            Stories from <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gramin-600 to-green-500">
              Rural India
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-gray-500 mb-8">
            Exploring the intersection of technology, tradition, and progress in India's heartland.
          </p>

          <div className="flex flex-col items-center animate-bounce mt-8 opacity-50">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
              Explore Stories
            </span>
            <ChevronDown className="text-gray-400" />
          </div>
        </div>
      </section>

      <div className="blog-container">
        {/* Featured Post */}
        {featuredPost && (
          <div
            className="featured-post-card group cursor-pointer"
            onClick={() => handleReadMore(featuredPost)}
          >
            <div className="featured-image-wrapper">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                loading="eager"
                onError={(e) =>
                  (e.target.src =
                    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200')
                }
              />
            </div>
            <div className="featured-content">
              <span className="badge">Featured Story</span>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.excerpt}</p>

              <div className="meta">
                <div className="author-img">{featuredPost.author.charAt(0)}</div>
                <div className="info">
                  <span className="name">{featuredPost.author}</span>
                  <span className="date">
                    {featuredPost.date} • {featuredPost.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6 pt-4">
          <div className="filters-bar mb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={activeCategory === cat ? 'active' : ''}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-gramin-500 transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Posts Grid */}
        {gridPosts.length > 0 ? (
          <div className="posts-grid">
            {gridPosts.map((post) => (
              <article
                key={post.id}
                className="post-card group cursor-pointer"
                onClick={() => handleReadMore(post)}
              >
                <div className="card-image">
                  <span className="category-tag">{post.category}</span>
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    onError={(e) =>
                      (e.target.src =
                        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200')
                    }
                  />
                </div>
                <div className="card-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>

                  <div className="card-footer">
                    <span className="flex items-center gap-2">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <button className="read-more">
                      Read <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fadeIn">
            <div className="bg-gray-50 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4 text-gray-400">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 text-gramin-600 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Newsletter Section */}
        {!searchQuery && (
          <div className="mt-24 bg-gramin-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gramin-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-setu-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <Mail size={48} className="mx-auto mb-6 text-gramin-300" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Never miss an update</h2>
              <p className="text-gramin-100 mb-8 text-lg">
                Join 10,000+ subscribers getting the latest rural insights delivered to their inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="bg-setu-500 hover:bg-setu-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Article Modal */}
      {selectedPost && <BlogPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />}

      <Footer />
      <HelpSupportButton />
    </div>
  );
}

export default Blog;
