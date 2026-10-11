import { ArrowRight, BookOpen, ShieldCheck, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';
import './RecentNews.css';

const newsItems = [
  { category: 'Care Guide', title: 'Understanding Home Care', description: 'A practical introduction to the types of support families may consider when care at home becomes important.', icon: BookOpen, image: '/access-homecare-ghana/images/About-care.jpg' },
  { category: 'Safety', title: 'Creating a Safer Home', description: 'Simple areas families can review when supporting someone with changing mobility or daily-living needs.', icon: ShieldCheck, image: '/access-homecare-ghana/images/care-cta.jpg' },
  { category: 'Wellbeing', title: 'Supporting Wellbeing at Home', description: 'Why routine, dignity, social connection and emotional wellbeing matter alongside practical care.', icon: HeartPulse, image: '/access-homecare-ghana/images/hero.jpg' },
];

function RecentNews() {
  return <section className="recent-news"><div className="recent-news-container"><div className="recent-news-heading"><div><p className="recent-news-eyebrow">CARE RESOURCES</p><h2>Helpful News & Insights</h2></div><Link to="/news" className="recent-news-view-all">View Resources <ArrowRight size={17}/></Link></div><div className="news-grid">{newsItems.map(item=>{const Icon=item.icon;return <article className="news-card" key={item.title}><div className="news-image"><img src={item.image} alt=""/><div className="news-icon"><Icon size={20}/></div></div><div className="news-content"><div className="news-meta"><span>{item.category}</span></div><h3>{item.title}</h3><p>{item.description}</p><Link to="/news">Explore <ArrowRight size={16}/></Link></div></article>})}</div></div></section>;
}
export default RecentNews;
