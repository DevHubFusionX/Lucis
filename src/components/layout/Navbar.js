'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from '../ui/Button'
import { NAV_ITEMS, BRAND } from '../../lib/constants'
import { theme } from '../../lib/theme'
import { Sparkles } from 'lucide-react'

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

  const logo = ['/web-logo.png']

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-sm'
            : 'bg-white/70 backdrop-blur-md'
        }`}
        style={{
          zIndex: 50
        }}
      >
        <div className='max-w-7xl mx-auto px-6 lg:px-12'>
          <div className='flex justify-between items-center h-16'>
            {/* Premium Logo */}
            <Link
              href='/'
              className='flex items-center gap-3 group'
              onClick={closeMenu}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" className="text-gray-900"/>
                <circle cx="16" cy="16" r="6" fill="currentColor" className="text-gray-900"/>
                <circle cx="16" cy="16" r="3" fill="white"/>
              </svg>
              <span className='text-2xl font-light tracking-[0.2em] uppercase text-gray-900'>
                LUCIS
              </span>
            </Link>

            <div className='hidden lg:flex items-center gap-8'>
              {NAV_ITEMS.map(item => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-sm font-light tracking-wide transition-all duration-300 group ${
                      isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 h-[1px] bg-gray-900 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </Link>
                )
              })}
            </div>

            <div className='hidden lg:flex items-center gap-4'>
              <Link href='/signin'>
                <button className='px-5 py-2 text-sm font-light text-gray-700 hover:text-gray-900 transition-colors duration-300'>
                  Sign In
                </button>
              </Link>
              <Link href='/signup'>
                <button className='px-6 py-2.5 text-sm font-medium bg-gray-900 text-white rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105'>
                  Get Started
                </button>
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden p-2 text-gray-900 transition-all duration-300'
              aria-label='Toggle menu'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
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
              <div className='space-y-3 pt-6 border-t border-gray-200'>
                <Link href='/signin' onClick={closeMenu}>
                  <button className='w-full py-3 text-base font-light text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors'>
                    Sign In
                  </button>
                </Link>
                <Link href='/signup' onClick={closeMenu}>
                  <button className='w-full py-3 text-base font-medium bg-gray-900 text-white rounded-full hover:shadow-lg transition-all'>
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
