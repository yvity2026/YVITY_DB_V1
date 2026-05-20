"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiBriefcase, FiX } from "react-icons/fi";

export default function CustomerProfile({ onClose, customer }) {
  if (!customer) return null;

  const initials =
    customer.name
      ?.split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "CU";

  const formatDate = (dateString) => {
    if (!dateString) return "—";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "—";
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.2 },
    }),
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="w-full md:w-[450px] max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Gradient */}
        <div className="bg-gradient-to-r from-[#0A4A4A] to-[#0A4A4A]/80 px-6 py-6 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white font-cormorant">
            Customer Profile
          </h2>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <FiX size={20} />
          </motion.button>
        </div>

        {/* Profile Avatar & Name Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4 px-6 py-6 border-b border-gray-100 bg-gradient-to-r from-[#F8F6F1] to-white"
        >
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0A4A4A] to-[#0A4A4A]/80 text-lg font-bold tracking-wide text-white overflow-hidden shadow-md">
            {customer.profile_pic ? (
              <img
                src={customer.profile_pic}
                alt={customer.name || "Customer"}
                className="h-full w-full object-cover"
              />
            ) : (
              initials
            )}
          </div>
          <div className="flex-1">
            <h3 className="mb-2 text-xl font-bold text-[#0A4A4A] font-cormorant">
              {customer.name || "Customer"}
            </h3>
            <div className="flex flex-wrap gap-2">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="rounded-full bg-[#FEF3C7] px-3 py-1 text-[11px] font-semibold text-[#F59E0B] font-poppins"
              >
                Verified
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="rounded-full bg-[#DBEAFE] px-3 py-1 text-[11px] font-semibold text-[#2563EB] font-poppins"
              >
                Active
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <div className="px-6 py-5">
          <h4 className="text-sm font-bold text-[#0A4A4A] mb-4 font-poppins uppercase tracking-wide">
            Contact Information
          </h4>
          <div className="space-y-3">
            {[
              { icon: FiPhone, label: "Mobile", value: customer.phone ? `+91 ${customer.phone}` : "—" },
              { icon: FiMail, label: "Email", value: customer.email || "—" },
              { icon: FiMapPin, label: "Location", value: customer.location || "—" },
              { icon: FiBriefcase, label: "Profession", value: customer.profession || "—" },
            ].map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-3 p-3 rounded-lg bg-[#F8F6F1] hover:bg-[#F8F6F1]/80 transition-colors"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0A4A4A]/10">
                  <Icon size={16} className="text-[#0A4A4A]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-poppins">{label}</p>
                  <p className="text-sm font-semibold text-[#0A4A4A] font-poppins break-words">{value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="px-6 py-5 border-t border-gray-100">
          <h4 className="text-sm font-bold text-[#0A4A4A] mb-3 font-poppins uppercase tracking-wide">
            Activity
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Reviews Given", value: `${customer.reviewCount || 0}`, bg: "bg-[#FEF3C7]", color: "text-[#F59E0B]" },
              { label: "Last Login", value: formatDate(customer.lastLogin), bg: "bg-[#DBEAFE]", color: "text-[#2563EB]" },
            ].map(({ label, value, bg, color }, i) => (
              <motion.div
                key={label}
                custom={i + 4}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className={`${bg} rounded-lg p-4`}
              >
                <p className="text-xs text-gray-600 mb-1 font-poppins">{label}</p>
                <p className={`text-lg font-bold ${color} font-cormorant`}>{value}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Registration Details */}
        <div className="px-6 py-5 border-t border-gray-100 bg-[#F8F6F1]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1 font-poppins">Registration Date</p>
              <p className="text-sm font-semibold text-[#0A4A4A] font-poppins">
                {formatDate(customer.joinedAt)}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-[#0A4A4A] hover:bg-[#0A4A4A]/90 text-white rounded-lg text-xs font-semibold transition-all shadow-sm hover:shadow-md font-poppins"
            >
              Edit Profile
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
