'use client'
import React from 'react'
import Link from 'next/link'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const Footer = () => (
  <footer style={{ background: 'var(--color-dark)', color: '#fff' }}>

    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 24px 32px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '800', fontFamily: F_JOST, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }} data-aos="fade-in">
        Utpalaa The Condoville
      </h2>
      <p style={{ fontSize: '13px', color: 'var(--color-gold)', fontFamily: F_JOST, fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
        New Launch — Ruby, EM Bypass, Kolkata
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
        <span style={{ width: '36px', height: '2.5px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))', borderRadius: '2px' }} />
      </div>
      <p style={{ fontSize: '15px', color: '#bbb', fontFamily: F_SANS, lineHeight: 1.8, marginBottom: '40px', textAlign: 'justify' }}
        data-aos="fade-in" data-aos-delay="100">
        Utpalaa The Condoville is an exclusive luxury residential enclave located at Ruby, off EM Bypass, one of Kolkata&apos;s most sought-after residential locations. Crafted by Ambuja Neotia, the project offers thoughtfully designed, vaastu-compliant 3, 4 &amp; 5 BHK homes (Duplexes) starting from ₹ 2.2 Cr*, featuring expansive layouts, abundant natural light, panoramic views, and iconic triple-height sky balconies. Surrounded by lush greenery yet strategically positioned close to major business hubs, healthcare, education and lifestyle destinations — Utpalaa delivers a refined living experience that blends urban convenience with calm, nature-led living.
      </p>

      {/* RERA Section */}
      <div style={{ marginBottom: '40px' }} data-aos="fade-up">
        <p style={{ fontSize: '14px', color: '#888', fontFamily: F_SANS }}>
          Project RERA Number: <span style={{ color: '#fff', fontWeight: '700', marginLeft: '4px' }}>WBRERA/P/KOL/2025/002427</span>
        </p>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 py-4 px-6 border-t border-[#222] text-center sm:text-left max-w-[1200px] mx-auto">
      <p style={{ fontSize: '13px', color: '#888', fontFamily: F_SANS }}>
        &copy; 2026 Utpalaa The Condoville. All rights reserved.
      </p>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <Link href="/privacy-policy" style={{ fontSize: '13px', color: 'var(--color-gold)', fontFamily: F_SANS }}>
          Privacy Policy
        </Link>
      </div>
    </div>

    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '12px 24px 20px', textAlign: 'center' }}>
      <p style={{ fontSize: '10.5px', color: '#999', fontFamily: F_SANS, lineHeight: 1.7, textAlign: 'justify' }}>
        <strong style={{ color: '#bbb' }}>Disclaimer:</strong> This is not the official website of the developer. The information depicted herein, including master plans, floor plans, furniture layout, fittings, illustrations, specifications, designs, dimensions, rendered views, colours, amenities and facilities etc., are subject to change without notification as may be required by the relevant authorities or the Developer&apos;s architect. This advertisement is an invitation to offer and shall not be construed as an offer or contract. * Prices subject to change without notice. All taxes extra as applicable.
      </p>
    </div>
  </footer>
)

export default Footer
