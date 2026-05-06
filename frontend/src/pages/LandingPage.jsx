import Icons from '../components/Icons';

const LandingPage = ({ onGetStarted, onLogin }) => {
	return (
		<div className="flex flex-col min-h-screen bg-[#0b0f1a] overflow-hidden relative">
			<header className="w-full z-50 bg-[#0b0f1a]/90 backdrop-blur-md border-b border-slate-800/50 pl-20 pr-8 py-3.5 flex items-center justify-between shrink-0">
				<div className="flex items-center gap-2.5">
					<div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-indigo-900 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
						<Icons.Shield size={22} />
					</div>
					<span className="text-white font-black text-xl tracking-tight">SCS <span className="text-blue-300">Pro</span></span>
					<span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-500 bg-slate-800/60 border border-slate-700/50 rounded px-2 py-1 ml-1">Search</span>
				</div>

				<div className="flex items-center gap-3">
					<button
						onClick={onLogin}
						className="text-sm font-semibold px-4 py-1.5 rounded-lg text-slate-400 hover:text-white transition-all"
					>
						Login
					</button>
					<button
						onClick={onGetStarted}
						className="text-sm font-black px-5 py-1.5 bg-blue-800 hover:bg-blue-700 text-white rounded-lg transition-all shadow-lg shadow-blue-900/30 active:scale-95"
					>
						Get Started
					</button>
				</div>
			</header>

			<main className="flex-1 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center px-10 lg:px-20 py-12 relative">
				<div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-900/60 to-slate-950"></div>
				<div className="absolute inset-0 bg-grid-white opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"></div>
				<div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-800 opacity-10 blur-[120px] rounded-full animate-pulse-slow"></div>
				<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900 opacity-10 blur-[100px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

				<section className="relative z-10 space-y-8 max-w-xl animate-in fade-in slide-in-from-left-12 duration-1000">
					<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/20 border border-blue-800/40 text-blue-200 text-[11px] uppercase tracking-[0.2em] font-black">
						<span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.6)]"></span>
						Hybrid semantic search
					</div>
					<h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[0.95]">
						Search codebases
						<span className="block text-blue-300">like a power user</span>
					</h1>
					<p className="text-lg text-slate-300 leading-relaxed">
						Combine semantic retrieval, metadata filtering, and fast vector search in a single workspace.
						SCS Pro helps teams find answers inside massive codebases in seconds.
					</p>
					<div className="flex flex-wrap items-center gap-3">
						<button
							onClick={onGetStarted}
							className="px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white font-black rounded-xl shadow-[0_12px_30px_rgba(30,64,175,0.35)] transition-all active:scale-[0.98]"
						>
							Get Started
						</button>
						<button
							onClick={onLogin}
							className="px-6 py-3 bg-slate-900/60 hover:bg-slate-900 text-slate-200 border border-slate-800 rounded-xl font-semibold transition-all"
						>
							Login
						</button>
					</div>
					<div className="flex items-center gap-6 text-xs font-semibold text-slate-400">
						<div className="flex items-center gap-2">
							<span className="text-blue-400"><Icons.Shield size={14} /></span>
							Enterprise-grade security
						</div>
						<div className="flex items-center gap-2">
							<span className="text-blue-400"><Icons.Search size={14} /></span>
							Instant hybrid results
						</div>
					</div>
				</section>

				<section className="relative z-10 grid gap-4">
					<div className="bg-[#111827]/70 border border-slate-800/60 rounded-3xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.35)] animate-in fade-in slide-in-from-right-10 duration-1000">
						<div className="flex items-center gap-3">
							<div className="w-12 h-12 rounded-2xl bg-blue-900/30 border border-blue-800/40 flex items-center justify-center text-blue-300">
								<Icons.Code size={22} />
							</div>
							<div>
								<h3 className="text-white font-black text-lg">Semantic + keyword blending</h3>
								<p className="text-slate-400 text-sm">Search by intent, not just strings.</p>
							</div>
						</div>
					</div>

					<div className="bg-[#111827]/70 border border-slate-800/60 rounded-3xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.35)] animate-in fade-in slide-in-from-right-12 duration-1000 delay-150">
						<div className="flex items-center gap-3">
							<div className="w-12 h-12 rounded-2xl bg-blue-900/30 border border-blue-800/40 flex items-center justify-center text-blue-300">
								<Icons.Database size={22} />
							</div>
							<div>
								<h3 className="text-white font-black text-lg">Qdrant-native indexing</h3>
								<p className="text-slate-400 text-sm">Scale to millions of chunks safely.</p>
							</div>
						</div>
					</div>

					<div className="bg-[#111827]/70 border border-slate-800/60 rounded-3xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.35)] animate-in fade-in slide-in-from-right-12 duration-1000 delay-300">
						<div className="flex items-center gap-3">
							<div className="w-12 h-12 rounded-2xl bg-blue-900/30 border border-blue-800/40 flex items-center justify-center text-blue-300">
								<Icons.Analytics size={22} />
							</div>
							<div>
								<h3 className="text-white font-black text-lg">Team-ready analytics</h3>
								<p className="text-slate-400 text-sm">Track adoption and query outcomes.</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default LandingPage;
