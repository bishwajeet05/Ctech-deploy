import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth/auth-options'
import { db } from '@/lib/db'
import { redirect } from 'next/navigation'
import { AdminHeader } from '@/components/dashboard/admin-header'

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/admin/login')
  }

  if (session.user.role !== 'ADMIN') {
    redirect('/auth/admin/login')
  }

  const [usersCount, ordersCount, documentsCount] = await Promise.all([
    db.user.count({
      where: {
        type: 'USER'
      }
    }),
    db.order.count(),
    db.document.count(),
  ])

  return (
    <>
      <AdminHeader userName={session.user.name} />
      
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            System overview and statistics
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Total Users</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{usersCount}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Total Orders</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{ordersCount}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Total Documents</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{documentsCount}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Recent Activity</h2>
          <div className="mt-4 bg-white dark:bg-gray-800 shadow rounded-lg">
            <div className="p-6">
              <p className="text-gray-500 dark:text-gray-400 text-sm">No recent activity</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 