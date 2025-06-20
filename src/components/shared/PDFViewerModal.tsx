"use client";

import React from 'react';
import { X, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

type PDFViewerModalProps = {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
};

const PDFViewerModal = ({ isOpen, onClose, pdfUrl, title }: PDFViewerModalProps) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur effect */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="relative w-[90%] max-w-6xl h-[90vh] bg-white/95 rounded-xl shadow-lg overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-6 border-b border-gray-200/80">
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleDownload}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-700"
              title="Download PDF"
            >
              <Download size={20} />
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} className="text-gray-500" />
            </button>
          </div>
        </div>
        
        {/* PDF Viewer */}
        <div className="h-[calc(90vh-5rem)] w-full">
          <iframe
            src={`${pdfUrl}#toolbar=0`}
            className="w-full h-full"
            title={title}
          />
        </div>
      </div>
    </div>
  );
};

export default PDFViewerModal; 