'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from '../ui/Button'
import { NAV_ITEMS, BRAND } from '../../lib/constants'
import { theme } from '../../lib/theme'
import { Sparkles, Camera, Crown, ChevronDown, User, UserPlus } from 'lucide-react'

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 transition-all duration-500 z-50 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b'
            : 'bg-white/80 backdrop-blur-lg'
        }`}
        style={{
          borderColor: isScrolled ? theme.colors.border : 'transparent'
        }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Enhanced Logo */}
            <Link
              href='/'
              className='flex items-center gap-3 group transition-all duration-300 hover:scale-105'
              onClick={closeMenu}
            >
              <div className='relative'>
                <div 
                  className='w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl'
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.copper.DEFAULT} 0%, ${theme.colors.copper[600]} 100%)`,
                    boxShadow: `0 4px 20px ${theme.colors.copper.DEFAULT}20`
                  }}
                >
                  <Camera className='w-5 h-5 text-white' />
                </div>
                <Sparkles className='absolute -top-1 -right-1 w-3 h-3 text-yellow-400' />
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-2xl font-bold tracking-tight text-gray-900 group-hover:text-gray-700 transition-colors'>
                  LUCIS
                </span>
                <span className='px-2 py-0.5 text-xs font-bold rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white animate-pulse'>
                  PRO
                </span>
              </div>
            </Link>

            {/* Enhanced Navigation */}
            <div className='hidden lg:flex items-center gap-8'>
              {NAV_ITEMS.map(item => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-sm font-medium tracking-wide transition-all duration-300 group px-3 py-2 rounded-lg ${
                      isActive 
                        ? 'text-gray-900 bg-gray-100' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full' 
                           style={{ backgroundColor: theme.colors.copper.DEFAULT }} />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Enhanced Auth Buttons */}
            <div className='hidden lg:flex items-center gap-3'>
              <div className='relative group'>
                <button className='flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 rounded-xl hover:bg-gray-50'>
                  <User className='w-4 h-4' />
                  Sign In
                  <ChevronDown className='w-3 h-3 transition-transform group-hover:rotate-180' />
                </button>
                <div className='absolute top-full left-0 mt-2 w-52 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 animate-in fade-in slide-in-from-top-2'
                     style={{ border: `1px solid ${theme.colors.border}` }}>
                  <div className='p-2'>
                    <Link href='/user/signin' className='flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-all duration-200'>
                      <div className='w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center'>
                        <User className='w-4 h-4 text-blue-600' />
                      </div>
                      <div>
                        <div className='font-semibold'>Client Login</div>
                        <div className='text-xs text-gray-500'>Find photographers</div>
                      </div>
                    </Link>
                    <Link href='/professional/signin' className='flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-xl transition-all duration-200'>
                      <div className='w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center'>
                        <Camera className='w-4 h-4 text-orange-600' />
                      </div>
                      <div>
                        <div className='font-semibold'>Professional Login</div>
                        <div className='text-xs text-gray-500'>Manage your studio</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className='relative group'>
                <button className='flex items-center gap-2 px-6 py-2.5 text-sm font-semibold bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95'>
                  <UserPlus className='w-4 h-4' />
                  Get Started
                  <ChevronDown className='w-3 h-3 transition-transform group-hover:rotate-180' />
                </button>
                <div className='absolute top-full right-0 mt-2 w-52 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 animate-in fade-in slide-in-from-top-2'
                     style={{ border: `1px solid ${theme.colors.border}` }}>
                  <div className='p-2'>
                    <Link href='/user/signup' className='flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-all duration-200'>
                      <div className='w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center'>
                        <User className='w-4 h-4 text-blue-600' />
                      </div>
                      <div>
                        <div className='font-semibold'>Join as Client</div>
                        <div className='text-xs text-gray-500'>Book photographers</div>
                      </div>
                    </Link>
                    <Link href='/professional/signup' className='flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-xl transition-all duration-200'>
                      <div className='w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center'>
                        <Camera className='w-4 h-4 text-orange-600' />
                      </div>
                      <div>
                        <div className='font-semibold'>Join as Professional</div>
                        <div className='text-xs text-gray-500'>Start earning</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden p-2.5 text-gray-900 transition-all duration-300 hover:bg-gray-100 rounded-xl active:scale-95'
              aria-label='Toggle menu'
            >
              <svg
                className={`h-5 w-5 transition-transform duration-300 ${
                  isOpen ? 'rotate-45' : 'rotate-0'
                }`}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2.5}
              >
                {isOpen ? (
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                ) : (
                  <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <>
          <div
            className='lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm'
            style={{ zIndex: 9998 }}
            onClick={closeMenu}
          />
          <div
            className='lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto'
            style={{ zIndex: 9999 }}
          >
            <div className='flex flex-col p-6'>
              <div className='flex justify-between items-center mb-8'>
                <span className='text-xl font-light tracking-[0.2em] uppercase text-gray-900'>LUCIS</span>
                <button onClick={closeMenu} className='p-2 text-gray-900'>
                  <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>
              </div>
              <div className='space-y-1 mb-8'>
                {NAV_ITEMS.map(item => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-3 text-base font-light rounded-lg transition-colors ${
                        isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
              <div className='space-y-4 pt-6 border-t' style={{ borderColor: theme.colors.border }}>
                <div className='space-y-3'>
                  <p className='text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2'>
                    <User className='w-3 h-3' />
                    Sign In
                  </p>
                  <Link href='/user/signin' onClick={closeMenu}>
                    <button className='flex items-center gap-3 w-full py-3 px-4 text-sm font-medium text-gray-700 border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all duration-200'>
                      <div className='w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center'>
                        <User className='w-4 h-4 text-blue-600' />
                      </div>
                      <div className='text-left'>
                        <div className='font-semibold'>Client Login</div>
                        <div className='text-xs text-gray-500'>Find photographers</div>
                      </div>
                    </button>
                  </Link>
                  <Link href='/professional/signin' onClick={closeMenu}>
                    <button className='flex items-center gap-3 w-full py-3 px-4 text-sm font-medium text-gray-700 border border-gray-200 rounded-xl hover:bg-orange-50 hover:border-orange-200 hover:text-orange-700 transition-all duration-200'>
                      <div className='w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center'>
                        <Camera className='w-4 h-4 text-orange-600' />
                      </div>
                      <div className='text-left'>
                        <div className='font-semibold'>Professional Login</div>
                        <div className='text-xs text-gray-500'>Manage studio</div>
                      </div>
                    </button>
                  </Link>
                </div>
                
                <div className='space-y-3'>
                  <p className='text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2'>
                    <UserPlus className='w-3 h-3' />
                    Get Started
                  </p>
                  <Link href='/user/signup' onClick={closeMenu}>
                    <button className='flex items-center gap-3 w-full py-3 px-4 text-sm font-semibold bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl'>
                      <div className='w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center'>
                        <User className='w-4 h-4 text-white' />
                      </div>
                      <div className='text-left'>
                        <div>Join as Client</div>
                        <div className='text-xs text-blue-100'>Book photographers</div>
                      </div>
                    </button>
                  </Link>
                  <Link href='/professional/signup' onClick={closeMenu}>
                    <button className='flex items-center gap-3 w-full py-3 px-4 text-sm font-semibold bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl'>
                      <div className='w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center'>
                        <Camera className='w-4 h-4 text-white' />
                      </div>
                      <div className='text-left'>
                        <div>Join as Professional</div>
                        <div className='text-xs text-orange-100'>Start earning</div>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
