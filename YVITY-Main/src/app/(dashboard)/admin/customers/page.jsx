"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CustomerProfile from "@/components/CustomerProfile";
import PaginationControls from "@/components/common/PaginationControls";
import { getPaginationData } from "@/lib/pagination";
import { FiUsers, FiCalendar, FiUser } from "react-icons/fi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const FETCH_LIMIT = 5000;
const CUSTOMERS_PER_PAGE = 5;

function Avatar({ src, initials, size = "md" }) {
  const sizeClass = size === "sm" ? "w-8 h-8 text-xs" : "w-10 h-10 text-sm";
  return (
    <div
      className={`${sizeClass} relative rounded-full bg-gradient-to-br from-[#0A4A4A] to-[#0A4A4A]/80 text-white flex items-center justify-center font-bold shrink-0 overflow-hidden`}
    >
      {src ? (
        <Image
          src={src}
          alt={initials || "Customer"}
          fill
          sizes="40px"
          unoptimized
          className="object-cover"
        />
      ) : (
        initials
      )}
    </div>
  );
}

// Helper function to format date to DD/MM/YYYY
const formatDate = (dateString) => {
  if (!dateString) return "—";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "—";
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// StatCard Component with Brand Colors
function StatCard({ icon: Icon, label, value, trend, trendValue, iconBg, trendBg }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex-1 min-w-[160px] max-w-[240px] max-md:max-w-full border border-[#F8F6F1]"
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center shrink-0`}>
          <Icon size={22} stroke="#0A4A4A" strokeWidth={2} />
        </div>
        <span className={`${trendBg} text-[#F59E0B] text-[11px] font-bold rounded-full px-2.5 py-0.5 shrink-0`}>
          {trend} {trendValue}
        </span>
      </div>
      <div className="text-[28px] max-md:text-2xl font-extrabold text-[#0A4A4A] leading-tight font-cormorant">
        {value}
      </div>
      <div className="text-xs text-gray-500 mt-0.5 font-medium font-poppins">
        {label}
      </div>
    </motion.div>
  );
}

export default function CustomersDashboard() {
  const [search, setSearch] = useState("");
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // Data fetching
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/admin/customers?page=1&limit=${FETCH_LIMIT}`);
        const json = await res.json();
        setCustomers(json.data || []);
      } catch (error) {
        console.error("Failed to fetch customers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCustomers();
  }, []);

  // Filtering data
  const filtered = customers.filter(
    (c) =>
      (c.name || "").toLowerCase().includes(search.toLowerCase()) ||
      (c.email || "").toLowerCase().includes(search.toLowerCase()) ||
      (c.location || "").toLowerCase().includes(search.toLowerCase())
  );
  const pagination = getPaginationData(
    filtered,
    currentPage,
    CUSTOMERS_PER_PAGE,
  );
  const paginatedCustomers = pagination.items;

  return (
    <div className="flex flex-col min-h-screen font-poppins bg-[#F8F6F1] overflow-x-hidden w-full">

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — STAT CARDS
          sticky so they don't scroll away on mobile.
          The layout's own navbar/sidebar handles all navigation.
      ═══════════════════════════════════════════════════════════════ */}
      <div className="sticky top-0 bg-[#F8F6F1] px-6 max-md:px-3.5 pt-6 max-md:pt-3.5 pb-3 shrink-0 w-full">
        <div className="flex flex-col sm:flex-row gap-4 max-w-[280px] sm:max-w-full">

          {/* Total Customers */}
          <StatCard
            icon={FiUsers}
            label="Total Customers"
            value={customers.length}
            trend="↑"
            trendValue="34%"
            iconBg="bg-[#F8F6F1] border border-[#F59E0B]/20"
            trendBg="bg-[#FEF3C7]"
          />

          {/* Joined Today */}
          <StatCard
            icon={FiCalendar}
            label="Joined Today"
            value={48}
            trend="+"
            trendValue="48"
            iconBg="bg-[#F8F6F1] border border-[#0A4A4A]/10"
            trendBg="bg-[#DBEAFE]"
          />

        </div>
      </div>
      
      <div className="flex-1 px-6 max-md:px-3.5 pb-6 max-md:pb-3.5 w-full overflow-x-hidden ">

        {/* Sub-header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 mb-1 mt-1"
        >
          <FiUser size={18} stroke="#0A4A4A" strokeWidth={2} />
          <span className="text-base font-bold text-[#0A4A4A] font-cormorant">All Customers</span>
        </motion.div>
        <div className="text-xs text-gray-500 mb-4 font-poppins">
          {`${filtered.length} registered users`}
        </div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-5"
        >
          <div className="flex items-center bg-gradient-to-r from-[#0A4A4A] to-[#0A4A4A]/90 rounded-full px-6 gap-2.5 h-12 shadow-md hover:shadow-lg transition-shadow">
            <input
              className="border-none bg-transparent outline-none text-sm text-white flex-1 placeholder-white/60 font-poppins"
              placeholder="Search by name, email or location..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
            <HiOutlineArrowNarrowRight size={20} className="text-white/70 cursor-pointer shrink-0 hover:text-white transition-colors" />
          </div>
        </motion.div>

        {/* Table card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm border border-[#F8F6F1] overflow-hidden"
        >

          {/* Mobile swipe hint */}
          <div className="md:hidden text-[10px] text-gray-400 text-center px-3 py-1.5 border-b border-gray-100 bg-[#F8F6F1]">
            ← swipe left / right to see all columns →
          </div>

          {/* overflow-x-auto is the ONLY horizontal scroll zone */}
          <div
            className="overflow-x-auto w-full"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#F8F6F1] to-[#F8F6F1]">
                  {["Name","Mobile","Email","City","Profession","Reviews","Last Login","Joined","Actions"].map((h) => (
                    <th
                      key={h}
                      className="text-left text-[11px] font-semibold text-[#0A4A4A] uppercase tracking-wide px-3 py-3 border-b border-gray-200 whitespace-nowrap font-poppins"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {!loading && paginatedCustomers.length === 0 && (
                  <tr>
                    <td
                      colSpan={9}
                      className="px-4 py-10 text-center text-sm text-gray-500"
                    >
                      No customers match the current search.
                    </td>
                  </tr>
                )}

                {loading && (
                  <tr>
                    <td
                      colSpan={9}
                      className="px-4 py-10 text-center text-sm text-gray-500"
                    >
                      Loading customers...
                    </td>
                  </tr>
                )}

                {paginatedCustomers.map((c, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-gray-100 hover:bg-[#F8F6F1]/50 transition-colors"
                  >
                    <td className="px-3 py-3 align-middle">
                      <div className="flex items-center gap-2.5">
                        <Avatar
                          src={c.profile_pic}
                          initials={
                            c.name
                              ? c.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()
                              : "??"
                          }
                          size="sm"
                        />
                        <span className="font-semibold text-[#0A4A4A] text-[13px] whitespace-nowrap font-poppins">
                          {c.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-700 align-middle whitespace-nowrap font-poppins">{`+91 ${c.phone}`}</td>
                    <td className="px-3 py-3 text-xs text-gray-700 align-middle whitespace-nowrap font-poppins">{c.email}</td>
                    <td className="px-3 py-3 text-xs text-gray-700 align-middle whitespace-nowrap font-poppins">{c.location}</td>
                    <td className="px-3 py-3 text-xs text-gray-700 align-middle whitespace-nowrap font-poppins">{c.profession || "—"}</td>
                    <td className="px-3 py-3 align-middle">
                      <span className="bg-[#FEF3C7] text-[#F59E0B] rounded-full px-2.5 py-0.5 text-[11px] font-semibold whitespace-nowrap font-poppins">
                        {`${c.reviewCount} review`}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-500 align-middle whitespace-nowrap font-poppins">{formatDate(c.lastLogin)}</td>
                    <td className="px-3 py-3 text-xs text-gray-500 align-middle whitespace-nowrap font-poppins">{formatDate(c.joinedAt)}</td>
                    <td className="px-3 py-3 align-middle">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setSelectedCustomer(c);
                          setShowCustomerModal(true);
                        }}
                        className="bg-[#0A4A4A] hover:bg-[#0A4A4A]/90 text-white px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer border-none transition-all shadow-sm hover:shadow-md font-poppins"
                      >
                        View
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-3 sm:px-4 lg:px-5">
            <PaginationControls
              pagination={pagination}
              onPageChange={setCurrentPage}
              label="customers"
            />
          </div>
        </motion.div>

      </div>
      {/* ═════════════════════════════════════════════════════════════
          END SECTION 2
      ═══════════════════════════════════════════════════════════════ */}

      {showCustomerModal && (
        <CustomerProfile
          customer={selectedCustomer}
          onClose={() => {
            setShowCustomerModal(false);
            setSelectedCustomer(null);
          }}
        />
      )}
    </div>
  );
}
