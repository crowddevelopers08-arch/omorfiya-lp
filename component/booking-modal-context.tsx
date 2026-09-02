"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import BookingModal from "@/component/booking-modal";

type BookingModalContextValue = {
  open: () => void;
};

const BookingModalContext = createContext<BookingModalContextValue | null>(null);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <BookingModalContext.Provider value={{ open }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={close} />
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return ctx;
}
