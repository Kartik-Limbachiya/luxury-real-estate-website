'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/context/auth-context'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowLeft, Search, Filter, FileText, Calendar, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { ProtectedRoute } from '@/components/auth/protected-route'

// Mock data - in a real app, this would come from your database
const mockInquiries = [
  {
    id: '1',
    category: 'Residential',
    subject: 'Apartment Inquiry - 2BHK',
    message: 'I am interested in a 2BHK apartment in your upcoming project. Please provide details about pricing and availability.',
    status: 'pending',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
  },
  {
    id: '2',
    category: 'Commercial',
    subject: 'Office Space Inquiry',
    message: 'Looking for office space for our IT company. Need around 5000 sq ft.',
    status: 'in_progress',
    createdAt: '2024-01-10T14:20:00Z',
    updatedAt: '2024-01-12T09:15:00Z',
  },
  {
    id: '3',
    category: 'Educational',
    subject: 'School Admission Inquiry',
    message: 'Interested in admission for my child in your school. Please share the admission process.',
    status: 'completed',
    createdAt: '2024-01-05T16:45:00Z',
    updatedAt: '2024-01-08T11:30:00Z',
  },
]

const statusConfig = {
  pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-800', icon: Clock },
  in_progress: { label: 'In Progress', color: 'bg-blue-100 text-blue-800', icon: AlertCircle },
  completed: { label: 'Completed', color: 'bg-green-100 text-green-800', icon: CheckCircle },
}

export default function InquiriesPage() {
  const { user } = useAuth()
  const [inquiries, setInquiries] = useState(mockInquiries)
  const [filteredInquiries, setFilteredInquiries] = useState(mockInquiries)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')

  useEffect(() => {
    let filtered = inquiries

    if (searchTerm) {
      filtered = filtered.filter(inquiry =>
        inquiry.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.message.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(inquiry => inquiry.status === statusFilter)
    }

    if (categoryFilter !== 'all') {
      filtered = filtered.filter(inquiry => inquiry.category === categoryFilter)
    }

    setFilteredInquiries(filtered)
  }, [inquiries, searchTerm, statusFilter, categoryFilter])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const getStatusBadge = (status: keyof typeof statusConfig) => {
    const config = statusConfig[status]
    const Icon = config.icon
    return (
      <Badge className={`${config.color} flex items-center gap-1`}>
        <Icon className="w-3 h-3" />
        {config.label}
      </Badge>
    )
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-6">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/profile" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Profile
              </Link>
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">My Inquiries</h1>
            <p className="text-gray-600 mt-2">Track and manage your submitted inquiries</p>
          </div>

          {/* Filters */}
          <Card className="glass-card mb-6">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search inquiries..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="in_progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="educational">Educational</SelectItem>
                    <SelectItem value="medical">Medical</SelectItem>
                    <SelectItem value="social">Social</SelectItem>
                    <SelectItem value="general">General</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('')
                    setStatusFilter('all')
                    setCategoryFilter('all')
                  }}
                  className="flex items-center"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Inquiries List */}
          <div className="space-y-4">
            {filteredInquiries.length === 0 ? (
              <Card className="glass-card">
                <CardContent className="text-center py-12">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No inquiries found</h3>
                  <p className="text-gray-600 mb-4">
                    {searchTerm || statusFilter !== 'all' || categoryFilter !== 'all'
                      ? 'Try adjusting your filters to see more results.'
                      : "You haven't submitted any inquiries yet."}
                  </p>
                  <Button asChild className="premium-hover">
                    <Link href="/#contact-us">Submit Inquiry</Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              filteredInquiries.map((inquiry) => (
                <Card key={inquiry.id} className="glass-card hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{inquiry.subject}</CardTitle>
                        <CardDescription className="mt-1">
                          <Badge variant="outline" className="mr-2">
                            {inquiry.category}
                          </Badge>
                          {getStatusBadge(inquiry.status as keyof typeof statusConfig)}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{inquiry.message}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>Created: {formatDate(inquiry.createdAt)}</span>
                        </div>
                        {inquiry.updatedAt !== inquiry.createdAt && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>Updated: {formatDate(inquiry.updatedAt)}</span>
                          </div>
                        )}
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}











