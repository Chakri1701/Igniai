'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Background3D from '@/components/Background3D'

export default function AdminDashboard() {
  const router = useRouter()
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedContact, setSelectedContact] = useState(null)

  useEffect(() => {
    // Check authentication
    const isAuth = sessionStorage.getItem('adminAuth')
    if (!isAuth) {
      router.push('/admin/login')
      return
    }

    // Fetch contacts
    fetchContacts()
  }, [router])

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/admin/contacts')
      const data = await response.json()
      setContacts(data.contacts || [])
    } catch (error) {
      console.error('Error fetching contacts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth')
    router.push('/admin/login')
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Background3D />
        <div className="text-white text-xl">Loading dashboard...</div>
      </main>
    )
  }

  const todayContacts = contacts.filter(c => {
    const today = new Date().toDateString()
    const contactDate = new Date(c.createdAt).toDateString()
    return today === contactDate
  })

  return (
    <main className="min-h-screen">
      <Background3D />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
              <p className="text-white/60">Manage contact submissions</p>
            </div>
            <button onClick={handleLogout} className="btn-secondary">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="card p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10">
              <div className="text-white/60 text-sm mb-2">Total Contacts</div>
              <div className="text-3xl font-bold text-white">{contacts.length}</div>
            </div>
            <div className="card p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
              <div className="text-white/60 text-sm mb-2">New Today</div>
              <div className="text-3xl font-bold text-white">{todayContacts.length}</div>
            </div>
            <div className="card p-6 bg-gradient-to-br from-cyan-500/10 to-teal-500/10">
              <div className="text-white/60 text-sm mb-2">Pending</div>
              <div className="text-3xl font-bold text-white">
                {contacts.filter(c => c.status === 'new').length}
              </div>
            </div>
            <div className="card p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
              <div className="text-white/60 text-sm mb-2">This Week</div>
              <div className="text-3xl font-bold text-white">
                {contacts.filter(c => {
                  const weekAgo = new Date()
                  weekAgo.setDate(weekAgo.getDate() - 7)
                  return new Date(c.createdAt) > weekAgo
                }).length}
              </div>
            </div>
          </div>

          {/* Contacts Table */}
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Contacts</h2>
            
            {contacts.length === 0 ? (
              <div className="text-center py-12 text-white/60">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <p className="text-lg">No contacts yet</p>
                <p className="text-sm mt-2">Contact submissions will appear here</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-white/60 font-semibold py-3 px-4 text-sm">Name</th>
                      <th className="text-left text-white/60 font-semibold py-3 px-4 text-sm">Email</th>
                      <th className="text-left text-white/60 font-semibold py-3 px-4 text-sm">Service</th>
                      <th className="text-left text-white/60 font-semibold py-3 px-4 text-sm">Date</th>
                      <th className="text-left text-white/60 font-semibold py-3 px-4 text-sm">Status</th>
                      <th className="text-left text-white/60 font-semibold py-3 px-4 text-sm">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <tr key={contact.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 text-white font-medium">{contact.name}</td>
                        <td className="py-4 px-4 text-white/70">{contact.email}</td>
                        <td className="py-4 px-4 text-white/70">{contact.service || '-'}</td>
                        <td className="py-4 px-4 text-white/70 text-sm">
                          {new Date(contact.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            contact.status === 'new' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                            contact.status === 'read' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                            'bg-green-500/20 text-green-300 border border-green-500/30'
                          }`}>
                            {contact.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <button
                            onClick={() => setSelectedContact(contact)}
                            className="text-purple-400 hover:text-purple-300 text-sm font-semibold"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Contact Detail Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={() => setSelectedContact(null)}>
          <div className="card p-8 max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white">Contact Details</h3>
              <button onClick={() => setSelectedContact(null)} className="text-white/60 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-sm text-white/60 mb-1">Name</div>
                <div className="text-white font-medium">{selectedContact.name}</div>
              </div>
              <div>
                <div className="text-sm text-white/60 mb-1">Email</div>
                <a href={`mailto:${selectedContact.email}`} className="text-purple-400 hover:underline">
                  {selectedContact.email}
                </a>
              </div>
              {selectedContact.phone && (
                <div>
                  <div className="text-sm text-white/60 mb-1">Phone</div>
                  <a href={`tel:${selectedContact.phone}`} className="text-white">
                    {selectedContact.phone}
                  </a>
                </div>
              )}
              {selectedContact.company && (
                <div>
                  <div className="text-sm text-white/60 mb-1">Company</div>
                  <div className="text-white">{selectedContact.company}</div>
                </div>
              )}
              {selectedContact.service && (
                <div>
                  <div className="text-sm text-white/60 mb-1">Service Interested</div>
                  <div className="text-white">{selectedContact.service}</div>
                </div>
              )}
              <div>
                <div className="text-sm text-white/60 mb-1">Message</div>
                <div className="text-white bg-white/5 p-4 rounded-lg border border-white/10">
                  {selectedContact.message}
                </div>
              </div>
              <div>
                <div className="text-sm text-white/60 mb-1">Submitted</div>
                <div className="text-white">
                  {new Date(selectedContact.createdAt).toLocaleString()}
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a href={`mailto:${selectedContact.email}`} className="btn-primary flex-1 text-center">
                Reply via Email
              </a>
              <button onClick={() => setSelectedContact(null)} className="btn-secondary flex-1">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}