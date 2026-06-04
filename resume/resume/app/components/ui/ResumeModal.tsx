"use client";

import { ResumeDoc } from "./ResumeDoc";
import { useState } from "react";

export function ResumeModal() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)} className="underline cursor-pointer">
                Preview
            </button>

            {open && (
                <dialog open id="dialog" aria-labelledby="dialog-title" className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
                    <div
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 bg-white/50 backdrop-blur-sm transition-opacity"
                    />

                    <div className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden bg-white text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all sm:my-8 sm:w-full sm:max-w-5xl">
                            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div>
                                    <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full sm:mx-0 sm:size-10">
                                    </div>
                                    <ResumeDoc />
                                </div>
                            </div>
                            <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto"
                                >
                                    Deactivate
                                </button>
                            </div>
                        </div>
                    </div>
                </dialog>
            )}
        </>
    );
}