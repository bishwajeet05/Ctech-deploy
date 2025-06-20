"use client";

import React, { useState } from 'react';
import { FileText, Download } from 'lucide-react';
import PDFViewerModal from '@/components/shared/PDFViewerModal';

const developmentBook = {
  title: "Development Book 2024",
  description: "Comprehensive guide for developers and technical specifications",
  pdfUrl: "/documents/development-book-2024.pdf",
  lastUpdated: "March 15, 2024",
  size: "2.4 MB"
};

export default function DevelopmentBookPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex">
      {/* Sidebar is rendered at the layout level, so just main content here */}
      <main className="flex-1 overflow-y-auto px-4">
        <div className="h-full py-4">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full">
            <div className="p-5 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">Development Book</h1>
                  <p className="mt-1 text-sm text-gray-500">
                    Access the latest development documentation and technical specifications
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-medium text-gray-900">{developmentBook.title}</h2>
                    <p className="mt-1 text-sm text-gray-600">{developmentBook.description}</p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                      <span>Last updated: {developmentBook.lastUpdated}</span>
                      <span>•</span>
                      <span>Size: {developmentBook.size}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      View PDF
                    </button>
                    <a
                      href={developmentBook.pdfUrl}
                      download
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PDFViewerModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          pdfUrl={developmentBook.pdfUrl}
          title={developmentBook.title}
        />
      </main>
    </div>
  );
} 