import React, { useState } from 'react';
import { Heart, X, ArrowLeft, ExternalLink, User } from 'lucide-react';

// ============================================
// DATA STRUCTURE - Easy to edit and expand
// ============================================
const EXTRACURRICULARS = [
  {
    id: 'ec1',
    title: 'Investment Banking Workshop Series',
    majorCategory: 'Finance / Business Administration',
    shortDescription: 'Learn financial modeling, valuation, and deal analysis from industry professionals.',
    longDescription: 'A comprehensive 8-week workshop series covering investment banking fundamentals. You\'ll learn financial modeling in Excel, company valuation techniques (DCF, comparable companies), M&A deal analysis, and pitch book creation. Guest speakers from top banks share real-world insights. Perfect for students interested in finance careers.',
    imageUrl: 'https://img.freepik.com/free-psd/money-illustration-isolated_23-2151568514.jpg',
    tags: ['Finance', '5-8 hrs/week', 'Career Prep'],
    linkUrl: 'https://example.com/investment-banking-workshop'
  },
  {
    id: 'ec2',
    title: 'Startup Consulting Club',
    majorCategory: 'Finance / Business Administration',
    shortDescription: 'Work with real startups on business strategy, market analysis, and growth planning.',
    longDescription: 'Join a team of students consulting for early-stage startups. Projects include market research, competitive analysis, financial projections, and go-to-market strategies. Develop practical business skills while building your portfolio. Teams meet weekly and work directly with founders. Great for aspiring entrepreneurs and consultants.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    tags: ['Entrepreneurship', '6-10 hrs/week', 'Teamwork'],
    linkUrl: 'https://example.com/startup-consulting'
  },
  {
    id: 'ec3',
    title: 'Financial Markets Trading Competition',
    majorCategory: 'Finance / Business Administration',
    shortDescription: 'Compete in simulated trading competitions using real market data and strategies.',
    longDescription: 'Participate in quarterly trading competitions where you\'ll manage a virtual portfolio using real-time market data. Learn about equity research, risk management, portfolio optimization, and trading strategies. Top performers get mentorship opportunities with trading firms. Weekly training sessions cover technical and fundamental analysis.',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
    tags: ['Trading', '4-6 hrs/week', 'Competition'],
    linkUrl: 'https://example.com/trading-competition'
  },
  {
    id: 'finance-diamond-challenge-001',
    title: 'Diamond Challenge Entrepreneurship Competition',
    majorCategory: 'Finance / Business Administration',
    shortDescription: 'A global entrepreneurship competition where students develop and pitch innovative business ideas.',
    longDescription: 'The Diamond Challenge is an international entrepreneurship competition for high school students. Participants build a real startup concept or social venture, develop a full business model, and pitch their idea to judges from industry and academia. Students learn how to validate markets, understand finances, and create compelling presentations. This is an impressive and competitive extracurricular that demonstrates leadership, creativity, and real-world business skills.',
    imageUrl: 'https://source.unsplash.com/600x400/?entrepreneurship,startup,students',
    tags: ['Entrepreneurship', 'Competition', 'Leadership'],
    linkUrl: 'https://diamondchallenge.org/'
  },
  {
    id: 'ec4',
    title: 'Hackathon Club',
    majorCategory: 'Computer Science',
    shortDescription: 'Build projects in 24-48 hour coding competitions with teams of students.',
    longDescription: 'Join fellow developers in monthly hackathons where you\'ll create working prototypes from scratch. Projects range from web apps to AI tools to hardware hacks. Great for building your GitHub portfolio and meeting other coders. All skill levels welcome - we pair beginners with experienced members. Past projects have won prizes at major hackathons.',
    imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop',
    tags: ['Coding', '10-15 hrs/week', 'Project-Based'],
    linkUrl: 'https://example.com/hackathon-club'
  },
  {
    id: 'ec5',
    title: 'Open Source Contribution Team',
    majorCategory: 'Computer Science',
    shortDescription: 'Contribute to major open source projects and build your developer portfolio.',
    longDescription: 'Work on real open source projects used by thousands of developers. We help you find good first issues, understand codebases, and submit quality pull requests. Projects include popular frameworks, tools, and libraries. Build your GitHub profile while learning industry best practices for code review, testing, and documentation.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
    tags: ['Open Source', '5-8 hrs/week', 'Career Prep'],
    linkUrl: 'https://example.com/open-source-team'
  },
  {
    id: 'ec6',
    title: 'Medical Research Assistant Program',
    majorCategory: 'Pre Med / Biology',
    shortDescription: 'Work alongside researchers in ongoing medical studies and clinical trials.',
    longDescription: 'Gain hands-on research experience in labs conducting cutting-edge medical research. Assist with data collection, literature reviews, patient recruitment, and data analysis. Learn proper research methodology and contribute to publications. Excellent for med school applications and understanding the research side of medicine.',
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop',
    tags: ['Research', '8-12 hrs/week', 'Lab Work'],
    linkUrl: 'https://example.com/medical-research'
  }
];

const MAJORS = [
  'Finance / Business Administration',
  'Computer Science',
  'Pre Med / Biology',
  'Engineering',
  'Undecided'
];

