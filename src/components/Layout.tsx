import { NavLink, Outlet } from 'react-router'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-white/60 hover:text-white/90'}`

const Layout = () => {
  return (
    <div className="pb-32">
      <div className="pg-container mt-8 flex items-center justify-between px-4 text-white">
        <span className="text-lg font-semibold text-white/90">FPL Buddy</span>
        <nav className="flex items-center gap-6">
          <NavLink to="/" end className={navLinkClass}>
            Squads
          </NavLink>
          <NavLink to="/scores" className={navLinkClass}>
            Scores
          </NavLink>
          <NavLink to="/shortlist" className={navLinkClass}>
            Shortlist
          </NavLink>
        </nav>
      </div>

      <Outlet />
    </div>
  )
}

export default Layout
