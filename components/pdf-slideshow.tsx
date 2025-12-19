"use client"

import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFSlideshowProps {
    pdfUrl: string;
}

export function PDFSlideshow({ pdfUrl }: PDFSlideshowProps) {
    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [loading, setLoading] = useState(true);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setLoading(false);
    }

    const nextPage = () => {
        setPageNumber(prev => Math.min(prev + 1, numPages));
    };

    const prevPage = () => {
        setPageNumber(prev => Math.max(prev - 1, 1));
    };

    return (
        <div className="flex flex-col items-center space-y-6 w-full">
            <div className="relative w-full flex items-center justify-center bg-white/5 backdrop-blur-sm border border-amber-500/20 rounded-3xl p-2 md:p-8 min-h-[500px] shadow-2xl">

                {/* Loader */}
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 rounded-3xl">
                        <Loader2 className="w-12 h-12 text-amber-500 animate-spin" />
                    </div>
                )}

                <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={null}
                    className="max-w-full overflow-hidden flex justify-center drop-shadow-2xl"
                >
                    <Page
                        pageNumber={pageNumber}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        className="rounded-lg overflow-hidden"
                        width={window.innerWidth < 768 ? 350 : 800} // Increased base width for desktop
                        scale={1.2} // Scalling to stretch
                    />
                </Document>

                {/* Left Arrow */}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevPage}
                    disabled={pageNumber <= 1}
                    className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-amber-500 text-black border-4 border-white shadow-xl hover:bg-white hover:text-amber-600 disabled:opacity-0 z-30 transition-all duration-300"
                >
                    <ChevronLeft className="w-8 h-8" />
                </Button>

                {/* Right Arrow */}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextPage}
                    disabled={pageNumber >= numPages}
                    className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-amber-500 text-black border-4 border-white shadow-xl hover:bg-white hover:text-amber-600 disabled:opacity-0 z-30 transition-all duration-300"
                >
                    <ChevronRight className="w-8 h-8" />
                </Button>
            </div>

            {/* Pagination Info */}
            <div className="flex items-center gap-4 bg-amber-100 dark:bg-amber-900/30 px-8 py-3 rounded-full shadow-lg border border-amber-200 dark:border-amber-700/50">
                <span className="font-bold text-amber-900 dark:text-amber-100 tracking-widest uppercase text-sm">
                    Page {pageNumber} <span className="text-amber-500/50 mx-2">|</span> {numPages}
                </span>
            </div>
        </div>
    );
}
