'use client'

import { useAuth } from '@/lib/context/auth-context'
import { LogOut, User, Settings } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export function UserAccountDropdown() {
  const { user, profile, signOut } = useAuth()
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!user || !profile) return null

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-amber-100 transition text-sm font-medium"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
        <span className="hidden md:inline text-gray-700">{profile.full_name}</span>
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
          {/* User Info */}
          <div className="px-4 py-3 border-b border-gray-200">
            <p className="font-semibold text-gray-900">{profile.full_name}</p>
            <p className="text-sm text-gray-600">{profile.email}</p>
            <p className="text-xs text-gray-500 mt-1">
              {profile.city}, {profile.state}
            </p>
          </div>
          
          {/* Menu Items */}
          <div className="py-1">
            <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2 text-gray-700">
              <Settings className="w-4 h-4" />
              Profile Settings
            </button>
            
            <button
              onClick={signOut}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2 text-red-600"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}