// ============================================
// MAIN APP COMPONENT
// ============================================
export default function ECDiscoveryApp() {
  const [screen, setScreen] = useState('majorSelection'); // majorSelection, swipe, savedList
  const [selectedMajor, setSelectedMajor] = useState('');
  const [currentECIndex, setCurrentECIndex] = useState(0);
  const [savedECs, setSavedECs] = useState([]);
  const [showDetail, setShowDetail] = useState(false);

  // Get ECs for selected major
  const relevantECs = EXTRACURRICULARS.filter(ec => 
    selectedMajor === 'Undecided' || ec.majorCategory === selectedMajor
  );
  const currentEC = relevantECs[currentECIndex];

  // Handlers
  const handleMajorSelect = (major) => {
    setSelectedMajor(major);
    setCurrentECIndex(0);
    setScreen('swipe');
  };

  const handleYes = () => {
    if (currentEC && !savedECs.find(ec => ec.id === currentEC.id)) {
      setSavedECs([...savedECs, currentEC]);
    }
    nextEC();
  };

  const handleNo = () => {
    nextEC();
  };

  const nextEC = () => {
    if (currentECIndex < relevantECs.length - 1) {
      setCurrentECIndex(currentECIndex + 1);
    } else {
      // Reached end - could show completion message or loop
      setCurrentECIndex(0);
    }
  };

  const handleAddToList = () => {
    if (currentEC && !savedECs.find(ec => ec.id === currentEC.id)) {
      setSavedECs([...savedECs, currentEC]);
    }
    setShowDetail(false);
  };

  const handleBack = () => {
    setScreen('majorSelection');
    setSelectedMajor('');
    setCurrentECIndex(0);
  };

  // ============================================
  // SCREEN COMPONENTS
  // ============================================

  // Major Selection Screen
  if (screen === 'majorSelection') {
    return (
      <div className="min-h-screen bg-white p-6">
        {/* Profile Button - Top Right */}
        <div className="flex justify-end mb-8">
          <button
            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-all"
            aria-label="Profile"
          >
            <User size={24} color="#6B7280" />
          </button>
        </div>

        {/* Main Content - Positioned Higher */}
        <div className="max-w-md mx-auto mt-12">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
            What are you interested in?
          </h1>
          
          <select
            value={selectedMajor}
            onChange={(e) => setSelectedMajor(e.target.value)}
            className="w-full py-4 px-6 text-lg text-gray-900 bg-white border border-gray-300 rounded-xl appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23374151' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '24px',
              paddingRight: '3rem'
            }}
          >
            <option value="" disabled>Select Major</option>
            {MAJORS.map(major => (
              <option key={major} value={major}>
                {major}
              </option>
            ))}
          </select>

          {selectedMajor && (
            <button
              onClick={() => handleMajorSelect(selectedMajor)}
              className="w-full mt-6 py-4 px-6 text-lg font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all duration-200"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    );
  }

  // Saved List Screen
  if (screen === 'savedList') {
    return (
      <div className="min-h-screen bg-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My ECs</h1>
            <button
              onClick={() => setScreen('swipe')}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft size={20} />
              Back
            </button>
          </div>
          
          {savedECs.length === 0 ? (
            <p className="text-center text-gray-500 mt-12">
              No saved ECs yet. Start swiping to add some!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {savedECs.map(ec => (
                <div key={ec.id} className="border-2 border-gray-200 rounded-xl p-4 hover:border-blue-500 transition-all">
                  <img 
                    src={ec.imageUrl} 
                    alt={ec.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-bold text-lg mb-2">{ec.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {ec.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Swipe Screen with Detail Modal
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft size={20} />
            Change Major
          </button>
          <button
            onClick={() => setScreen('savedList')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            My List ({savedECs.length})
          </button>
        </div>

        <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">
          {selectedMajor}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          {currentECIndex + 1} of {relevantECs.length}
        </p>

        {/* EC Card */}
        {currentEC ? (
          <div className="mb-8">
            <div 
              onClick={() => setShowDetail(true)}
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden cursor-pointer hover:border-blue-500 transition-all shadow-lg"
            >
              <img 
                src={currentEC.imageUrl} 
                alt={currentEC.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{currentEC.title}</h3>
                <p className="text-gray-600 mb-4">{currentEC.shortDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {currentEC.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons - Large Floating Style */}
            <div className="flex justify-center items-center gap-32 mt-16 mb-8">
              <button
                onClick={handleNo}
                className="w-32 h-32 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                style={{
                  border: '4px solid #E74C3C',
                  backgroundColor: 'transparent'
                }}
                aria-label="Not interested"
              >
                <X size={56} strokeWidth={2.5} color="#E74C3C" />
              </button>
              <button
                onClick={handleYes}
                className="w-32 h-32 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                style={{
                  border: '4px solid #27AE60',
                  backgroundColor: 'transparent'
                }}
                aria-label="Interested"
              >
                <svg 
                  width="56" 
                  height="56" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#27AE60" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">You've seen all ECs for this major!</p>
            <button
              onClick={handleBack}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Choose Another Major
            </button>
          </div>
        )}

        {/* Detail Modal */}
        {showDetail && currentEC && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <img 
                src={currentEC.imageUrl} 
                alt={currentEC.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">{currentEC.title}</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentEC.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
                  {currentEC.longDescription}
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={handleAddToList}
                    className="flex-1 py-3 px-6 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
                  >
                    Add to My List
                  </button>
                  <a
                    href={currentEC.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-6 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                  >
                    Open Resource
                    <ExternalLink size={18} />
                  </a>
                </div>
                <button
                  onClick={() => setShowDetail(false)}
                  className="w-full mt-4 py-3 px-6 text-gray-600 hover:text-gray-900"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
