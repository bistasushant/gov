import Notice from '@/components/Message/Notice';
import MessageRegistrar from '@/components/registrar/registrar';
import React from 'react'


const ObjectivePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900/40">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-4 sm:p-6 lg:p-8">
                    {/* Notice Section - Left Side */}
                    <div className="lg:col-span-4 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
                        <div className="bg-white rounded-xl shadow-lg p-4 mt-28">
                            <Notice />
                        </div>
                    </div>

                    {/* Objective Section - Right Side */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-xl shadow-lg p-4 mt-28">
                            <MessageRegistrar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ObjectivePage;